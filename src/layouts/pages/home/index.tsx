import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";

//  React TS examples components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Pricing page components
import Header from "layouts/pages/home/components/Header";
import Footer from "layouts/pages/home/components/Footer";
import Sell from "./components/Sell";
import ContactInfo from "./components/ContactInfo";
import Team from "./components/Team";
import Bots from "./components/Bots";

function HomePage(): JSX.Element {
  const [tabValue, setTabValue] = useState<number>(0);
  const [prices, setPrices] = useState<string[]>(["59", "89", "99"]);

  const handleSetTabValue = (event: any, newValue: any) => {
    setTabValue(newValue);

    if (event.currentTarget.id === "annual") {
      setPrices(["119", "159", "399"]);
    } else {
      setPrices(["59", "89", "99"]);
    }
  };

  return (
    <PageLayout>
      <Header tabValue={tabValue} tabHandler={handleSetTabValue}>
        <Container>
          <Bots />
          <Sell />
          <Team />
          <ContactInfo />
        </Container>
      </Header>
      <Footer />
    </PageLayout>
  );
}

export default HomePage;
