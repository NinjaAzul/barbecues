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
import moment from "moment";
import { formatToBRL } from "utils/formatToBRL";
import { useParticipants } from "contexts/participantsContext";

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

const BarbecuesDetails: NextPage = () => {
  const { query } = useRouter();
  const id = query.id;
  const [details, setDetails] = useState({} as Schedule);
  const [loading, setLoading] = useState(false);
  const { participantsIsChange } = useParticipants();

  const getSchedules = async () => {
    setLoading(true);
    const { data } = await api.get(`/schedule/${id}`);
    setDetails(data);
    setLoading(false);
  };

  useEffect(() => {
    getSchedules();
  }, [id, participantsIsChange]);

  console.log(details);

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
              <Details
                date={moment(details?.schedule?.data)
                  .locale("pt-br")
                  .format("L")}
                quantity={details?.schedule?.total_peaple}
                title={details?.schedule?.title}
                moneyFormated={formatToBRL(details?.schedule?.total_money)}
                with_drink={details?.schedule?.with_drink}
                total_money={details?.schedule?.total_money}
                no_drink={details?.schedule?.no_drink}
                participants={details?.schedule?.participants}
              />
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
