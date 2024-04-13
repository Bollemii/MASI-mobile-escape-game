
import { storage } from "./storage";

const PSEUDO_KEY = "pseudo";

const getSavedPseudo = async () : Promise<string|undefined> => {
    return await storage.getItem(PSEUDO_KEY);
};

const setSavedPseudo = async (pseudo?: string) => {
    if (!pseudo) {
        await storage.removeItem(PSEUDO_KEY);
        return;
    }
    await storage.setItem(PSEUDO_KEY, pseudo);
}

export { getSavedPseudo, setSavedPseudo }
