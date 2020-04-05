import React, { useState, useEffect, useContext } from 'react';
import '../ProgressBar.css';
import { useSocket } from "use-socketio";

const Range = props => {
  return <div className="range" style={{ width: `${props.percentRange}%` }} />;
};

export function ProgressBarContainer() {
  const [ scrapePerc,setScrapePerc ] = useState(0);
  
  useSocket("perc", perc =>
    setScrapePerc(perc)
  );
  
  return (
    <div className="container">
      <div className="progress-bar">
            <Range percentRange={scrapePerc} />
      </div>
    </div>
  );
};
