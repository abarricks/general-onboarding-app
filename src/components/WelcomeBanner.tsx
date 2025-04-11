import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/WelcomeBanner.css';

interface WelcomeBannerProps {
  preTitle: string;
  title: string;
  description: string;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ preTitle, title, description }) => {
  return (
    <div className="welcome-banner">
      <div className="welcome-text">
        <div className="text-overlap">
          <div className="pre-title">{preTitle}</div>
          <div className="main-title">{title}</div>
        </div>
        <p className="description">{description}</p>
        <div className="resources-button">
          <Link to="/OnboardingAssistant">
            <button>Onboarding Assistant</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;