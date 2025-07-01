import { Box, Typography } from "@mui/material";
import React from "react";

function CenterTypo() {
  return (
    <Box
      position="relative"
      py={7}
      height={"400px"}
      px={5}
      mt={5}
      sx={{
        background: "url(/images/whyus.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      {/* Overlay for black shade */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for transparency
          zIndex: 1,
        }}
      />
      <Typography
        textAlign={"center"}
        color={"white"}
        fontWeight={800}
        fontSize={"30px"}
        sx={{ position: "relative", zIndex: 2 }}
      >
         Why Schools & Brands Choose Helping Gurus?
      </Typography>
      <Typography
        textAlign={"center"}
        color={"white"}
        width={"80%"}
        mt={2}
        sx={{ position: "relative", zIndex: 2 }}
      >
        We don’t just connect people — we create possibilities. At Helping
        Gurus, we combine deep-rooted school relationships with strategic
        expertise to deliver solutions that actually work. Whether it's planning
        powerful school events, sourcing the right talent, engaging educators,
        or helping EdTech brands break into the academic space, our work is
        driven by purpose, precision, and partnership. We’re not just a bridge —
        we’re the team that walks with you to the other side.
      </Typography>
    </Box>
  );
}

export default CenterTypo;
