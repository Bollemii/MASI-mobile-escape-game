
import { storage } from "./storage";

const PSEUDO_KEY = "pseudo";

const getSavedPseudo = async () : Promise<string|undefined> => {
    return await storage.getItem(PSEUDO_KEY);
};

const setSavedPseudo = async (pseudo: string) => {
    await storage.setItem(PSEUDO_KEY, pseudo);
}

export { getSavedPseudo, setSavedPseudo }
