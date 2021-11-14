import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type IParticipantsContextData = {
  participantsIsChange: boolean;
  setParticipantsIsChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ParticipantsContext = createContext(
  {} as IParticipantsContextData
);

interface ParticipantsProviderProps {
  children: ReactNode;
}

export function ParticipantsProvider({ children }: ParticipantsProviderProps) {
  const [participantsIsChange, setParticipantsIsChange] = useState(false);

  return (
    <ParticipantsContext.Provider
      value={{ participantsIsChange, setParticipantsIsChange }}
    >
      {children}
    </ParticipantsContext.Provider>
  );
}

export const useParticipants = () => useContext(ParticipantsContext);
