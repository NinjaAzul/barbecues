import { parseCookies } from 'nookies';
import { useQuery, UseQueryOptions } from "react-query";
import { api } from "services/client";

type Schedule = {
  id: number;
  title: string;
  data: Date;
  with_drink: number;
  no_drink: number;
  total_money: number;
  total_peaple: number;
  created_at: Date;
  updated_at: Date;
};

type Schedules = {
  schedule: Schedule[];
};



export async function getAllSchedules(ctx = undefined): Promise<Schedules> {

  const { "@barbecues:accessToken": accessToken } =
    parseCookies(ctx);

  const headers = {
    Authorization: `Bearer ${accessToken}`,

  };

  const { data } = await api.get("schedule", { headers });
  return data;
}

export function useSchedules(options?: UseQueryOptions) {
  const { data: SchedulesData, ...rest } = useQuery(["schedules"], () => getAllSchedules(), {
    staleTime: 1000 * 5, // 5 minutos
    ...options,
  });
  const data = SchedulesData as Schedules;
  return { data, ...rest };
}