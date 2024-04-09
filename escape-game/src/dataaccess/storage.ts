import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
    getItem: async (key: string) : Promise<any> => {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.error(`Error while getting ${key} from storage`, error);
        }
    },
    setItem: async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.error(`Error while setting ${key} in storage`, error);
        }
    },
};
