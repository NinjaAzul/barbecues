import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "shared/errors/AuthTokenError";



export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

    const cookies = parseCookies(ctx);
    const token = cookies["@barbecues:accessToken"];

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, "@barbecues:accessToken");
        destroyCookie(ctx, "@barbecues:userData");

        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }
  }
}
