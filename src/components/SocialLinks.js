import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faSlack, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://twitter.com/SophaBuso/"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://app.slack.com/client/T04M928TTMF/C04ML3U7DJLom/"><FontAwesomeIcon icon={faSlack} /></a>
      <a href="https://web.facebook.com/?_rdc=1&_rdr/"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://github.com/sophakabuso"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.linkedin.com/in/sophakama-buso-2a9191103/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeI%2FqN7XGSjOIIVcam21XIg%3D%3D"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
  );
}

export default SocialLinks;
