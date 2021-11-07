import { Header } from "components/Header";
import { Layout } from "components/layout";
import * as Styles from "styles/pages/BarbecuesDetailsStyles";
import type { NextPage } from "next";
import { Details } from "components/BarbecuesDetailsComponents/Details";

const BarbecuesDetails: NextPage = () => {
  return (
    <>
      <Layout title="Detalhes | Barbecues" whiteBackground>
        <Header title="Detalhes" minHeader />
        <Styles.Container>
          <Styles.Content>
            <Details
              date="01/12"
              quantity={1000}
              title="Níver do Gui"
              moneyFormated="R$ 0,00"
            />
          </Styles.Content>
        </Styles.Container>
      </Layout>
    </>
  );
};

export default BarbecuesDetails;
