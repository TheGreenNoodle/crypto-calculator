import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Link from "./Link";

import footerStyles from "../CSS/Footer.module.css";

function Footer() {
  return (
    <div className={footerStyles.footer}>
      <Link
        src="https://github.com/TheGreenNoodle"
        icon={<GitHubIcon fontSize="large" className={footerStyles.icon} />}
      />
      <Link
        src="https://www.linkedin.com/in/anton-fleming-8969671a2/"
        icon={<LinkedInIcon fontSize="large" className={footerStyles.icon} />}
      />
    </div>
  );
}

export default Footer;
