
import React from 'react';
import styles from './App.css'
import Navbar from './components/NavBar';
import NameComp from './components/NameComp';
import SocialLinks from './components/SocialLinks';
import { faTwitter, faSlack, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SideLinks from './components/SideLinks';
import PhotoDisplay from './components/PhotoDisplay.js';
import WhyMeSection from './components/WhyMeSection';
import LatestWork from './components/LatestWork';



function App() {
  const navLinks = [
    { label: 'Portfolio', url: 'https://sophabuso.netlify.app/' },
    { label: 'About Me', url: 'https://sophabuso.netlify.app/abaut.html' },
    { label: 'My Blog', url: '#' },
    { label: 'Reviews', url: '#' },
    { label: 'Contact Me', url: 'https://sophabuso.netlify.app/contact.html' },
  ];

  const socialIcons = [
    { icon: faTwitter, url: 'https://twitter.com/SophaBuso/' },
    { icon: faSlack, url: 'https://app.slack.com/client/T04M928TTMF/C04ML3U7DJLom/' },
    { icon: faFacebook, url: 'https://web.facebook.com/?_rdc=1&_rdr/' },
    { icon: faGithub, url: 'https://github.com/sophakabuso' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/sophakama-buso-2a9191103/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeI%2FqN7XGSjOIIVcam21XIg%3D%3D' },
  ];

  const sideLinks = [
    { label: 'my process', url: 'https://sophabuso.netlify.app/' },
    { label: 'client reviews', url: 'https://sophabuso.netlify.app/' },
    { label: 'download cv', url: 'https://sophabuso.netlify.app/' },


  ];
  const images = [
    './app1.png',
    './ressume.png',
    './Tutankhamun.jpg',
    './inner.jpg'
  ];

  const photoUrl = './mypic.jpg';
  const caption = 'ewe nje makubenjalo ';
  



  return (
    <div class="container-app">
      <div class="container-header">
        <NameComp />
        <Navbar links={navLinks} />
        <SocialLinks socialIcons={socialIcons} />
      </div>
      <div class="container-body">
        <SideLinks links={sideLinks} />
        <h1>Sophakama</h1>
        <PhotoDisplay photoUrl={photoUrl} caption={caption} />
        <div>
          <WhyMeSection />
          <LatestWork images={images} />
        </div>
      </div>
    </div>

  );
}

export default App;
