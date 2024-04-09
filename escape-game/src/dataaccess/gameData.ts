import { storage } from "./storage";
import Game from "../models/game";

const GAME_KEY = "game";

const getLastGame = async () : Promise<Game|undefined> => {
    return await storage.getItem(GAME_KEY).then((game) => {
        if (game) {
            return JSON.parse(game);
        }
        return undefined;
    });
};

const setLastGame = async (game: Game) => {
    await storage.setItem(GAME_KEY, JSON.stringify(game));
}

export { getLastGame, setLastGame }
