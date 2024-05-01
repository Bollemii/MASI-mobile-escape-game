import { useEffect, useState } from "react";

import Game from "../models/game";
import { getLastGame } from "../dataaccess/gameData";

export default function useLastGame() {
    const [lastGame, setLastGame] = useState<Game|undefined>(undefined);

    useEffect(() => {
        const fetchLastGame = async () => {
            const game = await getLastGame();
            if (game) setLastGame(game);
        };
        
        fetchLastGame();
    }, []);

    return [lastGame, setLastGame] as const;
};