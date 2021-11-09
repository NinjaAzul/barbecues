import Head from "next/head";
import {  ReactNode } from "react";
import * as Styles from "./styles";
import { LogoFooterTrinca } from "assets/icons/Icons";


interface LayoutProps {
  children: ReactNode;
  title: String;
  whiteBackground?: boolean;
}

export const Layout = ({
  children,
  title,
  whiteBackground,
}: LayoutProps) => {
  return (
    <>
      <Styles.Container whiteBackground={whiteBackground}>
        <Head>
          <title>{title || "Barbecues"}</title>
        </Head>

        <Styles.Content>{children}</Styles.Content>

        <Styles.Footer>
            <LogoFooterTrinca size={70}/>
          </Styles.Footer>
      </Styles.Container>
    </>
  );
};
