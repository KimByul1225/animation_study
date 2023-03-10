import styled from "styled-components";
import { motion, Variants } from "framer-motion";


const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    height: 70px;
    width: 70px;
    place-self: center;
    border-radius: 35px;
`
const boxVariants: Variants = {
    start: {
        opacity: 0,
        scale: 0.5,
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.2
        }
    }
}

const circleVariants: Variants = {
    start: {
        opacity: 0,
        y: 10,

    },
    end: {
        opacity: 1,
        y: 0,
        transition: {
        type: "spring",
        bounce: 0.5,
        }
    },
}

function VariantsComponents() {
    return (
        <Wrapper>
        <Box
            variants={boxVariants}
            initial="start"
            animate="end"
        >
            <Circle variants={circleVariants}/>
            <Circle variants={circleVariants}/>
            <Circle variants={circleVariants}/>
            <Circle variants={circleVariants}/>
        </Box>
        </Wrapper>
    );
}

export default VariantsComponents;