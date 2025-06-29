import { Box, Button, Grid, Typography, keyframes } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AccordionContent from "./AccordianContent";

const aboutusData = [
  {
    // title: "CBSE Schools",
    img: "/images/cbseSchool.png",
    // count: "10,000",
  },
  {
    // title: "ICSE Schools",
    img: "/images/icseSchool.png",
    // count: "400",
  },
  {
    // title: "IB Schools",
    img: "/images/ibSchool.png",
    // count: "50",
  },
  {
    // title: "State Board Schools",
    img: "/images/icseSchool.png",
    // count: "700",
  },
];

const achievmentsData = [
  {
    // title: "Roundtables",
    img: "/images/roundtables.png",
    // count: "21",
  },
  {
    // title: "Summits",
    img: "/images/summits.png",
    // count: "5",
  },
];
function About() {
  const navigate = useNavigate();
  const aboutData = [
    {
      img: "/images/roundTable.png",
      name: "Educational Events & Roundtables",
    },
    {
      img: "/images/recruitment.png",
      name: "Staff Recruitment Solutions",
    },
    {
      img: "/images/Certification.png",
      name: "Teacher Training Certification Programme",
    },
    {
      img: "/images/magazine.png",
      name: "Educational Magazine Hub",
    },
    {
      img: "/images/talkwithgurus.png",
      name: "Talks With Gurus",
    },
    // {
    //   img: "/images/responsive-design.png",
    //   name: "Innovative IFP Panels",
    // },
    // {
    //   img: "/images/lead.png",
    //   name: "Edtech B2B Lead Generation",
    // },
    {
      img: "/images/speakers.png",
      name: "Inspiring Speakers for Educational Institutions",
    },
    {
      img: "/images/EdtechLead.png",
      name: "Edtech Lead Generation",
    },
  ];

  const rotate = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1.5); // Adjusted to scale up for demonstration
  } 
