import { useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";

import "./index.css";
import BookingCard from "examples/Cards/BookingCard";

// Images
import networkImage from "assets/images/dosh/network.png";
import doshCoainImage from "assets/images/dosh/doshcoin.png";
import robotsImage from "assets/images/dosh/robots.png";

function Sell(): JSX.Element {
  const [collapse, setCollapse] = useState<number | boolean>(false);
  return (
    <MDBox mt={8} mb={6}>
      <MDBox mt={2}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mt={3}>
              <BookingCard
                image={robotsImage}
                header="WHAT WE SELL"
                title="TRADING ROBOTS"
                nature="FULLY AUTOMATED  |  BACK TESTED  |  ROBUST"
                description="<br/><h3>Your Success is Our Success!</h3>
                At the Dosh family, we sell Trading Bots with a difference – choose to buy or just test drive. <br/>
                <ul>
                  <li>Our Bots are back tested with over 5 years test data, Our Bots have been tested and fine tuned for the last 2 years to optimize its peak performance.</li>
                  <li>You can Test drive and optimize any of Our Bots through the EA Performance Dashboard to find out more.</li>
                  <li>You can choose to Sign-up for a Yearly Subscription plan, enjoy the benefits or purchase as many as you like.</li>
                  <li>Based on your selection and Investment Strategy, you choose your Return on Investment (25-100%).</li>
                  <li>Not to worry - Dosh will help you setup your Account if you are new to Trading through our preferred brokers of your choice. Refer to our PDS for more information.</li>
                </ul>"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mt={3}>
              <BookingCard
                image={networkImage}
                header="HOW WE EARN"
                title="NETWORK"
                nature="MULTILEVEL  |  MULTI $ BAND  |  EQUAL PLAYING FIELD"
                description="<br/>As you become a member of the Dosh family, you chose to automatically enrol into our Network!<br/>
                <ul>
                  <li>You will be given a commission of 5% for every client you introduce, so with twenty clients you introduce your subscription is paid off.</li>
                  <li>There are five (5) $$ value Networks. Subject to your plan,  your trading account and the $$ amount you trade, you will be placed in the Network.</li>
                  <li>For an even playing field, every client will have two clients below them and every client will pay 10% of their profits to the client above in their Network.</li>
                  <li>Your trading account can be linked to Dosh by our preferred brokers giving you an advantage, as an IB account. Refer to our PDS for more information.</li>
                </ul>"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mt={3}>
              <BookingCard
                image={doshCoainImage}
                header="HOW WE CONNECT"
                title="DO$HCOIN"
                nature="SUBSCRIPTION PLAN  |  ALGORITHM  | PERFORMANCE"
                description="<br/>As you become a member of the Dosh family and enrol into our Network you become entitled to DoshCoin<br/>
                <ul>
                  <li>Twenty percent (20%) for your Subscription will go towards Mining Cryptocurrency & DoshCoin.</li>
                  <li>The Algorithm will take into account your trading $$ value, your position in the Network and the performance of you Trading account/s linked to Dosh using our Bots and create DoshCoin for you.</li>
                  <li>In your Client Portal you will have a portfolio of Trading Robots, Network position & various cryptocurrencies that will equate to DoshCoin through the inbuilt Algorithm.</li>
                  <li>You can place in you Wallet or Withdraw as ‘cash’ at your discretion. Refer to our PDS for more information!</li>
                </ul>"
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Sell;
