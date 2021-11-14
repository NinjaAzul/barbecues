import * as Styles from "./styles";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import React, { useState } from "react";
import { ButtonBase } from "@material-ui/core";
import { Checkbox } from "components/Form/CheckBox";
import { AddPeople } from "components/Modais/AddPeaple";
import { formatToBRL } from "utils/formatToBRL";
import toast from "react-hot-toast";
import { Error500 } from "shared/errors";
import { AxiosError } from "axios";
import { useParticipants } from "contexts/ParticipantsContext";
import { api } from "services/client";
import { useRouter } from "next/router";

type Participants = {
  id: string;
  name: string;
  contribution: number;
  isConfirmated: boolean;
};

interface PeapleProps {
  participant: Participants;
  total_money: number;
  with_drink: number;
  no_drink: number;
  quantity: number;
}

export const Peaple = ({
  participant,
  no_drink,
  with_drink,
  total_money,
  quantity,
}: PeapleProps) => {
  const [isChecked, setIsChecked] = useState(participant.isConfirmated);
  const { query } = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");
  const { participantsIsChange, setParticipantsIsChange } = useParticipants();

  const handleOnChange = async (id, contribution) => {
    const total = contribution + total_money;
    const totalLess =  total_money - contribution;
    console.log(total);
    setIsChecked(!isChecked);
    if(!isChecked){
      await api.put(`participants/${id}`, { isConfirmated: !isChecked });
      await api.put(`schedule/${query.id}` , {total_money : total , total_peaple: quantity + 1});
      setParticipantsIsChange(!participantsIsChange);
    }

    if(isChecked){
      await api.put(`participants/${id}`, { isConfirmated: !isChecked });
      await api.put(`schedule/${query.id}` , {total_money : totalLess , total_peaple: quantity - 1});
      setParticipantsIsChange(!participantsIsChange);
    }
  
  };

  const handleDeleteParticipant = async (id) => {
    try {
      await api.delete(`/participants/${id}`);
      setParticipantsIsChange(!participantsIsChange);
      toast.success("O participante foi deletado com sucesso!");
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.response.status) {
          case 500:
            toast.error("Ops... algo deu errado!");
            throw new Error(Error500);
          default:
            throw new Error(err.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  };

  return (
    <>
      <Styles.Container>
        <div className="main">
          <Checkbox
            name={participant.id}
            handleOnChange={() =>
              handleOnChange(participant.id, participant.contribution)
            }
            isChecked={isChecked}
          />
          <h1 className={isChecked && `checked`}>{participant.name}</h1>
        </div>

        <div className="aside">
          <h2 className={isChecked && `checked`}>
            {formatToBRL(participant.contribution)}
          </h2>
          <ButtonBase
            className="btn"
            onClick={() => {
              setModalIsOpen(true);
              setIsEdit(true);
            }}
          >
            <MdModeEdit />
          </ButtonBase>

          <ButtonBase
            className="btn"
            onClick={() => handleDeleteParticipant(participant.id)}
          >
            <FaTrash />
          </ButtonBase>
        </div>
      </Styles.Container>
      <AddPeople
        participant={participant}
        isEdit={isEdit}
        no_drink={no_drink}
        with_drink={with_drink}
        title="Atualizar a Lista"
        modalIsOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </>
  );
};
