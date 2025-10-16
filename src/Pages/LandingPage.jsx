import React from "react";
import banner1 from "../assets/Images/banner1.jpg";
import resume3 from "../assets/Images/resume3.png";
import { Container, Grid, Box, Typography, Button, Paper } from "@mui/material";
import { FaFileAlt, FaEnvelope, FaBriefcase, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "left",
          backgroundImage: `url(${banner1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          position: "relative",
          pl: "5%",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.5)",
          }}
        />

        {/* Glassmorphism Box */}
        <Paper
          elevation={6}
          sx={{
            color: "white",
            p: 5,
            borderRadius: 5,
            maxWidth: "600px",
            position: "relative",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight="bold"
            sx={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
          >
            Want To Get Hired?
          </Typography>

          <Typography
            variant="h6"
            sx={{ mb: 4, textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
          >
            Build your career with confidence and the right opportunities.
            Stand out with skills that employers are searching for.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>

            <Link to="/resume" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #4B0082 0%, #800080 100%)", // gradient
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(135deg, #5C00A3 0%, #9900CC 100%)", // hover gradient
                  },
                }}
              >
                Make Your Resume
              </Button>
            </Link>
            <Button variant="outlined" color="inherit">
              Learn More
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Tools Section */}
      <Box component="section" sx={{ py: 8, bgcolor: "grey.100" }}>
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Our Tools
        </Typography>

        {/* Flexbox wrapper instead of Grid */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // column on mobile, row on desktop
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            px: { xs: 2, md: 8 },
          }}
        >
          {/* Left side - Features */}
          <Box flex={1}>
            <Box display="flex" flexDirection="column" gap={4}>
              {/* Resume */}
              <Box display="flex" gap={2} alignItems="flex-start">
                <FaFileAlt size={28} color="#1976d2" />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Resume
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Create unlimited new resumes and easily edit them afterwards.
                  </Typography>
                </Box>
              </Box>

              {/* Cover Letters */}
              <Box display="flex" gap={2} alignItems="flex-start">
                <FaEnvelope size={28} color="#d32f2f" />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Cover Letters
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Easily write professional cover letters.
                  </Typography>
                </Box>
              </Box>

              {/* Jobs */}
              <Box display="flex" gap={2} alignItems="flex-start">
                <FaBriefcase size={28} color="#2e7d32" />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Jobs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Automatically receive new and relevant job postings.
                  </Typography>
                </Box>
              </Box>

              {/* Applications */}
              <Box display="flex" gap={2} alignItems="flex-start">
                <FaClipboardList size={28} color="#ed6c02" />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Applications
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Effortlessly manage and track your job applications in an organized manner.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right side - Image (no Container/Grid wrapping) */}
          <Box flex={1} textAlign="center">
            <Box
              component="img"
              src={resume3}
              alt="Resume Example"
              sx={{
                maxWidth: "75%",
                height: "auto",
                borderRadius: 4,
                boxShadow: 6,
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LandingPage;
