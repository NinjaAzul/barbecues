import * as Styles from "./styles";
import { Money, Users } from "assets/icons/Icons";
import React, { useState } from "react";
import { ButtonBase } from "@material-ui/core";
import { Peaple } from "../Peaple";
import { AddPeople } from "components/Modais/AddPeaple";
import moment from "moment";
import { formatToBRL } from "utils/formatToBRL";
import { useParticipants } from "contexts/ParticipantsContext";

type Participants = {
  id: string;
  name: string;
  contribution: number;
  isConfirmated: boolean;
};

type Schedule = {
  schedule: {
    id: number;
    title: string;
    data: Date;
    with_drink: number;
    no_drink: number;
    total_money: number;
    total_peaple: number;
    created_at: Date;
    updated_at: Date;
    participants: Participants[];
  };
};

export const Details = ({ schedule }: Schedule) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { totalMoney, totalPeaple } = useParticipants();

  return (
    <>
      <Styles.Container>
        <Styles.Content>
          <header>
            <main>
              <h1>{moment(schedule?.data).locale("pt-br").format("L")}</h1>

              <h2>{schedule?.title}</h2>
            </main>

            <main className="side">
              <div>
                <Users />
                <span>{totalPeaple}</span>
              </div>

              <div>
                <Money />
                <span>{formatToBRL(totalMoney)}</span>
              </div>

              <ButtonBase onClick={() => setModalIsOpen(true)}>
                NOVO <Users color="var(--black)" size={10} />
              </ButtonBase>
            </main>
          </header>

          {schedule?.participants &&
            schedule?.participants.map((participant) => (
              <Peaple
                key={participant.id}
                total_money={schedule?.total_money}
                quantity={schedule?.total_peaple}
                participant={participant}
                with_drink={schedule?.with_drink}
                no_drink={schedule?.no_drink}
              />
            ))}
        </Styles.Content>
      </Styles.Container>
      <AddPeople
        title="Adicionar a Lista"
        modalIsOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        with_drink={schedule?.with_drink}
        no_drink={schedule?.no_drink}
        isEdit={isEdit}
      />
    </>
  );
};
