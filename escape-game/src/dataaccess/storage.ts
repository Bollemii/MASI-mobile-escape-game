import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
    getItem: (key: string) : any|undefined => {
        try {
            AsyncStorage.getItem(key).then((value) => {
                return value || undefined;
            });
        } catch (error) {
            console.error(`Error while getting ${key} from storage`, error);
            return undefined;
        }
    },
    setItem: (key: string, value: string) => {
        try {
            AsyncStorage.setItem(key, value);
            console.log(`Set ${key} in storage to ${value}`);
        } catch (error) {
            console.error(`Error while setting ${key} in storage`, error);
        }
    },
};
