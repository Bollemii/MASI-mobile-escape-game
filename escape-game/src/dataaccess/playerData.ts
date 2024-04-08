
import { storage } from "./storage";

const PSEUDO_KEY = "pseudo";

const getSavedPseudo = () : string | undefined => {
    return storage.getItem(PSEUDO_KEY);
};

const setSavedPseudo = (pseudo: string) => {
    storage.setItem(PSEUDO_KEY, pseudo);
}

export { getSavedPseudo, setSavedPseudo }
