import { api } from "@/modules/common/api";

export type UserInfoResponse = {
  solved: number;
  unsolved: number;
};

export const userService = {
  getUserRiddlesStat: async ({
    userId,
  }: {
    userId: number;
  }): Promise<UserInfoResponse> => {
    const { data } = await api.get("/user_riddles_stat", {
      headers: {
        userid: userId,
      },
    });
    return data;
  },
};
