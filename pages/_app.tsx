import { ThemeProvider } from "next-themes"; // Importar ThemeProvider
import { useEffect, useState } from "react";
import IntroScreen from "../components/IntroScreen";

function MyApp({ Component, pageProps }) {
  const [showIntro, setShowIntro] = useState(null); // Inicializar como null

  useEffect(() => {
      if (typeof window !== "undefined") {
      // const hasSeenIntro = localStorage.getItem("");
      const hasSeenIntro = localStorage.getItem("hasSeenIntro");
      setShowIntro(!hasSeenIntro); 
    }
  }, []);

  const handleContinue = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hasSeenIntro", "true");
    }
    setShowIntro(false);
  };

  // No renderizar nada hasta que se determine si mostrar la intro
  if (showIntro === null) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {showIntro ? (
        <IntroScreen onContinue={handleContinue} />
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}

export default MyApp;