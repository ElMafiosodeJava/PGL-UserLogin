import { httpRequest } from "./http.service";
import { tokenService } from "./token.service";
import type { ApiResponse } from "./auth.service";

export const welcomeService = {
  getWelcomeMessage: async (): Promise<ApiResponse<string>> => {
    const token = await tokenService.getToken();
    if (!token) {
      throw new Error("No hay token guardado.");
    }

    return httpRequest<ApiResponse<string>>("/welcome", "GET", undefined, {
      Authorization: `Bearer ${token}`,
    });
  },
};
