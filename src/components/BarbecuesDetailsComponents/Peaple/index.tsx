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

export const Peaple = ({ participant, no_drink, with_drink }: PeapleProps) => {
  const [isChecked, setIsChecked] = useState(participant.isConfirmated);
  const { query } = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");
  const {
    participantsIsChange,
    setParticipantsIsChange,
    setTotalMoney,
    setTotalPeaple,
    totalMoney,
    totalPeaple,
  } = useParticipants();

  const handleOnChange = async (id, contribution) => {
    setLoading(true);
    const total = contribution + totalMoney;
    const totalLess = totalMoney - contribution;
    setIsChecked(!isChecked);
    if (!isChecked) {
      await api.put(`participants/${id}`, { isConfirmated: !isChecked });
      await api.put(`schedule/${query.id}`, {
        total_money: total,
        total_peaple: totalPeaple + 1,
      });
      setTotalPeaple(totalPeaple + 1);
      setTotalMoney(total);
      setLoading(false);
    }

    if (isChecked) {
      await api.put(`participants/${id}`, { isConfirmated: !isChecked });
      await api.put(`schedule/${query.id}`, {
        total_money: totalLess,
        total_peaple: totalPeaple - 1,
      });
      setTotalPeaple(totalPeaple - 1);
      setTotalMoney(totalLess);
      setLoading(false);
    }

    setLoading(false);
  };

  const handleDeleteParticipant = async (id, contribution) => {
    const totalLess = totalMoney - contribution;
    try {
      await api.delete(`/participants/${id}`);
      setParticipantsIsChange(!participantsIsChange);
      await api.put(`schedule/${query.id}`, {
        total_money: totalLess,
        total_peaple: totalPeaple - 1,
      });
      setTotalPeaple(totalPeaple - 1);
      setTotalMoney(totalLess);
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
            disabled={loading}
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
            onClick={() => handleDeleteParticipant(participant.id, participant.contribution)}
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
