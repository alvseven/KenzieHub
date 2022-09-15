import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CreateTechProps, createUserTech } from "../../services/createTech";

import { getUser } from "../../services/getUser";
import { UserProps, UserProviderData } from "./interface";

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

const UserProvider = ({ children }: UserProps) => {
  const [userName, setUserName] = useState<string>("");
  const [userModule, setUserModule] = useState<string>("");
  const [modalAddIsOpen, setModalAddIsOpen] = useState<boolean>(false);
  const [modalDetailsIsOpen, setModalDetailsIsOpen] = useState<boolean>(false);
  const [techId, setTechId] = useState<string>("");

  useEffect(() => {
    async function getUserInfo() {
      const userId = localStorage.getItem("@kenzie-hub:userId");
      if (userId) {
        try {
          const { name, course_module } = await getUser(userId);
          setUserName(name);
          setUserModule(course_module);
          toast.success(`Seja bem vindo(a)  ${name} =)`, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 4000,
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
    getUserInfo();
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem("@kenzie-hub:token");
    localStorage.removeItem("@kenzie-hub:userId");
  };

  const toggleModalAddVisibility = () => {
    setModalAddIsOpen(!modalAddIsOpen);
  };

  const createTech = async (userData: CreateTechProps) => {
    try {
      const { id } = await createUserTech(userData);
      if (id) {
        toast.success("Tecnologia criada com sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error("Tecnologia já cadastrada!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        userName,
        userModule,
        modalAddIsOpen,
        clearLocalStorage,
        createTech,
        toggleModalAddVisibility,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
