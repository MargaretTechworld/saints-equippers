import React from 'react';
import pastorImg from '../assets/pastor.jpg';
import '../styles/intro.css';

const Intro = () => (
  <div className="intro-section">
    <div className="intro-content">
      <div className="intro-image">
        <img src={pastorImg} alt="Pastor" />
      </div>

      <div className="intro-text">
        <p>
          We are delighted to have you here. Join us as we grow in grace,
          embrace the power of the Word, and experience true transformation
          through Jesus Christ.
          We are delighted to have you here. Join us as we grow in grace,
          embrace the power of the Word, and experience true transformation
          through Jesus Christ.
          We are delighted to have you here. Join us as we grow in grace,
          embrace the power of the Word, and experience true transformation
          through Jesus Christ.
          We are delighted to have you here. Join us as we grow in grace,
          embrace the power of the Word
        </p>

        <p className="author-signature">
          –
          <span>Rev Dr. Borbor</span>
        </p>

        <hr className="horizontal" />

        <div className="info-div-p">
          <p className="info-item">
            {' '}
            <span>18 Dougan Street, Congo, Market</span>
          </p>
          <p className="info-item"><a href="tel:+23276448250">+232 76 448250</a></p>
          <p className="info-item">
            {' '}
            <a href="mailto:adrianborbor@gmail.com">adrianborbor@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Intro;
