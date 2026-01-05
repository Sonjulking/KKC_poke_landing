"use client";

import { motion, Variants } from 'framer-motion';

// 1. 외부에서 타입을 명시하며 정의합니다.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (startDelay = 0) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: startDelay },
  }),
};

const childVariants: Variants = {
  visible: {
    opacity: 1,
    // transition에서 duration을 0으로 주거나 아주 짧게 설정하여 "도도독" 느낌을 줍니다.
    transition: {
      duration: 0.01, // 사실상 즉시 나타남
    },
  },
  hidden: {
    opacity: 0,
  },
};

interface TypingTextProps {
  text: string;
  startDelay?: number;
}

// 2. TypingText 컴포넌트 내의 motion.div 스타일 수정
const TypingText = ({ text, startDelay = 0 }: TypingTextProps) => {
  const characters = Array.from(text);

  return (
    <motion.div
      style={{
        display: "inline-block", // flex 대신 inline-block이 줄바꿈에 더 자연스러울 수 있습니다.
        whiteSpace: "pre-wrap",  // 공백과 줄바꿈 유지
        lineHeight: "1.6",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={startDelay}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block" }} // 각 글자가 개별적으로 제어되도록
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypingText;