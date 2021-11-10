import React from "react";
import Modal, { Styles } from "react-modal";
import { GrClose } from "react-icons/gr";
import { ButtonBase, Grid } from "@material-ui/core";
import { ModalContent } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { signInFormSchema } from "shared/validators/index";
import { Input } from "components/Form/Input";
import { Button } from "components/Form/Button";

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

export const AddPeople = ({
  title,
  modalIsOpen,
  onRequestClose,
}: ModalProps) => {
  function toggleOk() {
    onRequestClose();
  }

  const isEdit = true;

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { isSubmitting, isSubmitSuccessful, errors } = formState;

  type SignInFormData = {
    email: string;
    password: string;
  };

  const handleAddPeople: SubmitHandler<SignInFormData> = async (
    data,
    event
  ) => {
    // await new Promise((resolve) => setTimeout(resolve, 6000)); // 6sig awaiting.

    // // if (isSubmitSuccessful) {
    // //   alert("deu bom cuzão");
    // // }

    // reset();
    console.log(data);
  };

  const handleEditPeople: SubmitHandler<SignInFormData> = async (
    data,
    event
  ) => {
    // await new Promise((resolve) => setTimeout(resolve, 6000)); // 6sig awaiting.

    // // if (isSubmitSuccessful) {
    // //   alert("deu bom cuzão");
    // // }

    // reset();
    console.log(data);
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
            <Grid item xs={12} sm={6}>
              <p className="value-suggestion">
                Com Bebida: <span> R$: 100,00</span>
              </p>
            </Grid>

            <Grid item xs={12} sm={6}>
              <p className="value-suggestion">
                Sem Bebida: <span> R$: 50,00</span>
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                variant="withBorder"
                name="nome"
                type="text"
                label="Nome"
                placeholder="Nome"
                error={errors.email}
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                variant="withBorder"
                name="value"
                type="number"
                label="Valor de Contribuição"
                placeholder="R$ 0,00"
                error={errors.email}
                {...register("email")}
              />
            </Grid>
          </Grid>

          <Button
            disabled={isSubmitting}
            loading={isSubmitting}
            loadingSize={20}
            type="submit"
          >
            {isEdit ? "Atualizar " : "Entrar"}
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
};
