import { api } from "./api";
import { UserTech } from "./getUser";

export async function editUserTech(
  techInfo: string,
  techId: string
): Promise<UserTech> {
  const token = localStorage.getItem("@kenzie-hub:token");

  const { data } = await api.put(
    `/users/techs/${techId}`,
    { status: techInfo },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}
