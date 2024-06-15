
import React, { useState, useEffect } from 'react';


const FadeMessage = ({ children }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [3000]);

  return (
    <div>
      {showMessage ? (
        <div className="fade-message">
          <h1>Do you Know ? </h1>
          <p>"Just a little exercise can lift your spirits and improve your mood"</p>
        </div>
      ) : (
        <div className="main-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default FadeMessage;
