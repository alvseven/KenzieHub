import { api } from "./api";
import { UserTech } from "./getUser";

export interface CreateTechProps {
  title: string;
  status: string;
}

export async function createUserTech(
  techInfo: CreateTechProps
): Promise<UserTech> {
  const token = localStorage.getItem("@kenzie-hub:token");
  const { title, status } = techInfo;
  const { data } = await api.post(
    "/users/techs",
    { title, status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
}
