import { storage } from "./storage";
import Game from "../models/game";

const GAME_KEY = "game";

const getLastGame = () : Game | undefined => {
    const game = storage.getItem(GAME_KEY);
    return game ? JSON.parse(game) : undefined;
};

const setLastGame = (game: Game) => {
    storage.setItem(GAME_KEY, JSON.stringify(game));
}

export { getLastGame, setLastGame }
