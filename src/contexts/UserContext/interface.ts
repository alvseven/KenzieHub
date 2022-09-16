import { FormEvent, ReactNode } from "react";

import { CreateTechProps } from "../../services/createUserTech";
import { UserTech } from "../../services/getUser";

export interface UserProps {
  children: ReactNode;
}

export interface UserProviderData {
  userName: string;
  userModule: string;
  tech: UserTech;
  techs: UserTech[];
  modalAddTechIsOpen: boolean;
  modalTechDetailsIsOpen: boolean;
  clearLocalStorage: () => void;
  setTechToEdit: (tech: UserTech) => void;
  toggleModalAddVisibility: () => void;
  toggleModalDetailsVisibility: () => void;
  createTech: (userData: CreateTechProps) => void;
  editTechStatus: (event: FormEvent, id: string, status: string) => void;
  deleteTech: (techId: string) => void;
}
