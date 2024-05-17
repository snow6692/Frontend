import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
    <div className="gpt3__features-container__feature">
        <div className="gpt3__features-container__feature-title">
            <div />
            <h2 style={{ color: "white" }}>{title}</h2>
        </div>
        <div className="gpt3__features-container_feature-text">
            <p>{text}</p>
        </div>
    </div>
);

export default Feature;
