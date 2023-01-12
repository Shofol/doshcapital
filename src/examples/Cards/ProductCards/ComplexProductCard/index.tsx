/* eslint-disable no-unused-vars */

import { ReactNode } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { useMaterialUIController } from "context";
import { dark } from "@mui/material/styles/createPalette";
import { Theme } from "@mui/material/styles";
import MDButton from "components/MDButton";

// Declaring prop types for the ComplexProjectCard
interface Props {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
  image: string;
  title: string;
  dateTime?: string;
  description: ReactNode;
  members?: string[];
  dropdown?: {
    action?: (...arg: any) => void;
    menu?: ReactNode;
  };
  [key: string]: any;
}

// Custom styles for ComplexProjectCard
function ComplexProductCard({
  color,
  image,
  title,
  dateTime,
  description,
  members,
  dropdown,
}: Props): JSX.Element {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  // const renderMembers = members.map((member, key) => {
  //   const memberKey = `member-${key}`;

  //   return (
  //     <MDAvatar
  //       key={memberKey}
  //       src={member}
  //       alt="member profile"
  //       size="xs"
  //       sx={({ borders: { borderWidth }, palette: { white } }) => ({
  //         border: `${borderWidth[2]} solid ${white.main}`,
  //         cursor: "pointer",
  //         position: "relative",

  //         "&:not(:first-of-type)": {
  //           ml: -1.25,
  //         },

  //         "&:hover, &:focus": {
  //           zIndex: "10",
  //         },
  //       })}
  //     />
  //   );
  // });

  return (
    <Card>
      <MDBox p={2}>
        <MDBox display="flex" flexDirection="column" alignItems="center">
          <MDBox
            component="img"
            src={image}
            alt={title}
            // borderRadius="lg"
            // shadow="md"
            width="100%"
            height="200px"
            position="relative"
            zIndex={1}
            mt={-5}
            // sx={({ palette: { white, dark } }: Theme) => ({
            //   backgroundImage: `url(${image})`,
            //   backgroundColor: darkMode ? dark.main : white.main,
            //   backgroundSize: "contain",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            // })}
          />
          <MDBox lineHeight={0}>
            <MDTypography variant="h5" textTransform="capitalize" fontWeight="medium">
              {title}
            </MDTypography>
            {/* {members.length > -1 ? <MDBox display="flex">{renderMembers}</MDBox> : null} */}
          </MDBox>
          {/* {dropdown && (
            <MDTypography
              color="secondary"
              onClick={dropdown.action}
              sx={{
                ml: "auto",
                mt: -1,
                alignSelf: "flex-start",
                py: 1.25,
              }}
            >
              <Icon sx={{ cursor: "pointer", fontWeight: "bold" }}>more_vert</Icon>
            </MDTypography>
          )}
          {dropdown.menu} */}
        </MDBox>
        <MDBox my={1} lineHeight={1}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox display="flex" alignItems="center" justifyContent="space-between">
          <MDButton variant="outlined" color="info" size="small">
            Test Drive
            <Icon sx={{ marginLeft: ".3rem" }}>query_stats</Icon>
          </MDButton>
          <MDBox>
            <MDTypography variant="subtitle2" fontWeight="bold" display="flex" alignItems="center">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span style={{ paddingLeft: ".2rem" }}>5</span>
            </MDTypography>
          </MDBox>
        </MDBox>
        {/* <Divider /> */}
        <MDBox display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <MDButton variant="contained" color="info" size="small">
            Buy: $299
          </MDButton>
          <MDButton variant="contained" color="info" size="small">
            Rent: $200/yr
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Declaring default props for ComplexProductCard
ComplexProductCard.defaultProps = {
  color: "dark",
  dateTime: "",
  members: [],
  dropdown: false,
};

export default ComplexProductCard;
