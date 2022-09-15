import { ReactNode } from "react";
import { CreateTechProps } from "../../services/createTech";

export interface UserProps {
  children: ReactNode;
}

export interface UserProviderData {
  userName: string;
  userModule: string;
  modalAddIsOpen: boolean;
  clearLocalStorage: () => void;
  createTech: (userData: CreateTechProps) => void;
  toggleModalAddVisibility: () => void;
}
