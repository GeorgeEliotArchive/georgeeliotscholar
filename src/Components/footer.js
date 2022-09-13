/* footer.js - footer of the github.io splash page
 * Edited by Libo Sun, Jan 2022; Cj Short, Aug 2022
 * Auburn University 
 */

import React from "react";
import importImageNnebraska from '../Images/logo_nebraska.jpg';
import importImageAU from '../Images/logo_auhorizontal.png';
import importImageArchive from '../Images/logo_archive.jpg';
import importImageCopyright from '../Images/copy_right_88x31.png';

/* This is where the bottom of the github.io page is fixed. First div grouping within main div houses all necessary logos.
 * center_image is the copyright image. foot_text houses the tiny text.
 */
const Footer = () => (
  <div className="footer">
      
      <div>
        <img className="left_image" src={importImageNnebraska} alt='Negraska'></img>
        <img className="left_image" src={importImageAU} alt='AU'></img>
        <img className="right_image" src={importImageArchive} alt='Archive'></img>
      </div>

      <p className="text_inblock"><br /></p>
      
      
      <div className="center_image">
        <img src={importImageCopyright} alt='copy right'></img>
      </div>

      <div className="foot_text"><a style={{fontSize: "11px", display: "flex", position: "relative", alignItems: "center", justifyContent: "center", textDecorationLine: "underline"}}href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        Copyright license</a>: CC-BY-NC-SA 4.0 Sharing is permitted for non-commercial purposes with attribution to this database, 
        the George Eliot Archive, edited by Beverley Park Rilett.
      </div>
  </div>
);

export default Footer;