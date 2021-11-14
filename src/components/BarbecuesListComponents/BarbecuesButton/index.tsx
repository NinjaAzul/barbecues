import * as Styles from "./styles";
import { Bbq } from "assets/icons/Icons";
import React, { useState } from "react";
import { ButtonBase } from "@material-ui/core";
import { CreateSchedule } from "components/Modais/CreateSchedule";


interface BarbecuesButtonProps {}

export const BarbecuesButton = ({}: BarbecuesButtonProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);



  return (
    <>
      <Styles.Container>
        <Styles.Content>
          <ButtonBase onClick={() => setModalIsOpen(true)}>
            <Bbq />
          </ButtonBase>
          <h1>Adicionar Churras</h1>
        </Styles.Content>
      </Styles.Container>
      <CreateSchedule
        title="Agendar"
        modalIsOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </>
  );
};
