import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies } from "nookies";

export function withSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
 
    const cookies = parseCookies(ctx);

    if (cookies["@barbecues:userData"]) {
      return {
        redirect: {
          destination: "/agendamentos",
          permanent: false,
        },
      };
    }
    return await fn(ctx);
  }
  
}