import * as Styles from "./styles";
import { Money, Users } from "assets/icons/Icons";
import React, { useState } from "react";
import { ButtonBase } from "@material-ui/core";
import { Peaple } from "../Peaple";
import { AddPeople } from "components/Modais/AddPeaple";

type Participants = {
  id: string;
  name: string;
  contribution: number;
  isConfirmated: boolean;
};

interface DetailsProps {
  title: string;
  date: string;
  quantity: number;
  moneyFormated: string;
  total_money: number;
  with_drink: number;
  no_drink: number;
  participants: Participants[];
}

export const Details = ({
  title,
  date,
  quantity,
  moneyFormated,
  total_money,
  with_drink,
  no_drink,
  participants,
}: DetailsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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

          {participants &&
            participants.map((participant) => (
              <Peaple
                key={participant.id}
                total_money={total_money}
                quantity={quantity}
                participant={participant}
                with_drink={with_drink}
                no_drink={no_drink}
              />
            ))}
        </Styles.Content>
      </Styles.Container>
      <AddPeople
        title="Adicionar a Lista"
        modalIsOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        with_drink={with_drink}
        no_drink={no_drink}
        isEdit={isEdit}
      />
    </>
  );
};
