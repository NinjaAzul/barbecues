import * as Styles from "./styles";
import Image from "next/image";
import { CgLogOff } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useAuth } from "contexts/AuthContext";

interface HeaderProps {
  minHeader?: boolean;
  title: String;
  buttonBack?: boolean;
  buttonSignOut?: boolean;
}

export const Header = ({
  minHeader,
  title,
  buttonBack,
  buttonSignOut,
}: HeaderProps) => {
  const { back } = useRouter();
  const { signOut } = useAuth();

  return (
    <>
      <Styles.Container minHeader={minHeader}>
        <Styles.Content>
          <div className="bgWrap">
            <Image
              alt="barbecue"
              src="/bbq.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            {buttonBack ? (
              <ButtonBase title="Voltar" onClick={() => back()}>
                <BiArrowBack size={20} color="#876e0b" />
              </ButtonBase>
            ) : (
              <div />
            )}
            <h1>{title}</h1>
            {buttonSignOut ? (
              <ButtonBase
                title="Sair"
                className="btn-signOut"
                onClick={() => signOut()}
              >
                <CgLogOff size={20} color="#DC1637" />
              </ButtonBase>
            ) : (
              <div />
            )}
          </div>
        </Styles.Content>
      </Styles.Container>
    </>
  );
};
