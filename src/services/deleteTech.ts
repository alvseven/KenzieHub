import { api } from "./api";
import { UserTech } from "./getUser";

export async function deleteUserTech(techId: string): Promise<UserTech> {
  const token = localStorage.getItem("@kenzie-hub:token");

  const { data } = await api.delete(`/users/techs/${techId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
