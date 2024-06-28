import React from 'react';
import Image from 'next/image';
import footer_art from '../../public/footer_art.png';

function Footer() {
  return (
    <div className="w-full fixed bottom-0 left-0">
      <Image 
        src={footer_art}
        alt="Artr footer. A big squiggly line throughout the bottom of the page with Artr information such as Support, Help, About, Artists, Community, Privacy, and Terms and Conditions."  
        layout="responsive"
        width={1200} // Ensure these dimensions maintain the aspect ratio of your image
        height={50}
      />
    </div>
  );
}

export default Footer;
