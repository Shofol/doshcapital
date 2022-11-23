/* eslint-disable no-unused-vars */
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

import { ReactNode, useRef } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components

// Material Dashboard 2 PRO React page layout routes
import pageRoutes from "page.routes";

// Images
import bgImage from "assets/images/bg-pricing.jpg";
import { Container } from "@mui/system";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import video from "assets/hero.mp4";

// Declaring props types for Header
interface Props {
  tabValue: number;
  tabHandler: (...arg: any) => void;
  children: ReactNode;
}

function Header({ tabValue, tabHandler, children }: Props): JSX.Element {
  return (
    <>
      <HomeNavbar
        routes={pageRoutes}
        // action={{
        //   type: "external",
        //   route: "https://creative-tim.com/product/material-dashboard-2-pro-react-ts",
        //   label: "buy now",
        //   color: "light",
        // }}
        transparent
        light
      />
      <MDBox
        position="relative"
        minHeight="100vh"
        height="50vh"
        // borderRadius="xl"
        // m={2}
        // pt={2}
        // sx={{
        //   backgroundImage: ({ functions: { linearGradient, rgba }, palette: { black } }) =>
        //     `${linearGradient(rgba(black.main, 0.25), rgba(black.main, 0.25))}, url(${bgImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundAttachment: "fixed",
        // }}
      >
        <MDBox sx={{ position: "relative", height: "100vh" }}>
          <MDBox
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,.2)",
            }}
          ></MDBox>
          <Container>
            <Grid
              container
              spacing={3}
              justifyContent="start"
              sx={{ position: "relative", zIndex: "1", py: 22, textAlign: "left" }}
            >
              <Grid item xs={11} lg={6}>
                <MDBox mb={1} mt={12}>
                  <MDTypography variant="body2" color="white">
                    - CROSSOVER TO WHAT WE DO
                  </MDTypography>
                </MDBox>
                <MDBox mb={1}>
                  <MDTypography variant="h1" color="white" fontWeight="bold">
                    AUTOMATED TRADING NETWORKING DO$HCOIN
                  </MDTypography>
                </MDBox>
                <MDBox mb={2}>
                  <MDTypography variant="body2" color="white" fontWeight="light">
                    You have Free Unlimited Updates and Premium Support on each package.
                  </MDTypography>
                </MDBox>
              </Grid>
            </Grid>
          </Container>
          <MDBox
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              zIndex: "-1",
            }}
          >
            <video style={{ width: "100%" }} autoPlay={true} loop muted src={video}></video>
          </MDBox>
        </MDBox>
      </MDBox>
      <Grid container sx={{ px: 6, my: 8 }}>
        <Grid item xs={12}>
          <MDBox minWidth={{ xs: "22rem", md: "25rem" }} mx="auto" mt={6}></MDBox>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
