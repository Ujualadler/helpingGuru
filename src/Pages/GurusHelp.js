import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { display, keyframes } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import ServiceModal from "../Components/ServiceModal";
import ServiceForm from "../Components/ServiceForm";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const erpData = [
  {
    name: "Entab infotech",
    img: "/images/entab.jpeg",
  },
  {
    name: "Skolaro",
    img: "/images/skolaro.jpeg",
  },
  {
    name: "Sonet",
    img: "/images/sonet.jpeg",
  },
  {
    name: "Franciscan",
    img: "/images/franciscan.jpeg",
  }
];

function GurusHelp() {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [viewDemo, setViewDemo] = useState("");
  const [showDemo, setShowDemo] = useState(false);
  return (
    <Box>
      {viewDemo && (
        <ServiceModal
          open={viewDemo}
          show={setViewDemo}
          type={"Gurus Help"}
          service={serviceName.replace(/-/g, " ")}
        />
      )}
      <Box
        height={{ xs: "250px" }}
        pt={5}
        sx={{
          background:
            "url(https://img.freepik.com/free-vector/gradient-blue-background_23-2149322706.jpg?size=626&ext=jpg&ga=GA1.1.563629714.1713778942&semt=ais_user)",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          color={"white"}
          fontWeight={700}
          textAlign={"center"}
          fontSize={{ md: "30px", xs: "20px" }}
          mt={2}
        >
          {serviceName.replace(/-/g, " ")}
        </Typography>
      </Box>

      <Box px={{ lg: 30, md: 8, sm: 5, xs: 2 }} py={{ md: 10, xs: 5 }}>
        {serviceName.replace(/-/g, " ") === "Smart Erp" && (
          <Box>
            <Typography
              fontWeight={700}
              fontSize={{ sm: "25px", xs: "20px" }}
              color={"#FF8126"}
            >
              Helping Gurus: Connecting Edtech Partners with Educational
              Institutions
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              Welcome to Helping Gurus! We specialize in assisting Edtech
              corporate partners to infiltrate educational institutions and
              elevate their brand visibility across India.
            </Typography>
            {/* <Typography
            fontWeight={700}
            fontSize={{ md: "18px", xs: "16px" }}
            mt={4}
          >
            About Us
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
          >
            At Helping Gurus, we leverage an extensive network of CBSE, ICSE,
            IB, State Board schools & Universities to help Edtech partners
            establish their presence across India. By showcasing your brand
            through our comprehensive connections, we facilitate seamless entry
            into educational institutions nationwide.
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "18px", xs: "16px" }}
            mt={4}
          >
            Our Services
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
            color={"#FF8126"}
          >
            Network Expansion
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={1}
          >
            Utilize our broad network to introduce your brand to multiple
            educational boards in India.
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
            color={"#FF8126"}
          >
            Lead Generation
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={1}
          >
            Receive direct leads from schools and colleges seeking innovative
            solutions.
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={2}
            color={"#FF8126"}
          >
            Priority Support
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={{ md: "16px", xs: "14px" }}
            mt={1}
          >
            Our partners always remain our top priority, ensuring you receive
            the best possible assistance.
          </Typography> */}

            <Grid container width={{ xs: "100%" }} mt={5}>
              {erpData.length > 0 &&
                erpData.map((data) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} p={2}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow:
                          "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <img
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "contain",
                        }}
                        src={data.img}
                      />
                      <Box
                        bgcolor={"#3034BB"}
                        py={"5px"}
                        color={"white"}
                        width={"100%"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                      >
                        <Typography textAlign={"center"}>
                          {data.name}
                        </Typography>
                        <Button
                          onClick={() => {
                            setViewDemo(data.name);
                            setShowDemo(!showDemo);
                          }}
                          variant="contained"
                          sx={{
                            background: "#FF8126",
                            textTransform: "none",
                            height: "25px",
                            my: "4px",
                          }}
                        >
                          Book Demo
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
        )}
        {serviceName.replace(/-/g, " ") === "Innovative IFP Panels" && (
          <Box>
            <Typography
              fontWeight={700}
              fontSize={{ sm: "25px", xs: "20px" }}
              color={"#FF8126"}
            >
              Empowering Education with IFP Panels
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              About
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              HelpingGurus is all about making education exciting with
              Interactive Flat Panels (IFP) designed for schools and colleges.
              These panels come packed with cool K-12 digital stuff that helps
              teachers spice up their lessons and create a fun learning
              environment.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              How We Help Education
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              As part of the HelpingGurus team, we team up with big brands to
              bring awesome technology to schools. Our partnerships with top
              Indian IFP companies mean schools get the best interactive tools.
              Our aim is to be the go-to support for schools and colleges,
              making learning more engaging and enjoyable.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              Our Goal
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              We want to be the top service provider for educational
              institutions, offering top-notch support and expertise to enhance
              the learning experience. By working closely with leading IFP
              companies in India, we hope to create an interactive educational
              world that benefits everyone involved.
            </Typography>

            <Box
              sx={{ background: "#3034BB" }}
              color={"white"}
              position={"relative"}
              borderRadius={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={3}
              py={2}
              pb={5}
              px={3}
            >
              <Box
                component="img"
                src="/images/dot-svg.png"
                sx={{
                  position: "absolute",
                  top: "15%",
                  right: "2%",
                  height: "120px",
                  opacity: "20%",
                  width: "150px",
                  animation: `${bounce} 2s infinite`,
                }}
              />
              <Box px={{ md: 4, xs: 0 }}>
                <Typography
                  fontWeight={700}
                  fontSize={{ md: "28px", xs: "18px" }}
                  color={"white"}
                  mt={4}
                >
                  Get in Touch for a Demo
                </Typography>
                <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                  <Typography
                    fontWeight={600}
                    color={"#FF8126"}
                    fontSize={"16px"}
                  >
                    To see the magic of IFP panels in action, contact us to
                    arrange a demo. We're here to help you unlock the exciting
                    possibilities of interactive technology in education
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                  <ServiceForm
                    service={"Innovative IFP Panels"}
                    type={"Gurus Help"}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default GurusHelp;
