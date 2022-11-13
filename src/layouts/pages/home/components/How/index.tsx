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
import Grid from "@mui/material/Grid";
// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Pricing page components
import FaqCollapse from "layouts/pages/pricing-page/components/FaqCollapse";
import bgImage from "assets/images/dosh/Dominator.png";

function How(): JSX.Element {
  const [collapse, setCollapse] = useState<number | boolean>(false);

  return (
    <MDBox mt={8} mb={6}>
      <Grid container justifyContent="start">
        <Grid item xs={12} md={6}>
          <img src={bgImage} alt="robot" />
        </Grid>
        <Grid item xs={12} md={6} p={10}>
          <MDTypography variant="h2" align="left" fontWeight="light" gutterBottom>
            HOW WE WORK
          </MDTypography>
          <MDTypography variant="h5" align="left" fontWeight="light" gutterBottom>
            MULTI LEVEL | MULTI $ BAND | LEVEL PLAYING FIELD
          </MDTypography>
          <MDBox mb={2}>
            <MDTypography variant="body2" align="left" color="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis id
              velit, nisi error sunt minus labore atque impedit maiores consequatur voluptatem ipsam
              doloremque omnis? Atque est dignissimos quos, facere accusantium minima, saepe autem
              sit esse, asperiores nam iste amet!
            </MDTypography>
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default How;
