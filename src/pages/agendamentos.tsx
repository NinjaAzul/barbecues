import { Header } from "components/Header";
import { Layout } from "components/layout";
import * as Styles from "styles/pages/BarbecuesListStyles";
import type { NextPage } from "next";
import { BarbecuesCard } from "components/BarbecuesListComponents/BarbecuesCard";
import { BarbecuesButton } from "components/BarbecuesListComponents/BarbecuesButton";

const BarbecuesList: NextPage = () => {
  return (
    <>
      <Layout title="Agendamentos | Barbecues" whiteBackground>
        <Header title="Agendamentos" minHeader />
        <Styles.Container>
          <Styles.Content>
            <BarbecuesCard
              title="Níver do Gui"
              date="01/12"
              quantity={1000}
              moneyFormated="R$ 2000000000,00"
            />

            <BarbecuesCard
              title="Níver do Gui"
              date="01/12"
              quantity={1000}
              moneyFormated="R$ 2000000000,00"
            />

            <BarbecuesCard
              title="Níver do Gui"
              date="01/12"
              quantity={1000}
              moneyFormated="R$ 2000000000,00"
            />

            <BarbecuesCard
              title="Níver do Gui"
              date="01/12"
              quantity={1000}
              moneyFormated="R$ 2000000000,00"
            />

            <BarbecuesButton />
          </Styles.Content>
        </Styles.Container>
      </Layout>
    </>
  );
};

export default BarbecuesList;
