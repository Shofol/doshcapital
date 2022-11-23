import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Chaser from "assets/images/dosh/Chaser.png";
import Cyclopse from "assets/images/dosh/Cyclopse.png";
import Dominator from "assets/images/dosh/Dominator.png";
import HedgeChaser from "assets/images/dosh/HedgeChaser.png";
import Mountain from "assets/images/dosh/Mountain.png";
import YNot from "assets/images/dosh/YNot.png";

import { Card } from "@mui/material";
import MDBox from "../../../../../components/MDBox";
import Bot from "./Bot";
import MDTypography from "../../../../../components/MDTypography";

const Bots = () => {
  const bots = [
    { title: "Chaser", subtitle: "Chaser", image: Chaser },
    { title: "Cyclopse", subtitle: "Cyclopse", image: Cyclopse },
    { title: "Dominator", subtitle: "Dominator", image: Dominator },
    { title: "HedgeChaser", subtitle: "HedgeChaser", image: HedgeChaser },
    { title: "Mountain", subtitle: "Mountain", image: Mountain },
    { title: "YNot", subtitle: "YNot", image: YNot },
  ];

  return (
    <div>
      <Card>
        <MDTypography variant="h2" align="center" fontWeight="medium" pt={5}>
          Our Bots
        </MDTypography>
        <MDTypography variant="subtitle1" align="center">
          Our Bots are very good.
        </MDTypography>
        <MDBox px={5}>
          <Swiper slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper">
            {bots.map((bot, index) => {
              return (
                <SwiperSlide key={index}>
                  <Bot title={bot.title} subtitle={bot.subtitle} image={bot.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </MDBox>
      </Card>
    </div>
  );
};

export default Bots;
