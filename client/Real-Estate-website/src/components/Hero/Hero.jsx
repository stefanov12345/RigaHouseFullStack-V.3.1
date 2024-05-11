import "./Hero.css";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        {/* left side */}
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className='orange-circle' />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Descubre <br />
              la propiedad
              <br /> más adecuada
            </motion.h1>
          </div>
          <div className='flexColStart secondaryText flexhero-des'>
            <span>Encuentra una variedad de propiedades que se adapten muy fácilmente a ti</span>
            <span>Olvídate de todas las dificultades al encontrar una residencia para ti</span>
          </div>
<SearchBar/>
          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={8800} end={50} duration={4} /> <span>+</span>
              </span>
              <span className='secondaryText'>Producto premium</span>
            </div>

            <div className='flexColCenter stat'>
              <span>
                <CountUp start={1950} end={500} duration={4} /> <span>+</span>
              </span>
              <span className='secondaryText'>Cliente satisfecho</span>
            </div>

            <div className='flexColCenter stat'>
              <span>
                <CountUp end={5} /> <span>+</span>
              </span>
              <span className='secondaryText'>Galardonado con premios</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='flexCenter hero-right'>
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className='image-container'
          >
            <img src='./hero-image.png' alt='houses' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
