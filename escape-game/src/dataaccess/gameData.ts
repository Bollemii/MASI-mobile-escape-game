import { storage } from "./storage";
import Game from "../models/game";

const GAME_KEY = "game";

const getLastGame = async () : Promise<Game|undefined> => {
    return await storage.getItem(GAME_KEY).then((game) => {
        if (game) {
            return Game.fromJSON(game);
        }
        return undefined;
    });
};

const setLastGame = async (game?: Game) => {
    if (!game) {
        await storage.removeItem(GAME_KEY);
        return;
    }
    await storage.setItem(GAME_KEY, game.toJSON());
}

export { getLastGame, setLastGame }
