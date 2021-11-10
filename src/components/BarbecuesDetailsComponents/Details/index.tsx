import * as Styles from "./styles";
import { Money, Users } from "assets/icons/Icons";
import React, { useState } from "react";
import { ButtonBase } from "@material-ui/core";
import { Peaple } from "../Peaple";
import { AddPeople } from "components/Modais/AddPeaple";

interface DetailsProps {
  title: string;
  date: string;
  quantity: number;
  moneyFormated: string;
}

const peaples = [
  {
    id: "1",
    isChecked: true,
    name: "Erick eqwe",
    moneyFormated: "R$ 300,00",
  },
  {
    id: "2",
    isChecked: false,
    name: "Erick eqwe",
    moneyFormated: "R$ 400,00",
  },
  {
    id: "3",
    isChecked: true,
    name: "Erickeqwe",
    moneyFormated: "R$ 500,00",
  },
  {
    id: "4",
    isChecked: false,
    name: "Erick eqeq",
    moneyFormated: "R$ 700,00",
  },
  {
    id: "5",
    isChecked: true,
    name: "Erick de Freitas",
    moneyFormated: "R$ 800,00",
  },
];

export const Details = ({
  title,
  date,
  quantity,
  moneyFormated,
}: DetailsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Styles.Container>
        <Styles.Content>
          <header>
            <main>
              <h1>{date}</h1>

              <h2>{title}</h2>
            </main>

            <main className="side">
              <div>
                <Users />
                <span>{quantity}</span>
              </div>

              <div>
                <Money />
                <span>{moneyFormated}</span>
              </div>

              <ButtonBase onClick={() => setModalIsOpen(true)}>
                NOVO <Users color="var(--black)" size={10} />
              </ButtonBase>
            </main>
          </header>

          {peaples.map((people) => (
            <Peaple key={people.id} peaple={people} />
          ))}
        </Styles.Content>
      </Styles.Container>
      <AddPeople
        title="Adicionar a Lista"
        modalIsOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </>
  );
};
