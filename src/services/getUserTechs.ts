import { api } from "./api";
import { UserTech } from "./getUser";

export async function getUserTechs(userId: string | null): Promise<UserTech> {
  const { data } = await api.get<UserTech>(`/users/${userId}`);
  return data;
}
