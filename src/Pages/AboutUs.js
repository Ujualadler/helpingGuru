import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const aboutusData = [
  {
    title: "CBSE Schools",
    img: "https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8499.jpg?t=st=1717833954~exp=1717837554~hmac=5e641d9e3369c00e3c584a2709a235c7124746f016ee04ab49847fae76405b7c&w=740",
    count: "10,000",
  },
  {
    title: "ICSE Schools",
    img: "https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8499.jpg?t=st=1717833954~exp=1717837554~hmac=5e641d9e3369c00e3c584a2709a235c7124746f016ee04ab49847fae76405b7c&w=740",
    count: "400",
  },
  {
    title: "IB Schools",
    img: "https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8499.jpg?t=st=1717833954~exp=1717837554~hmac=5e641d9e3369c00e3c584a2709a235c7124746f016ee04ab49847fae76405b7c&w=740",
    count: "50",
  },
  {
    title: "State Board Schools",
    img: "https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8499.jpg?t=st=1717833954~exp=1717837554~hmac=5e641d9e3369c00e3c584a2709a235c7124746f016ee04ab49847fae76405b7c&w=740",
    count: "700",
  },
];

function AboutUs() {
  const { serviceName } = useParams();
  const videoId = "dQw4w9WgXcQ"; // Example YouTube video ID
  const url = `https://www.youtube.com/embed/${videoId}`;

  const achievmentsData = [
    {
      title: "Roundtables",
      img: "https://previews.123rf.com/images/sabelskaya/sabelskaya1908/sabelskaya190800765/128900118-team-of-colleagues-holding-giant-golden-cup-trophy-and-celebrating-goal-achievement-flat-vector.jpg",
      count: "21",
    },
    {
      title: "Summits",
      img: "https://previews.123rf.com/images/sabelskaya/sabelskaya1908/sabelskaya190800765/128900118-team-of-colleagues-holding-giant-golden-cup-trophy-and-celebrating-goal-achievement-flat-vector.jpg",
      count: "5",
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
        flexDirection={"column"}
      >
        <Typography
          mt={5}
          color={"white"}
          fontWeight={700}
          fontSize={{ md: "30px", xs: "20px" }}
        >
          {serviceName ? serviceName.replace(/-/g, " ") : "About Us"}
        </Typography>
        <Typography
          mt={5}
          color={"white"}
          fontWeight={500}
          fontSize={{ md: "15px", xs: "12px" }}
        >
          {serviceName?.replace(/-/g, " ") === "Founders Voice"
            ? "From school corridors to national summits—our journey began with a simple goal: to make education more connected, accessible, and impactful"
            : serviceName?.replace(/-/g, " ") === "Our Mission And Vision"
            ? ""
            : serviceName?.replace(/-/g, " ") === "Our Family"
            ? "The People Powering Our Mission"
            : "A team of education - first professionals building real connections across 10,000+ schools — through strategy, service, and trust."}
        </Typography>
      </Box>
      {!serviceName ? (
        <>
          {/* <Box
            mt={5}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            flexDirection={{ xs: "column", md: "row" }}
            gap={3}
          >
            <Box
              sx={{
                width: { md: "180px", xs: "0px" },
                height: { md: "200px", xs: "0px" },
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  background: "white",
                  objectFit: "contain",
                }}
                loading="lazy"
                src="/images/dotblue.webp"
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: "98%", md: "70%" },
                //   m: 4,
                paddingBottom: { md: "30%", xs: "70%" }, // 16:9 aspect ratio
                height: 0,
                overflow: "hidden",
                borderRadius: { md: "20px", xs: "0" },
              }}
            >
              <iframe
                src={`${url}?rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </Box>
          </Box> */}
          <Grid container width={"100%"}>
            <Grid
              item
              xs={12}
              md={6}
              py={{ md: 4, xs: 0 }}
              display={"flex"}
              justifyContent={{ md: "end", xs: "center" }}
              alignItems={"center"}
            >
              <Box
                sx={{
                  width: { lg: "70%", md: "90%", xs: "70%" },
                  height: { md: "400px", xs: "200px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "80%",
                    height: "60%",
                    borderRadius: "10px",
                    // background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                  }}
                  loading="lazy"
                  src="/images/gurulogo.png"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              mt={{ md: 5, xs: 0 }}
              p={{ lg: 4, xs: 3 }}
              pl={{ lg: 8, xs: 4 }}
            >
              <Typography fontWeight={600} fontSize={"18px"}>
                About Us
              </Typography>
              <Typography
                fontWeight={600}
                fontSize={{ md: "20px", xs: "15px" }}
                my={1}
                maxWidth={{ md: "70%", xs: "100%" }}
              >
                Real change in education doesn’t happen in isolation — it
                happens when people, purpose, and partnerships align.
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"15px"}
                my={1}
                maxWidth={{ md: "70%", xs: "100%" }}
                color={"#100854"}
              >
                At Helping Gurus, we are more than just an event and service
                provider — we’re a catalyst for change in the Indian education
                sector.
                <br />
                <br />
                With years of dedicated experience in the K12 space, we
                specialize in designing and executing programs that bring value
                to schools, educators, students, and EdTech partners alike. From
                large-scale summits and roundtable discussions to staff
                recruitment, teacher training, student initiatives, and
                strategic collaborations, our work is rooted in the needs of
                modern educational institutions.
                <br />
                <br />
                What truly sets us apart is our extensive network of over
                10,000+ schools across CBSE, ICSE, IB, and State Boards. This
                wide reach allows us to craft tailored, scalable solutions for a
                variety of educational and brand-building needs — while ensuring
                local relevance and national impact.
                <br />
                <br />
                Our team brings together passionate professionals with deep
                insight into school dynamics, enabling us to bridge the gap
                between institutions and innovation. Whether you're a school
                leader looking to enhance your institution's engagement or an
                EdTech brand aiming to break into the academic space, Helping
                Gurus is the partner you can count on.
                <br />
                <br />
                We believe in creating real connections, delivering measurable
                value, and most importantly — helping the education ecosystem
                thrive.
              </Typography>
            </Grid>
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
                <Typography
                  textAlign={"center"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#fff"}
                  my={1}
                >
                  A thriving ecosystem of schools, educators, and academic
                  leaders—built on trust, reach, and results.
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
                        background:
                          "linear-gradient(to right, #6D7BFE, #3034BB)",
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
                    <Typography
                      color={"#fff"}
                      fontWeight={600}
                      fontSize={"15px"}
                    >
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
                  Our Achievements at a Glance
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
                        background:
                          "linear-gradient(to right, #6D7BFE, #3034BB)",
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
                    <Typography
                      color={"#fff"}
                      fontWeight={600}
                      fontSize={"15px"}
                    >
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
                  color={"#fff"}
                >
                  Experience the difference with Helping Gurus — where every
                  connection leads to transformation
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        ""
      )}
      {serviceName?.replace(/-/g, " ") === "Founders Voice" && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Grid container width={"100%"} mt={{ xs: 5, md: 0 }}>
            <Grid
              item
              xs={12}
              md={5}
              py={{ md: 4, xs: 0 }}
              display={"flex"}
              justifyContent={{ md: "end", xs: "center" }}
              alignItems={"center"}
            >
              <Box
                sx={{
                  width: { md: "70%", xs: "70%" },
                  height: { md: "400px", xs: "200px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    objectFit: "contain",
                    // background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                  }}
                  loading="lazy"
                  src="/images/rajiv.png"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              mt={{ md: 5, xs: 0 }}
              p={{ md: 4, xs: 3 }}
              pl={{ md: 8, xs: 4 }}
            >
              <Typography
                fontWeight={600}
                fontSize={{ md: "25px", xs: "15px" }}
                my={1}
                maxWidth={{ md: "70%", xs: "100%" }}
              >
                गुरु चरणों में शत शत नमन !!!
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"15px"}
                my={1}
                maxWidth={{ md: "85%", xs: "100%" }}
                color={"#100854"}
              >
                The story of Helping Gurus is deeply personal. What began as
                individual contributions in the field of school education
                gradually evolved into a nationwide movement—one that now
                connects over 10,000 institutions, educators, and academic
                influencers across India.
                <br />
                <br />
                Having worked closely with schools for several years, I noticed
                a crucial gap: the lack of cohesive, meaningful engagement
                between institutions, educators, and external partners. Schools
                often struggled to access reliable platforms for talent
                acquisition, teacher training, and student enrichment, while
                educational service providers lacked credible ways to connect
                with the right audience. Helping Gurus was born to bridge this
                exact gap.
                <br />
                <br />
                We started small—organizing focused school events, curating
                educator workshops, and initiating one-on-one conversations with
                school leaders. Over time, the trust we built turned into
                long-standing relationships. With each roundtable we hosted and
                every summit we led, the demand for authentic, on-ground
                educational solutions only grew stronger.
                <br />
                <br /> Today, Helping Gurus is more than just an events and
                services platform. It’s a shared space where schools find value,
                teachers find purpose, students find growth opportunities, and
                EdTech partners find their voice.
                <br />
                <br />
                As the founder, I remain actively involved in every aspect of
                this journey—from designing engagement strategies to sitting in
                school meetings—because I believe leadership is about staying
                connected to the ground reality.
                <br />
                <br />
                Helping Gurus is built not just on expertise, but on empathy,
                listening, and meaningful action. And we’re just getting
                started.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      {serviceName?.replace(/-/g, " ") === "Our Mission And Vision" && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Grid
            item
            container
            xs={12}
            md={12}
            width={{ md: "70%", xs: "100%" }}
            mt={{ md: 5, xs: 0 }}
            p={{ md: 4, xs: 3 }}
            pl={{ md: 0, xs: 4 }}
          >
            <Grid item md={12} xs={12}>
              <Typography
                fontWeight={600}
                fontSize={{ md: "35px", xs: "20px" }}
                my={1}
              >
                Our Mission
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"15px"}
                my={1}
                color={"#100854"}
              >
                At Helping Gurus, our mission is to bridge the gap between
                educational institutions and EdTech partners by creating
                meaningful, long-lasting connections. We recognize the
                importance of visibility and credibility in the education
                sector—and with our vast, verified network of over 10,000+ CBSE
                schools, 400+ ICSE schools, 50+ IB schools, and 700+ State Board
                institutions—we help brands establish their presence across the
                entire educational spectrum in India.
                <br />
                <br />
                But we go beyond just facilitating connections. At the heart of
                our work lies a genuine commitment to supporting educators—the
                individuals who carry the responsibility of shaping the future.
                We understand the daily challenges faced by teachers, school
                leaders, and education staff. Whether it's the pressure of
                curriculum delivery, lack of resources, or the absence of
                professional support, we aim to step in where help is most
                needed.
                <br />
                <br />
                Our motto, “Gurus’ Happiness is Our Happiness. Gurus’ Pain is
                Our Pain,” is more than a statement—it's a guiding principle. We
                exist to serve educators by providing access to training,
                recruitment assistance, exposure to expert speakers, and
                educational tools that help them thrive in an ever-evolving
                landscape. Through our diverse services, we aim to bring both
                joy and ease to the lives of those who dedicate themselves to
                education. By creating opportunities for schools and EdTech
                partners to collaborate meaningfully, we’re not just helping
                institutions grow—we’re also enriching the quality of education
                delivered to students across the country.
                <br />
                <br />
                <Typography
                  fontWeight={600}
                  fontSize={{ md: "35px", xs: "20px" }}
                  my={1}
                >
                  Our Vision
                </Typography>
                Our vision is to create a future where every educator feels
                supported, empowered, and never alone in their journey. We aim
                to build a nurturing ecosystem where teachers, administrators,
                and school stakeholders have seamless access to the tools,
                guidance, and services they need to succeed
                <br />
                <br />
                We envision Helping Gurus as the trusted go-to platform for
                schools across all boards and regions—offering personalized,
                relevant support for everything from manpower solutions and
                academic enhancement to professional development and school
                management. In doing so, we hope to reduce operational friction
                for institutions and bring clarity and confidence to every
                educator’s path.
                <br />
                <br />
                We also strive to act as the catalyst that enables EdTech brands
                to reach the right audiences—not through aggressive sales
                tactics, but by integrating value-driven partnerships that
                benefit schools, teachers, and learners alike. At Helping Gurus,
                we believe education flourishes in a space of collaboration and
                compassion. Our vision is to grow this space—one connection, one
                institution, and one educator at a time—until every classroom
                becomes a place of empowered learning and joyful teaching.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      {serviceName?.replace(/-/g, " ") === "Our Family" && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Grid
            item
            container
            xs={12}
            md={12}
            width={{ md: "70%", xs: "100%" }}
            mt={{ md: 5, xs: 0 }}
            p={{ md: 4, xs: 3 }}
            pl={{ md: 0, xs: 4 }}
          >
            <Grid item md={12} xs={12} mt={{ md: 5, xs: 0 }}>
              <Grid container my={4} mt={0} spacing={2}>
                <MediaCard
                  name={"Dheeraj Malhotra"}
                  role={"Event Sponsorship Lead"}
                  img={"/images/dheeraj.png"}
                />
              </Grid>

              <Typography
                fontWeight={400}
                fontSize={"15px"}
                my={1}
                color={"#100854"}
              >
                <b>
                  Behind every great initiative is a team that believes in its
                  purpose—and at Helping Gurus, our purpose begins with people.
                  Meet the passionate, driven, and education-first professionals
                  who form the backbone of everything we do.
                </b>
                <br />
                <br />
                <b>
                  At the heart of Helping Gurus is a collective of individuals
                  who bring together years of experience in education,
                  marketing, school outreach, event strategy, EdTech engagement,
                  and brand partnerships. Each member of our team plays a vital
                  role in connecting over 10,000 schools across CBSE, ICSE, IB,
                  and State Boards with trusted educational solutions and
                  partners.
                </b>
                <br />
                <br />
                <b>
                  Leading the way is our founder, whose deep-rooted experience
                  in school engagement and strategic collaboration has laid the
                  foundation for what Helping Gurus is today. With a keen
                  understanding of academic institutions and their real-world
                  challenges, our founder has built not just a business—but a
                  movement that puts educators first. Our extended team includes
                  specialists in relationship management, school liaison
                  coordination, event execution, content creation, teacher
                  training, and EdTech consulting. Whether they’re organizing
                  summits, recruiting talent for schools, coordinating speaker
                  sessions, or managing client campaigns, our team works with a
                  shared commitment to uplift the education ecosystem.
                </b>
                <br />
                <br />
                <b>
                  What truly binds us together is our belief in education as a
                  force for good—and our role as enablers of that
                  transformation. We don’t just connect EdTech companies with
                  schools; we build bridges that lead to shared success. We
                  don’t just host events; we create experiences that inspire
                  educators and empower students. We also pride ourselves on
                  being approachable, agile, and aligned with the mission:
                  <b>
                    “Gurus’ Happiness is Our Happiness. Gurus’ Pain is Our
                    Pain.”
                  </b>
                  It’s not just a motto—it’s our daily motivation. At Helping
                  Gurus, we’re not a vendor or a third-party service—we’re your
                  extended team. A family of professionals who are as invested
                  in your goals as you are. Our promise is simple: whether
                  you're a school looking for support or a brand ready to grow,
                  you're in good hands.
                </b>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default AboutUs;

function MediaCard({ name, role, img }) {
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Box
        bgcolor={"#3034BB"}
        height={"300px"}
        my={{ xs: 5, md: 0 }}
        borderRadius={2}
        position={"relative"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{
            position: "absolute",
            zIndex: 100,
            bottom: "27%",
            objectFit: "contain",
          }}
          src={img}
          width={"100%"}
          height={"300px"}
        />
        <Box position={"relative"} bgcolor={"red"} width={"100%"}>
          <Box position={"absolute"} bottom={10} mx={1} zIndex={104}>
            <Typography
              color={"white"}
              gutterBottom
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="white">
              {role}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
