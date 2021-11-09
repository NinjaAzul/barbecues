import React from 'react';
import { DayRange } from '@hassanmojab/react-modern-calendar-datepicker';
import { dateFormatter } from "../components/SelectRentalRange/helper/dateFormatter";
import { format } from 'date-fns';

interface IDateContextData {
  setDateRange: React.Dispatch<React.SetStateAction<DayRange>>;
  dateRange: DayRange;
  toDayText: string;
  fromDayText: string;
  toDayDate: string;
  fromDayDate: string;
  todayDate: string[];
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  toggleApply: () => void;
  isValidContinue: boolean;
}

export const DateContext = React.createContext(
  {} as IDateContextData
);

interface IDateProviderProps {
  children: React.ReactNode;
}

export const DateProvider = ({ children }: IDateProviderProps) => {
  const [dateRange, setDateRange] = React.useState<DayRange>({
    from: null,
    to: null,
  });

  const [toDayText, setToDayText] = React.useState('');
  const [fromDayText, setFromDayText] = React.useState('');

  const [toDayDate, setToDayDate] = React.useState('');
  const [fromDayDate, setFromDayDate] = React.useState('');

  const todayDate = format(new Date(), 'yyyy-MM-dd').split('-');

  const [isSelected, setIsSelected] = React.useState(false);

  React.useEffect(() => {
    const formatedDates = dateFormatter(dateRange);
    setToDayText(formatedDates.toDateText);
    setFromDayText(formatedDates.fromDateText);
    setFromDayDate(formatedDates.fromDate);
    setToDayDate(formatedDates.toDate);
  }, [dateRange]);
  const isValidContinue = !!toDayDate && !!fromDayDate;

  const toggleApply = () => {
    if (!isValidContinue) {
      setIsSelected(false);
      return //toastfy here!
    }
    setIsSelected(true);
  };

  return (
    <DateContext.Provider
      value={{
        dateRange,
        setDateRange,
        toDayText,
        fromDayText,
        toDayDate,
        fromDayDate,
        todayDate,
        isSelected,
        setIsSelected,
        toggleApply,
        isValidContinue,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => React.useContext(DateContext);
