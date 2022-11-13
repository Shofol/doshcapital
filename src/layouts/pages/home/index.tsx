/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";

// Material Dashboard 2 PRO React TS examples components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Pricing page components
import Header from "layouts/pages/home/components/Header";
import Footer from "layouts/pages/home/components/Footer";
import PricingCards from "layouts/pages/home/components/PricingCards";
import TrustedBrands from "layouts/pages/home/components/TrustedBrands";
import Faq from "layouts/pages/home/components/Faq";
import Sell from "./components/Sell";
import How from "./components/How";
import DoshCoin from "./components/Doshcoin";
import ContactInfo from "./components/ContactInfo";

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
          {/* <PricingCards prices={prices} /> */}
          {/* <TrustedBrands /> */}
          <Sell />
          <How />
          <DoshCoin />
          <ContactInfo />
          {/* <Faq /> */}
        </Container>
      </Header>
      <Footer />
    </PageLayout>
  );
}

export default HomePage;
