import * as Styles from "./styles";
import { Money, Users } from "assets/icons/Icons";
import React from "react";

interface BarbecuesCardProps {
  title: string;
  date: string;
  quantity: number;
  moneyFormated: string;
}

export const BarbecuesCard = ({
  title,
  date,
  quantity,
  moneyFormated,
}: BarbecuesCardProps) => {
  return (
    <>
      <Styles.Container>
        <Styles.Content>
          <header>
            <div>
              <h1>{date}</h1>
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
      </Styles.Container>
    </>
  );
};
