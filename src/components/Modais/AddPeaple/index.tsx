import React, { useEffect } from "react";
import Modal, { Styles } from "react-modal";
import { GrClose } from "react-icons/gr";
import { ButtonBase, Grid } from "@material-ui/core";
import { ModalContent } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { participantFormSchema } from "shared/validators/index";
import { Input } from "components/Form/Input";
import { Button } from "components/Form/Button";
import { formatToBRL } from "utils/formatToBRL";
import { api } from "services/client";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { Error500 } from "shared/errors";
import { useParticipants } from "contexts/ParticipantsContext";

const customStyles: Styles = {
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1100,
    margin: "0 auto",
  },
  overlay: {
    zIndex: 1000,
    background: "#F1F1F1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

Modal.setAppElement("#__next");

type Participant = {
  id: string;
  contribution: number;
  name: string;
};

interface ModalProps {
  modalIsOpen: boolean;
  onRequestClose: () => void;
  title: string;
  with_drink: number;
  no_drink: number;
  isEdit: boolean;
  participant?: Participant;
}

export const AddPeople = ({
  title,
  no_drink,
  with_drink,
  modalIsOpen,
  isEdit,
  participant,
  onRequestClose,
}: ModalProps) => {
  function toggleOk() {
    onRequestClose();
  }

  const { query } = useRouter();
  const { setParticipantsIsChange, participantsIsChange } = useParticipants();

  const { register, handleSubmit, formState, reset, setValue } = useForm({
    resolver: yupResolver(participantFormSchema),
  });
  const { isSubmitting, isSubmitSuccessful, errors } = formState;

  type CreateParticipantFormData = {
    name: string;
    contribution: number;
  };

  type UpdateParticipantFormData = {
    name: string;
    contribution: number;
  };

  useEffect(() => {
    setValue("name", participant?.name);
    setValue("contribution", participant?.contribution);
  }, [participant?.name,participant?.contribution]);

  const handleAddPeople: SubmitHandler<CreateParticipantFormData> = async (
    values,
    event
  ) => {
    event.preventDefault();

    const createParticipant = {
      name: values.name,
      contribution: Number(values.contribution),
      schedules_id: query.id,
    };

    try {
      await api.post("/participants", createParticipant);
      reset();
      onRequestClose();
      setParticipantsIsChange(!participantsIsChange);
      toast.success("O participante foi criado com sucesso!");
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

    console.log(values);
  };

  const handleEditPeople: SubmitHandler<UpdateParticipantFormData> = async (
    values,
    event
  ) => {
    event.preventDefault();

    const updateParticipant = {
      name: values.name,
      contribution: Number(values.contribution),
    };

    try {
      await api.put(`/participants/${participant.id}`, updateParticipant);
      reset();
      onRequestClose();
      setParticipantsIsChange(!participantsIsChange);
      toast.success("O participante foi atualizado com sucesso!");
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

    console.log(values);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
      style={customStyles}
      bodyOpenClassName="modalOpen"
      className="modalContent"
    >
      <ModalContent>
        <header>
          <div className="hidden" />
          <div>{title}</div>
          <div>
            <ButtonBase className="btn-x" onClick={() => onRequestClose()}>
              <GrClose />
            </ButtonBase>
          </div>
        </header>

        <form
          className="form-container-modal"
          onSubmit={
            isEdit
              ? handleSubmit(handleEditPeople)
              : handleSubmit(handleAddPeople)
          }
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6}>
              <p className="value-suggestion">
                Com Bebida: <span> {formatToBRL(with_drink)}</span>
              </p>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <p className="value-suggestion">
                Sem Bebida: <span> {formatToBRL(no_drink)}</span>
              </p>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Input
                variant="withBorder"
                name="name"
                type="text"
                label="Nome"
                placeholder="Nome"
                error={errors.name}
                {...register("name")}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className="mbttom">
              <Input
                variant="withBorder"
                name="contribution"
                type="number"
                step="any"
                label="Valor de Contribuição"
                placeholder="R$ 0,00"
                error={errors.contribution}
                {...register("contribution")}
              />
            </Grid>
          </Grid>

          <Button
            disabled={isSubmitting}
            loading={isSubmitting}
            loadingSize={20}
            type="submit"
          >
            {isEdit ? "Atualizar" : "Adicionar"}
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
};
