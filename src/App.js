import React, { useEffect }from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

function App() {
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      const message = "We dont'n save your data in any external sources. Make sure that download your resume before Reload/Leave.";
      event.returnValue = message;
      return message;
    };
  
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
