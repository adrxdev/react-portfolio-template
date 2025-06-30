import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { Facebook, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://instagram.com/itf.emann" target="_blank" rel="noreferrer"><Instagram/></a>
        <a href="https://facebook.com/emmanuel.adrian.b.madrid" target="_blank" rel="noreferrer"><Facebook/></a>
      </div>
     
    </footer>
  );
}

export default Footer;