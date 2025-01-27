import { useEffect, useState } from "react";
import IntroScreen from "../components/IntroScreen";

function MyApp({ Component, pageProps }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro"); 
    // const hasSeenIntro = localStorage.getItem("");
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleContinue = () => {
    localStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <IntroScreen onContinue={handleContinue} />
        
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
