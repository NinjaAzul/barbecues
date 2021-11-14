import { Dispatch, SetStateAction } from "react";

export interface IUser {
  id: string;
  email: string;
}

export type IUserSignInRequestDTO = {
  password: string;
} & Pick<IUser, 'email'>;

export type IUserSignInResponseDTO = {
  user: IUser;
  token: string;
}

export interface IAuthContextData {
  user: IUser | undefined;
  signIn: (user: IUserSignInRequestDTO) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: Dispatch<SetStateAction<IUser>>;
  isAuthenticated: boolean;
}
