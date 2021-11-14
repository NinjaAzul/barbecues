import React from "react";
import Modal, { Styles } from "react-modal";
import { GrClose } from "react-icons/gr";
import { ButtonBase, Grid } from "@material-ui/core";
import { ModalContent } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { createScheduleFormSchema } from "shared/validators/index";
import { Input } from "components/Form/Input";
import { Button } from "components/Form/Button";
import { AxiosError } from "axios";
import { Error500 } from "shared/errors";
import toast from "react-hot-toast";
import { api } from "services/client";
import { useSchedules } from "hooks/useSchedules";

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

interface ModalProps {
  modalIsOpen: boolean;
  onRequestClose: () => void;
  title: string;
}

export const CreateSchedule = ({
  title,
  modalIsOpen,
  onRequestClose,
}: ModalProps) => {
  function toggleOk() {
    onRequestClose();
  }

  const { refetch } = useSchedules();

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(createScheduleFormSchema),
  });
  const { isSubmitting, isSubmitSuccessful, errors } = formState;

  type CreateScheduleData = {
    title: string;
    data: Date;
    with_drink: number;
    no_drink: number;
  };

  const handleCreateSchedule: SubmitHandler<CreateScheduleData> = async (
    values,
    event
  ) => {
    event.preventDefault();

    const createSchedule = {
      title: values.title,
      data: new Date(values.data),
      with_drink: Number(values.with_drink),
      no_drink: Number(values.no_drink),
    };

    try {
      await api.post("/schedule", createSchedule);
      reset();
      onRequestClose();
      refetch();
      toast.success("O agendamento foi criado com sucesso!");
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
          onSubmit={handleSubmit(handleCreateSchedule)}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Input
                variant="withBorder"
                name="title"
                type="text"
                label="Título"
                placeholder="Título"
                error={errors.title}
                {...register("title")}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Input
                variant="withBorder"
                name="data"
                type="date"
                label="Data"
                placeholder="Data"
                error={errors.data}
                {...register("data")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                variant="withBorder"
                name="no_drink"
                type="number"
                step="any"
                label="Sem Bebida (valor sugerido)"
                placeholder="R$ 0,00"
                error={errors.no_drink}
                {...register("no_drink")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                variant="withBorder"
                name="with_drink"
                type="number"
                step="any"
                label="Com bebida (valor sugerido)"
                placeholder="R$ 0,00"
                error={errors.with_drink}
                {...register("with_drink")}
              />
            </Grid>
          </Grid>

          <Button
            disabled={isSubmitting}
            loading={isSubmitting}
            loadingSize={20}
            type="submit"
          >
            Entrar
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
};
