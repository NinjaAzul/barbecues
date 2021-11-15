import { Header } from "components/Header";
import { Layout } from "components/layout";
import * as Styles from "styles/pages/BarbecuesListStyles";
import { BarbecuesCard } from "components/BarbecuesListComponents/BarbecuesCard";
import { BarbecuesButton } from "components/BarbecuesListComponents/BarbecuesButton";
import { withSSRAuth } from "utils/withSSRAuth";
import { getAllSchedules, useSchedules } from "hooks/useSchedules";

import React, { useEffect, useState } from "react";
import { formatToBRL } from "utils/formatToBRL";

const BarbecuesList = ({ schedules }) => {
  const { data, isLoading, isFetching, refetch } = useSchedules({
    initialData: schedules,
  });

  return (
    <>
      <Layout title="Agendamentos | Barbecues" whiteBackground>
        <Header title="Agendamentos" minHeader buttonSignOut />
        <Styles.Container>
          <Styles.Content>
            <BarbecuesButton />
            {data.schedule.map((schedule) => (
              <div key={schedule.id}>
                <BarbecuesCard
                  id={schedule.id}
                  title={schedule.title}
                  quantity={schedule.total_peaple}
                  date={schedule?.data}
                  moneyFormated={formatToBRL(schedule.total_money)}
                />
              </div>
            ))}
          </Styles.Content>
        </Styles.Container>
      </Layout>
    </>
  );
};

export default BarbecuesList;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const schedules = await getAllSchedules(ctx);
  return {
    props: { schedules },
  };
});
