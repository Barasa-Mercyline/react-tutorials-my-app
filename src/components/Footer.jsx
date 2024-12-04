import React from "react";
import "./styles.css";

function Footer(){
    const currentYear = new Date().getFullYear();
     
    return <footer>
          <p className="footer p">Copyright © {currentYear} </p>
    </footer>
             
   
   
    
}

export default Footer;