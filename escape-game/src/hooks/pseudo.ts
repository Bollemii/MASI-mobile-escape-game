import { useEffect, useState } from "react";

import { getSavedPseudo } from "../dataaccess/playerData";

export default function usePseudo(defaultStr = "Joueur") {
    const [pseudo, setPseudo] = useState<string>(defaultStr);

    useEffect(() => {
        const fetchPseudo = async () => {
            const str = await getSavedPseudo();
            if (str) setPseudo(str);
        };
        fetchPseudo();
    }, []);

    return [pseudo, setPseudo] as const;
}
