/* eslint-disable no-unused-vars */

import { ReactNode, useEffect, useRef, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//  React TS examples components

//  React page layout routes
import pageRoutes from "page.routes";

// Images
import bgImage from "assets/images/bg-pricing.jpg";
import { Container } from "@mui/system";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import video from "assets/hero.mp4";
import { Icon } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";

// Declaring props types for Header
interface Props {
  tabValue: number;
  tabHandler: (...arg: any) => void;
  children: ReactNode;
}

function Header({ tabValue, tabHandler, children }: Props): JSX.Element {
  const [mobileView, setMobileView] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    // function displayMobileNavbar() {
    if (window.innerWidth < breakpoints.values.lg) {
      videoRef.current.style.height = "100%";
      videoRef.current.style.width = "auto";
      setMobileView(true);
    } else {
      setMobileView(false);
      videoRef.current.style.height = "auto";
      videoRef.current.style.width = "100%";
    }
    // }
    // window.addEventListener("resize", displayMobileNavbar);

    // Remove event listener on cleanup
    // return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <>
      <HomeNavbar routes={pageRoutes} />
      <MDBox position="relative" minHeight="100vh" height="50vh">
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
              justifyContent="flex-end"
              sx={{ position: "relative", zIndex: "1", py: 22, textAlign: "left" }}
            >
              <Grid item xs={11} lg={6}>
                <MDBox mb={1} mt={mobileView ? 6 : 12}>
                  <MDTypography variant="body2" color="white" align="right">
                    - CROSSOVER TO WHAT WE DO
                  </MDTypography>
                </MDBox>
                <MDBox mb={1}>
                  <MDTypography variant="h1" color="white" fontWeight="bold" align="right">
                    AUTOMATED TRADING NETWORKING
                  </MDTypography>
                  <MDTypography variant="h1" color="white" fontWeight="bold" align="right">
                    DO$HCOIN
                  </MDTypography>
                </MDBox>
                <MDBox mb={2}>
                  <MDTypography variant="body2" color="white" fontWeight="bold" align="right">
                    Our Strategy stems from these two questions:
                  </MDTypography>
                  <MDTypography variant="body2" color="white" fontWeight="light" align="right">
                    How do we win a losing trade in a 6.6 trillion $ market?
                  </MDTypography>
                  <MDTypography variant="body2" color="white" fontWeight="light" align="right">
                    And, how do we do it while we sleep?
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
            <video
              ref={videoRef}
              style={{ width: "100%" }}
              autoPlay={true}
              loop
              muted
              src={video}
            ></video>
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
