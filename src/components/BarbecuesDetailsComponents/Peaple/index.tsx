import * as Styles from "./styles";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import React, { useState } from "react";
import { ButtonBase } from "@material-ui/core";
import { Checkbox } from "components/Form/CheckBox";
import { AddPeople } from "components/Modais/AddPeaple";

type Peaple = {
  isChecked: boolean;
  name: string;
  moneyFormated: string;
  id: string;
};

interface PeapleProps {
  peaple: Peaple;
}

export const Peaple = ({ peaple }: PeapleProps) => {
  const [isChecked, setIsChecked] = useState(peaple.isChecked);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Styles.Container>
        <div className="main">
          <Checkbox
            name={peaple.id}
            handleOnChange={handleOnChange}
            isChecked={isChecked}
          />
          <h1>{peaple.name}</h1>
        </div>

        <div className="aside">
          <h2>{peaple.moneyFormated}</h2>
          <ButtonBase className="btn" onClick={() => setModalIsOpen(true)}>
            <MdModeEdit />
          </ButtonBase>

          <ButtonBase className="btn">
            <FaTrash />
          </ButtonBase>
        </div>
      </Styles.Container>
      <AddPeople
        title="Atualizar a Lista"
        modalIsOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </>
  );
};
