import * as Styles from "./styles";
import Image from "next/image";

interface HeaderProps {
  minHeader?: boolean;
  title: String;
}

export const Header = ({ minHeader, title }: HeaderProps) => {
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
             <h1>{title}</h1>
          </div>
         
        </Styles.Content>
      </Styles.Container>
    </>
  );
};
