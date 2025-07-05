import {
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { keyframes } from "@emotion/react";

const eventData = [
  {
    name: "Jhon",
    image: "/images/test1.jpeg",
  },
  {
    name: "Jhon",
    image: "/images/test2.jpeg",
  },
  {
    name: "Jhon",
    image: "/images/test3.jpeg",
  },
  {
    name: "Jhon",
    image: "/images/test4.jpeg",
  },
  {
    name: "Jhon",
    image: "/images/test5.jpeg",
  },
  {
    name: "Jhon",
    image: "/images/test6.jpeg",
  },
];

function Testimonials() {
  const [value, setValue] = React.useState(5);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const handleScroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => 
        prev === 0 ? eventData.length - 1 : prev - 1
      );
    } else {
      setCurrentIndex((prev) => 
        prev === eventData.length - 1 ? 0 : prev + 1
      );
    }
  };

  const fadeInAnimation = keyframes`
    0% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  `;

  return (
    <Box mt={5} px={{ xs: 2, sm: 3, md: 4 }}>
      <Typography
        textAlign="center"
        fontWeight={800}
        fontSize={{ xs: "1.5rem", sm: "1.8rem", md: "2rem" }}
        color="#100854"
        mb={3}
      >
        Testimonials: What Our Community Says
      </Typography>
      
      <Typography
        textAlign="center"
        fontWeight={500}
        fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.2rem" }}
        color="#100854"
        mb={4}
        px={{ xs: 1, sm: 2, md: 4 }}
      >
        Hear directly from school leaders, educators, and partners who've
        experienced the Helping Gurus impact.
      </Typography>

      <Grid
        container
        borderRadius={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          position="relative"
          width="100%"
          maxWidth="800px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight={{ xs: "280px", sm: "330px", md: "380px" }}
        >
          {/* Single Image Display */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            px={{ xs: 6, sm: 8, md: 10 }}
          >
            <Box
              sx={{
                width: { 
                  xs: "100%", 
                  sm: "100%", 
                  md: "100%" 
                },
                animation: `${fadeInAnimation} ease 0.8s`,
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
                width="100%"
              >
                <Box
                  component="img"
                  src={eventData[currentIndex].image}
                  alt={`Testimonial ${currentIndex + 1}`}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: {
                      xs: "250px",
                      sm: "300px",
                      md: "500px",
                    },
                    borderRadius: 3,
                    objectFit: "fill",
                    background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                />
                
                {/* Dots Indicator */}
                <Box
                  display="flex"
                  gap={1}
                  justifyContent="center"
                  mt={2}
                >
                  {eventData.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: currentIndex === index ? "#FF8126" : "#E0E0E0",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: currentIndex === index ? "#FF8126" : "#BDBDBD",
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  ))}
                </Box>
                
                {/* Uncomment if you want to show testimonial content */}
                {/* <Typography 
                  fontWeight={700} 
                  fontSize={{ xs: "18px", sm: "22px", md: "25px" }}
                  textAlign="center"
                  mt={1}
                >
                  {eventData[currentIndex].name}
                </Typography>
                <Typography
                  textAlign="center"
                  fontWeight={400}
                  fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
                  px={2}
                  color="#666"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="medium"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                /> */}
              </Box>
            </Box>
          </Box>

          {/* Left Navigation Button */}
          <IconButton
            onClick={() => handleScroll("left")}
            size="small"
            sx={{
              position: "absolute",
              left: { xs: 5, sm: 10, md: 15 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              background: "#FF8126",
              color: "white",
              width: { xs: 35, sm: 40, md: 45 },
              height: { xs: 35, sm: 40, md: 45 },
              "&:hover": {
                background: "grey",
                color: "white",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <ArrowLeftIcon fontSize="inherit" />
          </IconButton>

          {/* Right Navigation Button */}
          <IconButton
            onClick={() => handleScroll("right")}
            size="small"
            sx={{
              position: "absolute",
              right: { xs: 5, sm: 10, md: 15 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              background: "#FF8126",
              color: "white",
              width: { xs: 35, sm: 40, md: 45 },
              height: { xs: 35, sm: 40, md: 45 },
              "&:hover": {
                background: "grey",
                color: "white",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <ArrowRightIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
}

export default Testimonials;