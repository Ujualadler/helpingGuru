import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { keyframes } from "@emotion/react";
import { ourSpeakersService } from "../Services/OurSpeakersService";
import { API_URL } from "../Services/url";

function OurSpeakers() {
  const scrollRef = useRef(null);
  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      // Retrieve the first card element to determine its width
      const card = container.querySelector("[data-card]");
      if (card) {
        const cardWidth = card.offsetWidth;

        // Determine the scroll amount based on the direction
        const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

        // Use the scrollBy method with smooth behavior
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const [ourSpeakerData, setOurSpeakerData] = useState([]);
  useEffect(() => {
    const getOurSpeakers = async () => {
      try {
        const result = await ourSpeakersService.getOurSpeakers();
        if (result.data.success === true) {
          setOurSpeakerData(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOurSpeakers();
  }, []);

  const fadeInAnimation = keyframes`
  0% {
    transform:scale(1.5)
  }
  100% {
    transform:scale(1)
  }
`;
  return (
    <Box>
      <Typography
        textAlign={"center"}
        fontWeight={800}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"#100854"}
        mb={3}
      >
        Meet Our Inspiring Speakers
      </Typography>
      <Typography
        textAlign={"center"}
        fontWeight={500}
        fontSize={{ xs: "1rem", md: "1.2rem" }}
        color={"#100854"}
        mb={3}
      >
         Thought leaders, changemakers, and education experts who spark ideas and inspire action across institutions
      </Typography>
      <Grid container borderRadius={3}>
        {/* <Title title={"Experiential Learning"} /> */}

        <Box
          position="relative"
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box
            display={"flex"}
            overflow={"auto"}
            width={{
              xs: "100vw",
            }}
            sx={{ scrollbarWidth: "none" }}
            ref={scrollRef}
          >
            {ourSpeakerData.length > 0 &&
              ourSpeakerData.map((data, index) => (
                <Box
                  key={index}
                  data-card
                  sx={{
                    flex: "0 0 auto",
                    width: {
                      xs: "100%",
                      sm: "50%",
                      md: "33.333%",
                      lg: "25%",
                      xl: "20%",
                    },
                    animation: `${fadeInAnimation} ease 0.8s`,
                    // opacity: 0,
                  }}
                  className="fade-in"
                >
                  <Box
                    sx={{
                      border: `
                         "1px"
                       solid #cfd4dc`,
                      background: "yellow",
                      height: { lg: "40vh", md: "40vh", xs: "50vh" },
                      // borderRadius: 3,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)",
                        filter: "brightness(80%)",
                        objectFit: "cover",
                        background:
                          "linear-gradient(to right, #6D7BFE, #3034BB)",
                        objectPosition: "top",
                      }}
                      src={`${API_URL}api/v1/image/${data?.img}`}
                      loading="lazy"
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        left: -1,
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        fontSize={"25px"}
                        fontWeight={600}
                        px={1}
                        color={"white"}
                        sx={{
                          // background: "orange",
                          paddingRight: "15px",
                          paddingBlock: "3px",
                          textAlign: "left",
                          // overflowWrap: "break-word",
                        }}
                      >
                        {data?.name}
                      </Typography>
                      <Typography px={1} color={"white"}>
                        {data?.designation}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Box>

          {/* Navigation buttons overlay */}
          <IconButton
            onClick={() => handleScroll("left")}
            size="small"
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              background: "#FF8126",
              color: "white",
              "&:hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            <ArrowLeftIcon />
          </IconButton>
          <IconButton
            onClick={() => handleScroll("right")}
            size="small"
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              background: "#FF8126",
              color: "white",
              "&:hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            <ArrowRightIcon />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
}

export default OurSpeakers;
