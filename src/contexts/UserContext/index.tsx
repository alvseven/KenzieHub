import {
  createContext,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { CreateTechProps, createUserTech } from "../../services/createUserTech";
import { getUser, UserTech } from "../../services/getUser";
import { UserProps, UserProviderData } from "./interface";
import { editUserTech } from "../../services/editUserTech";
import { eventNames } from "process";
import { deleteUserTech } from "../../services/deleteUserTech";

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

const UserProvider = ({ children }: UserProps) => {
  const [userName, setUserName] = useState<string>("");
  const [userModule, setUserModule] = useState<string>("");
  const [modalAddTechIsOpen, setModalAddTechIsOpen] = useState<boolean>(false);
  const [modalTechDetailsIsOpen, setModalTechDetailsIsOpen] =
    useState<boolean>(false);
  const [tech, setTech] = useState<UserTech>({} as UserTech);
  const [techs, setTechs] = useState<UserTech[]>([]);

  useEffect(() => {
    async function getUserInfo() {
      const userId = localStorage.getItem("@kenzie-hub:userId");
      if (userId) {
        try {
          const { name, course_module, techs } = await getUser(userId);
          setUserName(name);
          setUserModule(course_module);
          setTechs(techs);
          toast.success(`Seja bem vindo(a)  ${name} =)`, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 4000,
          });
        } catch (err) {
          console.error(err);
        }
      }
    }
    getUserInfo();
  }, []);

  useEffect(() => {
    async function getUserTechs() {
      try {
        const userId = localStorage.getItem("@kenzie-hub:userId");
        const { techs } = await getUser(userId);
        setTechs(techs);
      } catch (err) {
        console.error(err);
      }
    }
    getUserTechs();
  }, [techs]);

  const clearLocalStorage = () => {
    localStorage.removeItem("@kenzie-hub:token");
    localStorage.removeItem("@kenzie-hub:userId");
  };

  const setTechToEdit = (tech: UserTech) => {
    toggleModalDetailsVisibility();
    setTech(tech);
  };

  const toggleModalAddVisibility = () => {
    setModalAddTechIsOpen(!modalAddTechIsOpen);
  };

  const toggleModalDetailsVisibility = () => {
    setModalTechDetailsIsOpen(!modalTechDetailsIsOpen);
  };

  const createTech = async (userData: CreateTechProps) => {
    try {
      const { id } = await createUserTech(userData);
      if (id) {
        toggleModalAddVisibility();
        toast.success("Tecnologia criada com sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          toast.error("Essa tecnologia já foi cadastrada!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        } else {
          toast.error("Oops, algo deu errado!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        }
      }
    }
  };

  const editTechStatus = async (
    event: FormEvent,
    id: string,
    status: string
  ) => {
    event.preventDefault();
    try {
      await editUserTech(id, status);
      toggleModalDetailsVisibility();
      toast.success("Tecnologia editada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } catch (err) {
      toast.error("Oops, algo deu errado!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  };

  const deleteTech = async (techId: string) => {
    try {
      await deleteUserTech(techId);
      toggleModalDetailsVisibility();
      toast.success("Tecnologia excluída com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } catch (err) {
      toast.error("Oops, algo deu errado!", {
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
        tech,
        techs,
        modalAddTechIsOpen,
        modalTechDetailsIsOpen,
        clearLocalStorage,
        setTechToEdit,
        toggleModalAddVisibility,
        toggleModalDetailsVisibility,
        createTech,
        editTechStatus,
        deleteTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
