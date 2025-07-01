import { Grid, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      mt={5}
      bgcolor={"#3034BB"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={2}
    >
      <Grid container width={{ md: "82%", xs: "100%" }} mt={2}>
        <Grid item md={2.5} display={"flex"} justifyContent={"center"} p={3}>
          <Box
            display={"flex"}
            alignItems={"start"}
            flexDirection={"column"}
            gap={2}
          >
            <Box bgcolor={"white"} px={2} py={1} borderRadius={3}>
              <img
                src="/images/gurulogo.png"
                style={{
                  marginTop: "10px",
                  width: "120px",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography fontSize={"13px"} color={"white"} textAlign={"left"}>
              Helping Gurus is a trusted education partner connecting schools,
              educators, and brands through impactful events, training, and
              strategic collaborations.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2.5} xs={12} p={3}>
          <Box
            display={"flex"}
            alignItems={"start"}
            flexDirection={"column"}
            justifyContent={"center"}
            width={"100%"}
          >
            <MenuItem
              onClick={() => navigate("/")}
              sx={{ color: "white", fontSize: "13px" }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/our-service")}
              sx={{ color: "white", fontSize: "13px" }}
            >
              Our Services
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/events")}
              sx={{ color: "white", fontSize: "13px" }}
            >
              Events
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/about-us")}
              sx={{ color: "white", fontSize: "13px" }}
            >
              About Us
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/contact-us")}
              sx={{ color: "white", fontSize: "13px" }}
            >
              Contact Us
            </MenuItem>
          </Box>
        </Grid>
        <Grid item md={2.5} xs={12} p={3}>
          <Box
            display={"flex"}
            alignItems={"start"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography
              fontSize={"13px"}
              textAlign={"start"}
              color={"white"}
              mt={1}
            >
              Address
            </Typography>
            <Typography fontSize={"13px"} color={"white"}>
              B-54, Golf Course Road, Suncity, Sector 54, Haiderpur, Golf Course
              Rd, Suncity, Sector 54, Haiderpur, Gurugram, Haryana 122011
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={1.2} mt={2}>
              <img
                style={{ height: "35px", width: "35px", cursor: "pointer" }}
                src="/images/facebook.png"
                loading="lazy"
              />
              <img
                style={{ height: "35px", width: "35px", cursor: "pointer" }}
                src="/images/instagram.png"
                loading="lazy"
              />
              <img
                style={{ height: "35px", width: "35px", cursor: "pointer" }}
                src="/images/whatsapp.png"
                loading="lazy"
              />
              <img
                style={{ height: "35px", width: "35px", cursor: "pointer" }}
                src="/images/youtube.png"
                loading="lazy"
              />
            </Box>
            <Typography
              fontSize={"13px"}
              color={"white"}
              mt={"2px"}
            ></Typography>
          </Box>
        </Grid>
        <Grid item md={4.5} xs={12} p={3}>
          <iframe
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4234567890123!2d77.08901234567890!3d28.456789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bb6ad98e0d3%3A0x9876543210abcdef!2sB-54%2C%20Golf%20Course%20Rd%2C%20Suncity%2C%20Sector%2054%2C%20Haiderpur%2C%20Gurugram%2C%20Haryana%20122011%2C%20India!5e0!3m2!1sen!2sus!4v1659322345678!5m2!1sen!2sus"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
