import { motion } from "framer-motion";
import styles from "./IntroScreen.module.css";

const IntroScreen: React.FC<{ onContinue: () => void }> = ({ onContinue }) => {

  const title = "Bienvenido";
  const subtitle = "Texto de ejemplo";
  const description = "La pagina sigue en desarrollo, preciona el boton para ir a la siguiente pagina";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
     
      <motion.div
        className={styles.text}
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1, ease: "easeOut" }} 
        style={{fontWeight: "bold" }}
      >
        {title}
      </motion.div>

      <motion.div
        className={styles.text}
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} 
        style={{ fontSize: "1.5rem", marginTop: "20px" }}
      >
        {subtitle}
      </motion.div>

      <motion.div
        className={styles.text}
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1, delay: 1, ease: "easeOut" }} 
        style={{ fontSize: "1rem", marginTop: "20px" }}
      >
        {description}
      </motion.div>

     <motion.div
        className={styles.text}
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1, delay: 1, ease: "easeOut" }} 
        style={{ fontSize: "1rem", marginTop: "20px" }}
      >
          <motion.button
        className={styles.button}
        onClick={onContinue}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        Continuar
      </motion.button>
      </motion.div>

   
    </div>
  );
};

export default IntroScreen;