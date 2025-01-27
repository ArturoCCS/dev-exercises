import React from "react";
import styles from "./IntroScreen.module.css";


const IntroScreen: React.FC<{ onContinue: () => void }> = ({ onContinue }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>Bienvenido a My Project</h1>
      <p>Esta es una breve introducción antes de acceder al contenido principal.</p>
      <button className={styles.button} onClick={onContinue} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
        Continuar
      </button>
    </div>
  );
};

export default IntroScreen;
