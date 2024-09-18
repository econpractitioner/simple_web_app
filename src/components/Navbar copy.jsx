import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [whoWeAreVisible, setWhoWeAreVisible] = useState(false);
  const [contactUsVisible, setContactUsVisible] = useState(false);

  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', display: 'flex', gap: '20px' }}>
      
      {/* Home button */}
      <Link to="/">
        <button>Home</button>
      </Link>

      {/* Who We Are dropdown with Product and About */}
      <div style={{ position: 'relative' }}>
        <button onClick={() => setWhoWeAreVisible(!whoWeAreVisible)}>Who we are</button>
        {whoWeAreVisible && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <Link to="/Products" onClick={() => setWhoWeAreVisible(false)}>
              <button>Product</button>
            </Link>
            <Link to="/About" onClick={() => setWhoWeAreVisible(false)}>
              <button>About</button>
            </Link>
          </div>
        )}
      </div>

      {/* Contact Us dropdown */}
      <div style={{ position: 'relative' }}>
        <button onClick={() => setContactUsVisible(!contactUsVisible)}>Contact us</button>
        {contactUsVisible && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <Link to="/Contact" onClick={() => setContactUsVisible(false)}>
              <button>Contact</button>
            </Link>
          </div>
        )}
      </div>

    </nav>
  );
}
