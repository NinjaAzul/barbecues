import { createContext, ReactNode, useContext, useState } from "react";

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

type IParticipantsContextData = {
  participantsIsChange: boolean;
  setParticipantsIsChange: React.Dispatch<React.SetStateAction<boolean>>;
  schedule: Schedule;
  setSchedule: React.Dispatch<React.SetStateAction<{}>>;

  totalMoney: number;
  setTotalMoney: React.Dispatch<React.SetStateAction<number>>;
  totalPeaple: number;
  setTotalPeaple: React.Dispatch<React.SetStateAction<number>>;
};

export const ParticipantsContext = createContext(
  {} as IParticipantsContextData
);

interface ParticipantsProviderProps {
  children: ReactNode;
}

export function ParticipantsProvider({ children }: ParticipantsProviderProps) {
  const [participantsIsChange, setParticipantsIsChange] = useState(false);
  const [schedule, setSchedule] = useState<Schedule>({} as Schedule);
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalPeaple, setTotalPeaple] = useState(0);

  return (
    <ParticipantsContext.Provider
      value={{
        participantsIsChange,
        setParticipantsIsChange,
        schedule,
        setSchedule,
        totalMoney,
        setTotalMoney,
        totalPeaple,
        setTotalPeaple,
      }}
    >
      {children}
    </ParticipantsContext.Provider>
  );
}

export const useParticipants = () => useContext(ParticipantsContext);
