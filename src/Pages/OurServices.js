import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function OurServices() {
  const navigate = useNavigate();
  const ourservicesData = [
    {
      name: "Educational Events & Leadership Roundtables",
      img: "/images/educationalEvents.png",
      description: `We curate impactful educational events, leadership roundtables, and workshops tailored for schools. These sessions create opportunities for collaboration, knowledge exchange, and meaningful engagement between educators, administrators, and thought leaders across the Indian education landscape.`,
    },
    {
      name: "School Staff Recruitment Solutions",
      img: "/images/recruitmentstaff.png",
      description: `We assist schools in hiring qualified teaching and non-teaching staff through a streamlined recruitment process. Our extensive network and education-sector expertise ensure reliable staffing solutions tailored to each institution’s unique requirements.`,
    },
    {
      name: "Inspirational Speakers for Schools & Colleges",
      img: "/images/ispeaker.png",
      description: `We connect schools with dynamic, motivational speakers and subject experts who can inspire students, engage faculty, and drive thought leadership during assemblies, special events, and academic functions across all boards.`,
    },
    {
      name: "Educational Content & Magazine Publishing",
      img: "/images/educationalMagazine.png",
      description: `Our magazine platform offers schools and students a voice to share creativity, achievements, and innovations. From student features to expert articles, we help institutions build pride, visibility, and community through high-quality educational publications.`,
    },
    {
      name: "Teacher Training & Certification Programmes",
      img: "/images/training.png",
      description: `Helping Gurus delivers structured training and certification programs for teachers to enhance pedagogical skills, classroom delivery, and leadership capacity—empowering educators to adapt to modern learning needs and build stronger academic outcomes.`,
    },
    {
      name: "Talks With Gurus: Expert-Led Knowledge Sessions",
      img: "/images/talkWithmaster.png",
      description: `Our signature "Gurus Talks" series brings experienced educators and industry experts to the spotlight through interactive sessions—offering real-world insights, inspiration, and shared wisdom with school communities across India.`,
    },
    {
      name: "Lead Generation & Campaigns for EdTech Brands",
      img: "/images/leadGeneration.png",
      description:'We help EdTech brands connect with decision-makers in over 10,000 schools through strategic lead generation, event partnerships, and campaign activations—building brand visibility and fostering genuine, long-term institutional relationships.'
    },
  ];
  return (
    <Box>
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
          mt={2}
          color={"white"}
          fontWeight={700}
          fontSize={{ md: "30px", xs: "20px" }}
        >
          Our Services
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        mt={5}
        alignItems={"center"}
      >
        <Grid
          container
          width={{ xl: "65%", lg: "75%", md: "90%", sm: "80%", xs: "95%" }}
        >
          {ourservicesData.map((data, index) => (
            <Grid
              item
              md={6}
              lg={4}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              p={3}
            >
              <Box
                key={index}
                display={"flex"}
                flexDirection={"column"}
                borderRadius={2}
                overflow={"hidden"}
                sx={{
                  boxShadow:
                    "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)", // Adjust the values as needed for the desired shadow effect
                }}
              >
                <img
                  width={"100%"}
                  style={{
                    objectFit: "cover",
                    background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                  }}
                  loading="lazy"
                  height={"200px"}
                  src={data.img}
                />
                <Box p={3}>
                  <Typography
                    fontWeight={600}
                    fontSize={"18px"}
                    my={1}
                    textAlign={"left"}
                    color={"#FF8126"}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    fontWeight={400}
                    fontSize={"15px"}
                    my={1}
                    textAlign={"left"}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 6, // Set the number of lines before ellipsis
                    }}
                  >
                    {data.description}
                  </Typography>
                  <Button
                    onClick={(event) => {
                      event.stopPropagation(); // Stop the event from bubbling up
                      const servicePath = data.name
                        .replace(/ & /g, "-")
                        .replace(/ /g, "-");
                      navigate(`/our-service/${servicePath}`);
                    }}
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%", bgcolor: "#FF8126" }}
                  >
                    Read more
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default OurServices;