`;

  const dimension = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(.8);
  }
`;

  return (
    <Grid container mb={3}>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={{ xs: 10, md: 0 }}
        mb={3}
      >
        <Box
          width={"90%"}
          height={"80%"}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          position={"relative"}
        >
          <Box
            sx={{
              width: { md: "200px", xs: "150px" },
              height: { md: "200px", xs: "150px" },
              background: "#6D7BFE",
              borderRadius: 10,
              animation: `${rotate} 6s linear infinite`,
            }}
          />
          <Box
            sx={{
              width: { md: "35%", xs: "40%" },
              height: { md: "30%", xs: "100%" },
              borderRadius: "20px",
              position: "absolute",
              top: { md: "16%", xs: "-50%" },
              left: { md: "13%", xs: "10%" },
              animation: `${dimension} 6s linear infinite`,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                background: "grey",
              }}
              src="/images/home3.png"
            />
          </Box>
          <Box
            sx={{
              width: { md: "25%", xs: "35%" },
              height: { md: "20%", xs: "100%" },
              borderRadius: "20px",
              position: "absolute",
              top: { md: "25%", xs: "-40%" },
              right: { md: "20%", xs: "10%" },
              animation: `${dimension} 6s linear infinite`,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                background: "grey",
              }}
              src="/images/home2.png"
            />
          </Box>
          <Box
            sx={{
              width: { md: "30%", xs: "35%" },
              height: { md: "25%", xs: "100%" },
              borderRadius: "20px",
              position: "absolute",
              bottom: { md: "25%", xs: "-70%" },
              right: { md: "25%", xs: "20%" },
              animation: `${dimension} 6s linear infinite`,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                background: "linear-gradient(to right, #6D7BFE, #3034BB)",
              }}
              src="/images/home4.png"
            />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} mt={{ xs: 5, md: 0 }}>
        <Box
          p={3}
          display={"flex"}
          justifyContent={"center"}
          gap={1}
          flexDirection={"column"}
          mt={6}
        >
          <Typography
            fontWeight={700}
            fontSize={"18px"}
            mb={1}
            color={"#100854"}
          >
            About Us
          </Typography>
          <Typography
            maxWidth={{ md: "90%", xs: "100%" }}
            fontWeight={400}
            mb={2}
            fontSize={"15px"}
            color={"#100854"}
          >
            At Helping Gurus, we leverage an extensive network of CBSE, ICSE,
            IB, State Board schools & Universities to help Edtech partners
            establish their presence across India. By showcasing your brand
            through our comprehensive connections, we facilitate seamless entry
            into educational institutions nationwide. 
          </Typography>

          <Button
            onClick={() => navigate("/about-us")}
            variant="contained"
            sx={{
              textTransform: "none",
              background: "#FF8126",
              width: { md: "30%", xs: "100%" },
              borderRadius: 2,
            }}
          >
            Read More
          </Button>

          <Box container mt={3}>
            <Typography
              fontWeight={700}
              fontSize={"18px"}
              mb={1}
              color={"#100854"}
            >
              Our Services
            </Typography>
            <Grid
              container
              mt={1}
              spacing={3}
              width={{ md: "100%", xs: "100%" }}
            >
              {aboutData.map((data, index) => (
                <Grid item xs={4} sm={4} key={index}>
                  <Box
                    display={"flex"}
                    // width={"100px"}
                    flexDirection={"column"}
                    gap={1}
                  >
                    <img
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "5px",
                        objectFit:'cover',
                        background:
                          "linear-gradient(to right, #6D7BFE, #3034BB)",
                      }}
                      src={data.img}
                      loading="lazy"
                    />
                    <Typography
                      textAlign={{ xs: "center", md: "start" }}
                      fontSize={{ sm: "13px", xs: "11px" }}
                      sx={{ width: "120px"}}
                      fontWeight={600}
                    >
                      {data.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Button
              onClick={() => navigate("/our-service")}
              variant="contained"
              sx={{
                textTransform: "none",
                background: "#FF8126",
                width: { md: "30%", xs: "100%" },
                height: "40px",
                borderRadius: 2,
                mt: 3,
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Grid>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Grid
          container
          m={3}
          gap={{ xs: 4, md: 0 }}
          py={3}
          bgcolor={"#3034BB"}
          borderRadius={3}
          width={{ md: "70%", xs: "90%" }}
        >
          <Grid item xs={12} py={1} mb={2}>
            <Typography
              textAlign={"center"}
              fontSize={"20px"}
              fontWeight={700}
              color={"#FF8126"}
            >
              Join Helping Gurus Network!
            </Typography>
          </Grid>
          {aboutusData.map((data) => (
            <Grid
              item
              xs={12}
              md={3}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"4px"}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    objectFit: "cover",
                    background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                  }}
                  src={data.img}
                />
                <Typography
                  color={"#FF8126"}
                  fontWeight={700}
                  fontSize={"25px"}
                >
                  {data.count}
                </Typography>
                <Typography color={"#fff"} fontWeight={600} fontSize={"15px"}>
                  {data.title}
                </Typography>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} mt={3} mb={2}>
            <Typography
              textAlign={"center"}
              fontSize={"20px"}
              fontWeight={700}
              color={"#FF8126"}
            >
              Achievments
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            gap={{ md: 22, xs: 4 }}
            display={"flex"}
            flexDirection={{ md: "row", xs: "column" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {achievmentsData.map((data) => (
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"4px"}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    objectFit: "cover",
                    background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                  }}
                  src={data.img}
                />
                <Typography
                  color={"#FF8126"}
                  fontWeight={700}
                  fontSize={"25px"}
                >
                  {data.count}
                </Typography>
                <Typography color={"#fff"} fontWeight={600} fontSize={"15px"}>
                  {data.title}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} mt={4}>
            <Typography
              textAlign={"center"}
              fontSize={"15px"}
              fontWeight={600}
              color={"#FF8126"}
            >
              Experience the difference with us!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default About;
