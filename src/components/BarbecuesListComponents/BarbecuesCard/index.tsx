import * as Styles from "./styles";
import { Money, Users } from "assets/icons/Icons";
import React from "react";
import Link from "next/link";
import  moment from "moment";
import { useRouter } from "next/router";

interface BarbecuesCardProps {
  title: string;
  date: Date;
  quantity: number;
  moneyFormated: string;
  id:number;
}

export const BarbecuesCard = ({
  id,
  title,
  date,
  quantity,
  moneyFormated,
}: BarbecuesCardProps) => {
  return (
    <>
      <Styles.Container>
        <Link href={`/detalhes/${id}`} passHref>
          <Styles.Content>
            <header>
              <div>
                <h1>{moment(new Date(date)).format("DD/MM/YYYY")}</h1>
              </div>
              <div>
                <h2>{title}</h2>
              </div>
            </header>

            <footer>
              <div>
                <Users />
                <span>{quantity}</span>
              </div>
              <div>
                <Money />
                <span>{moneyFormated}</span>
              </div>
            </footer>
          </Styles.Content>
        </Link>
      </Styles.Container>
    </>
  );
};
