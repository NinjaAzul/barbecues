import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

import router from "next/router";

import {
  IUser,
  IUserSignInRequestDTO,
  IAuthContextData,
} from "interfaces/auth";
import { destroyCookie, parseCookies } from "nookies";
import { api } from "services/client";
import AuthService from "services/AuthService";

export const AuthContext = createContext({} as IAuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | undefined>();
  const isAuthenticated = !!user;

  useEffect(() => {
    (async () => {
      const { "@barbecues:accessToken": accessToken, "@barbecues:userData": userData } =
        parseCookies();

      if (userData && accessToken) {
        const userFormated: IUser = JSON.parse(userData);
        setUser(userFormated);
      }

      if (accessToken && !userData) {
        try {
          const data = await AuthService.getAuthUser(accessToken);
          setUser(data.user);
        } catch (err) {
          setUser(undefined);
          destroyCookie(undefined, "@barbecues:accessToken");
        }
      }
    })();
  }, []);

  const signIn = useCallback(async (user: IUserSignInRequestDTO) => {
    try {
      const response = await AuthService.signIn(user);
      setUser(response.user);
      toast.success("Logado com sucesso!");
      router.push("/agendamentos");
    } catch (error) {
      toast.error("Ops... algo deu errado!");
    }
  }, []);

  const signOut = useCallback(async () => {
    await new Promise((resolve, reject) => {
      destroyCookie(undefined, "@barbecues:accessToken");
      destroyCookie(undefined, "@barbecues:userId");
      destroyCookie(undefined, "@barbecues:userData");
      const { "@barbecues:accessToken": accessToken } = parseCookies();
      if (!accessToken) {
        setUser(undefined);
        router.push("/home");
        resolve(true);
      } else {
        reject({ message: "Cannot delete cookies!" });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
