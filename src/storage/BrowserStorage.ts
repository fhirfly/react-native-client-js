import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Storage
{
    /**
     * Gets the value at `key`. Returns a promise that will be resolved
     * with that value (or undefined for missing keys).
     */
    async get(key: string): Promise<any>
    {
        
		const getData = async () => {
		  try {
			const value = await AsyncStorage.getItem(key)
			if(value !== null) {
				return JSON.parse(value);
			}
		  } catch(e) {
			return null;
		  }
		}
    }

    /**
     * Sets the `value` on `key` and returns a promise that will be resolved
     * with the value that was set.
     */
    async set(key: string, value: any): Promise<any>
    {
		
		const storeData = async (value) => {
		  try {
			await AsyncStorage.setItem(key, JSON.stringify(value))
			return value;
		  } catch (e) {
			return e;
		  }
    }

    /**
     * Deletes the value at `key`. Returns a promise that will be resolved
     * with true if the key was deleted or with false if it was not (eg. if
     * did not exist).
     */
    async unset(key: string): Promise<boolean>
    {
        if (key in AsyncStorage) {
            delete AsyncStorage[key];
            return true;
        }
        return false;
    }

}
