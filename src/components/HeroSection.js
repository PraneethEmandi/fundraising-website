import React from 'react';
import '../Style/HeroSection.css';
import heroImage from '../assets/logo192.png'; // Save the uploaded image in src/assets/

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* <img src={heroImage} alt="Fundraising" className="img-fluid" /> */}
        <h1>Help the Needy</h1>
        <p>I, Veerraju, am from Samarlakota town and belong to a simple middle-class family working as a laborer. I have two daughters. My younger daughter's name is Shyamala Bhanu, and she is 4 years and 9 months old. However, due to frequent fevers, we admitted her to the Kakinada Government Hospital (G.G.H). Even after fifteen days of treatment, her fever did not subside, so the doctors performed a bone marrow test. Through this test, it was confirmed that my daughter has a disease called Hemophagocytic Lymphohistiocytosis (H.L.H), which is more dangerous than cancer and affects one in a hundred thousand people.

Since there is no treatment for this disease in Kakinada, the doctors advised us to admit her immediately to the Christian Medical College (C.M.C Hospital) in Vellore, Tamil Nadu. Even after a month of treatment there, her health did not improve, and the doctors confirmed through genetic testing that this disease is familial HLH type 3 and has been present since her birth. So far, we have spent around 6 lakhs on her treatment with the help of relatives.

The doctors have now confirmed that the only treatment for this disease is a bone marrow transplant, which will cost 25 lakhs. Given our current financial situation, we are seeking your help. We kindly request you to consider our situation with your generous heart and assist us in treating my daughter, giving her a chance at a bright future.

Contact no: 9381949232
Phone Pay: 9381949232 (Pasala Sivanagamanjula)</p>
    </div>
  );
};

export default HeroSection;
