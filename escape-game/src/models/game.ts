export default class Game {
    startDate: Date;
    endDate: Date | undefined;
    lastStep: number;

    constructor(startDate: Date = new Date(), endDate: Date | undefined = undefined, lastStep: number = 0) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.lastStep = lastStep;
    }

    wonStep() {
        this.lastStep++;
    }

    endGame() {
        this.endDate = new Date();
    }

    isFinished() {
        return this.endDate !== undefined;
    }
}
