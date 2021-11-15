import { Header } from "components/Header";
import { Layout } from "components/layout";
import * as Styles from "styles/pages/BarbecuesDetailsStyles";
import type { NextPage } from "next";
import { Details } from "components/BarbecuesDetailsComponents/Details";
import { withSSRAuth } from "utils/withSSRAuth";
import { api } from "services/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParticipants } from "contexts/ParticipantsContext";

const BarbecuesDetails: NextPage = () => {
  const { query } = useRouter();
  const id = query.id;
  const [loading, setLoading] = useState(false);
  const { participantsIsChange, setSchedule, schedule , setTotalMoney, setTotalPeaple} = useParticipants();

  const getSchedules = async () => {
    setLoading(true);
    const { data } = await api.get(`/schedule/${id}`);
    setSchedule(data);
    setTotalMoney(data.schedule.total_money);
    setTotalPeaple(data.schedule.total_peaple);
    setLoading(false);
  };

  useEffect(() => {
    getSchedules();
  }, [id, participantsIsChange]);

  return (
    <>
      <Layout title="Detalhes | Barbecues" whiteBackground>
        <Header title="Detalhes" minHeader buttonBack buttonSignOut />
        <Styles.Container>
          <Styles.Content>
            {loading ? (
              <div className="loading">
                <CircularProgress size={20} color="inherit" />
              </div>
            ) : (
              <Details schedule={schedule?.schedule} />
            )}
          </Styles.Content>
        </Styles.Container>
      </Layout>
    </>
  );
};

export default BarbecuesDetails;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
