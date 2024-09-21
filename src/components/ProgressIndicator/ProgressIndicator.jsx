import React, { useEffect, useState } from 'react';
import './style.css';

const ProgressIndicator = () => {
    return (
        <div>
            <h3>Progress Indicator</h3>
            <div className="container">
                <div className="progress-container">
                    <div className="progress" id="progress"></div>
                    <div className="circle active">1</div>
                    <div className="circle">2</div>
                    <div className="circle">3</div>
                    <div className="circle">4</div>
                </div>
                <button className="btn" id="prev" disabled>Previous</button>
                <button className="btn" id="next">Next</button>
            </div>
        </div>
    );
}

export default ProgressIndicator;
