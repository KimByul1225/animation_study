import styled from "styled-components";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";


const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 50px;
`;

const box: Variants = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale:1,
    transition:{
      duration: 0.3,
    }
  }),
  center: {
    x:0,
    opacity: 1,
    scale:1,
    transition:{
      duration: 0.3,

    }
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale:1,
      transition:{
      duration: 0.3,
    }
  }),
  
} 

function Slider() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () =>{ 
    setBack(false);
    setVisible(prev => prev === 5 ? 5 : prev+1);
  }
  const prevPlease = () => {
    setBack(true);
    setVisible(prev => prev === 1 ? 1 : prev-1);
  }
  
  return (
    <Wrapper>
      <AnimatePresence 
        custom={back} 
        // mode="wait"
        //사전 실행된 애니메이션이 먼저 실행된 후 다음 애니메이션이 실행되는 옵션
      >
            <Box 
              custom={back}
              variants={box}
              initial="entry"
              animate="center"
              exit="exit"
              key={visible}
            >
              {visible}
            </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default Slider;