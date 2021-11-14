import { AxiosError } from 'axios';
import {
  IUser,
  IUserSignInRequestDTO,
  IUserSignInResponseDTO,
} from 'interfaces/auth';
import { setCookie } from 'nookies';
import { Error500 } from 'shared/errors';
import { api, setAuthentication } from './client';

type AuthCookiesProps = {
  accessToken?: string;
  user?: IUser;
};

export const setAuthCookies = ({ accessToken, user }: AuthCookiesProps) => {
  if (accessToken) {
    setCookie(undefined, '@barbecues:accessToken', accessToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
  }
  if (user) {
    setCookie(undefined, '@barbecues:userData', JSON.stringify(user), {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
  }
};

class AuthService {
  async signIn({ email, password }: IUserSignInRequestDTO) {
    try {
      const { data } = await api.post<IUserSignInResponseDTO>('/auth', {
        email,
        password,
      });
      setAuthentication(data.token);
      setAuthCookies({ accessToken: data.token, user: data.user });
      return data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.response.status) {
          case 401:
            throw new Error('Email ou senha inválidos!');
          case 400:
            throw new Error('Email ou senha inválidos!');
          case 500:
            throw new Error(Error500);
          default:
            throw new Error(err.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  }

  async getAuthUser(accessToken: string) {
    try {
      setAuthCookies({ accessToken });
      const { data } = await api.get<IUserSignInResponseDTO>(`/me`);
      setAuthentication(data.token);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.response.status) {
          case 400:
            throw new Error('Erro ao recuperar dados de sua sessão.');
          case 500:
            throw new Error(Error500);
          default:
            throw new Error(err.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  }

 

}

export default new AuthService();
