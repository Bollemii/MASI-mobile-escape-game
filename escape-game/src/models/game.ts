export default class Game {
    static MAX_STEP = 3;

    private _startDate?: Date;
    private _endDate?: Date;
    private _lastStep?: number;

    constructor(startDate: Date = new Date(), endDate: Date | undefined = undefined, lastStep: number = 0) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.lastStep = lastStep;
    }

    get startDate() : Date {
        if (!this._startDate) {
            throw new Error("Start date not set");
        }

        return this._startDate;
    }
    set startDate(date: Date) {
        if (!date) {
            throw new Error("Start date is required");
        }
        if (date > new Date()) {
            throw new Error("Invalid start date");
        }

        this._startDate = date;
    }

    get endDate() : Date | undefined {
        return this._endDate;
    }
    set endDate(date: Date | undefined) {
        if (date !== undefined && date > new Date()) {
            throw new Error("Invalid end date");
        }
        if (date !== undefined && date < this.startDate) {
            throw new Error("Invalid end date, must be after start date");
        }

        this._endDate = date;
    }

    get lastStep() : number {
        if (this._lastStep === undefined) {
            throw new Error("Last step not set");
        }
        
        return this._lastStep;
    }
    set lastStep(step: number) {
        if (step === undefined) {
            throw new Error("Last step is required");
        }
        if (step < 0 || step > Game.MAX_STEP) {
            throw new Error("Invalid step number");
        }

        this._lastStep = step;
    }

    wonStep() {
        if (this.lastStep === Game.MAX_STEP) {
            throw new Error("All steps have already been completed");
        }
        this.lastStep++;
    }

    endGame() {
        if (this.endDate !== undefined) {
            throw new Error("Game already ended");
        }
        if (this.lastStep !== Game.MAX_STEP) {
            throw new Error("All steps must be completed before ending the game");
        }
        this.endDate = new Date();
    }

    isInProgress() : boolean {
        return this.endDate === undefined && this.lastStep !== 0 && this.lastStep !== Game.MAX_STEP;
    }

    isFinished() : boolean {
        return this.endDate !== undefined;
    }

    static fromJSON(json: string) {
        const jsonObj = JSON.parse(json);
        return new Game(new Date(jsonObj.startDate), jsonObj.endDate ? new Date(jsonObj.endDate) : undefined, jsonObj.lastStep);
    }

    toJSON() : string {
        return JSON.stringify({
            startDate: this.startDate,
            endDate: this.endDate,
            lastStep: this.lastStep,
        });
    }
}
