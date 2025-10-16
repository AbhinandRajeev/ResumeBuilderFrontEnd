import React from "react";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#4B0082",
        color: "white",
        py: 3,
      }}
    >
      <Container maxWidth="md">
        {/* Contact Us Title */}
        <Typography variant="h5" align="center" gutterBottom>
          Contact Us
        </Typography>

        {/* Email */}
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          <IoMailOpenOutline style={{ marginRight: 8 }} />
          resumebuilder@gmail.com
        </Typography>

        {/* Phone */}
        <Typography variant="h6" align="center">
          <MdPhoneAndroid style={{ marginRight: 8 }} />
          9898989898
        </Typography>

        {/* Social Media */}
        <Box textAlign="center" sx={{ mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Connect With Us
          </Typography>
          <Box>
            <IconButton
              href="#home"
              sx={{ color: "white", mr: 2 }}
            >
              <SiWhatsapp size={22} />
            </IconButton>
            <IconButton
              href="#about"
              sx={{ color: "white", mr: 2 }}
            >
              <FaInstagram size={26} />
            </IconButton>
            <IconButton
              href="#contact"
              sx={{ color: "white" }}
            >
              <CiLinkedin size={26} />
            </IconButton>
          </Box>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          © Resume Builder. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
