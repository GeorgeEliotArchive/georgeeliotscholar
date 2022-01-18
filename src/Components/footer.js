
import React from "react";
import importImageNnebraska from '../Images/logo_nebraska.jpg';
import importImageAU from '../Images/logo_auhorizontal.png';
import importImageArchive from '../Images/logo_archive.jpg';
import importImageCopyright from '../Images/copy_right_88x31.png';

const Footer = () => (
  <p className="footer">
    
          <div>
      <img src={importImageNnebraska} alt='Negraska'></img>
      <img src={importImageAU} alt='AU'></img>
      <img className="right_image" src={importImageArchive} alt='Archive'></img>
      </div>
      
      <div className="center_image">
      <img src={importImageCopyright} alt='copy right'></img>
      </div>
      
      <div className="foot_text"><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        Copyright license</a>: CC-BY-NC-SA 4.0 Sharing is permitted for non-commercial purposes with attribution to this database, 
        the George Eliot Archive, edited by Beverley Park Rilett.
  </div>
  </p>
);

export default Footer;