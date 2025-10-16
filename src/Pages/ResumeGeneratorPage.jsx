import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { FaFileAlt, FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

function ResumeGeneratorPage() {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: "grey.100" }}>
      {/* Section Title */}
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{ mb: 8 }}
      >
        Create a job-winning Resume in minutes
      </Typography>

      {/* Cards */}
      <Grid container spacing={6} justifyContent="center">
        {/* Step 1 */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 4,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            {/* Icon Circle */}
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "linear-gradient(135deg, #4facfe, #00f2fe)",
                background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                color: "white",
                fontSize: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
              }}
            >
              <FaFileAlt />
            </Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Add your information
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Add pre-written examples to each section
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Step 1
            </Typography>
          </Paper>
        </Grid>

        {/* Step 2 */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 4,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ff0844, #ffb199)",
                color: "white",
                fontSize: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
              }}
            >
              <FaFileDownload />
            </Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Download your Resume
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Download and start applying
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Step 2
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Start Button */}
      <Box textAlign="center" sx={{ mt: 8 }}>
        <Link to="/form">
          <Button
            variant="contained"
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: "50px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #4B0082, #8A2BE2)",
              boxShadow: 4,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                background: "linear-gradient(90deg, #5C00A3, #9B30FF)",
              },
            }}
          >
            LET’S START
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default ResumeGeneratorPage;
