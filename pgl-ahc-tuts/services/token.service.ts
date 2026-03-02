import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "user_token";

export const tokenService = {
  saveToken: async (token: string): Promise<void> => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  },

  getToken: async (): Promise<string | null> => {
    return AsyncStorage.getItem(TOKEN_KEY);
  },

  removeToken: async (): Promise<void> => {
    await AsyncStorage.removeItem(TOKEN_KEY);
  },
};
