import "react-modern-calendar-datepicker/lib/DatePicker.css";
import React, { useCallback, useEffect, useState } from "react";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import { useDate } from "contexts/DateContext";
import { myCustomLocale } from "./customLocale";
import * as S from "./styles";

interface SelectDateProps {
  onRequestClose?: () => void;
}

export const SelectDate = ({ onRequestClose }: SelectDateProps) => {
  const {
    dateRange,
    setDateRange,
    fromDayText,
    toDayText,
    todayDate,
    isValidContinue,
    toggleApply,
  } = useDate();

  const [selectedDay, setSelectedDay] = useState(null);

  const handleApply = useCallback(() => {
    if (!!onRequestClose) {
      onRequestClose();
    }
    toggleApply();
  }, [onRequestClose, toggleApply]);

  useEffect(() => {
    return;
  }, []);

  const formatInputValue = () => {
    if (!selectedDay) return "";
    return `Day: ${selectedDay.day}`;
  };

  return (
    <S.Container>
      <S.DatePickerContainer>
      <DatePicker
      value={selectedDay}
      onChange={setSelectedDay}
      inputPlaceholder="Select a date" // placeholder
      formatInputText={formatInputValue} // format value
      inputClassName="my-custom-input" // custom class
      shouldHighlightWeekends
      calendarPopperPosition="bottom"
    />
       
      </S.DatePickerContainer>
    </S.Container>
  );
};
