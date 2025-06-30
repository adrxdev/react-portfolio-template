import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { Facebook, Instagram } from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/512678849_621767097600441_8658753194379093543_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFJ5iRiKgOhj1gxW4dS6KfNBYwpYQnXdu4FjClhCdd27j9wkt2Vx2bj7_BUgSP5HOGUhY3QOTdHI_kXSYF7i5lX&_nc_ohc=ouGGkMCipwYQ7kNvwHq0nBz&_nc_oc=AdmYiZpy2wzrQawlFWivv3zEqmzOi2I3FaIxbKCyJahVVs7KmV8oLNcZsq_pAWINyJs&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=kpNolbwmTAHPo9NtsuLjzA&oh=00_AfNflY74CYF4QrHmm5edP5phLtJO-h0IJHJcXtK9g99wcw&oe=6867328E" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://facebook.com/emmanuel.adrian.b.madrid" target="_blank" rel="noreferrer"><Facebook/></a>
            <a href="/Resume.pdf" download><ArticleIcon/></a>
          </div>
          <h1>Adrx.Dev</h1>
          <p>Front-End Web Developer</p>

          <div className="mobile_social_icons">
            <a href="https://instagram/itf.emann" target="_blank" rel="noreferrer"><Instagram/></a>
            <a href="https://facebook.com/emmanuel.adrian.b.madrid" target="_blank" rel="noreferrer"><Facebook/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;