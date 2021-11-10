export interface IUser {
  id: string;
  email: string;
}

export type IUserSignInRequestDTO = {
  password: string;
} & Pick<IUser, 'email'>;

export type IUserSignInResponseDTO = {
  user: IUser;
  accessToken: string;
}

// export type IUserSignUpRequestDTO = {
//   password: string;
// } & Pick<IUser, 'email' | 'driver_license' | 'name'>;


export interface IAuthContextData {
  user: IUser | undefined;
  signIn: (user: IUserSignInRequestDTO) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}
