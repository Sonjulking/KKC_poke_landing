"use client";

import Image from "next/image";
import TypingText from "@/components/TypingText";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";

export default function Home() {
  const [battleState, setBattleState] = useState<"intro" | "menu">("intro");

  /* 
   Menu Index Mapping (2x2 Grid):
   0: Fight (Top Left)   | 1: Bag (Top Right)
   2: Pokemon (Bot Left) | 3: Run (Bot Right)
  */
  const [menuSelection, setMenuSelection] = useState<number>(0);

  const handleMenuConfirm = () => {
    console.log(`Selected option index: ${menuSelection}`);
    alert(`You selected: ${["싸우다", "가방", "포켓몬", "도망치다"][menuSelection]}`);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (battleState === "intro") {
        if (e.key === "Enter") {
          setBattleState("menu");
        }
      } else if (battleState === "menu") {
        // Menu Navigation Logic
        if (e.key === "ArrowRight") {
          setMenuSelection((prev) => (prev % 2 === 0 ? prev + 1 : prev));
        } else if (e.key === "ArrowLeft") {
          setMenuSelection((prev) => (prev % 2 !== 0 ? prev - 1 : prev));
        } else if (e.key === "ArrowDown") {
          setMenuSelection((prev) => (prev < 2 ? prev + 2 : prev));
        } else if (e.key === "ArrowUp") {
          setMenuSelection((prev) => (prev >= 2 ? prev - 2 : prev));
        } else if (e.key === "Enter") {
          handleMenuConfirm();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [battleState, menuSelection]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-4 bg-gray-100 font-pixel overflow-hidden">
      {/* Intro Animation Overlay */}
      <motion.div
        className="absolute inset-0 bg-black z-50 pointer-events-none"
        initial={{opacity: 1}}
        animate={{opacity: 0}}
        transition={{duration: 1, ease: "easeOut"}}
      />

      {/* 상단: 상대방 (예: 면접관, 방문자) */}
      <motion.div
        className="w-full max-w-2xl flex justify-end items-center space-x-4 p-4 ml-100"
        initial={{x: "100%", opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 60, damping: 20, delay: 0.5}}
      >
        <div className="flex space-x-1">
          {/* 포켓몬 볼 아이콘 6개 */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-red-500 rounded-full border-2 border-black"
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={{delay: 1.2 + i * 0.1, type: "spring"}}
            ></motion.div>
          ))}
        </div>
        {/* 상대방 캐릭터 이미지 */}
        <motion.div
          animate={{y: [0, -10, 0]}}
          transition={{repeat: Infinity, duration: 1, ease: "easeInOut"}}
        >
          <Image
            src="/img/metamong.png"
            alt="Rival"
            width={500}
            height={500}
            className="pixelated"
          />
        </motion.div>
      </motion.div>

      {/* 하단: 플레이어 (본인) */}
      <motion.div
        className="w-full max-w-2xl flex justify-start items-center space-x-4 p-4 mt-auto mb-8 mr-100"
        initial={{x: "-200%", opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 60, damping: 20, delay: 0.5}}
      >
        {/* 본인 캐릭터 이미지 */}
        <motion.div
          animate={{y: [0, -10, 0]}}
          transition={{repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3}}
        >
          <Image
            src="/img/player.png"
            alt="Player"
            width={500}
            height={500}
            className="pixelated"
          />
        </motion.div>
        <div className="flex space-x-1">
          {/* 포켓몬 볼 아이콘 6개 */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-red-500 rounded-full border-2 border-black"
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={{delay: 1.2 + i * 0.1, type: "spring"}}
            ></motion.div>
          ))}
        </div>
      </motion.div>

      {/* 중앙: 메시지 박스 또는 메뉴 */}
      <motion.div
        className="w-full max-w-3xl bg-white p-2 rounded-sm border-[6px] border-black shadow-[inset_0_0_0_4px_white,inset_0_0_0_8px_#555]"
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{delay: 1.5, duration: 0.5}}
      >
        <div className="p-4 min-h-[120px] relative">
          {battleState === "intro" ? (
            <TypingText
              text="야생의 개발자 고강찬을 마주쳤다."
              startDelay={2.0}
            />
          ) : (
            <div className="grid grid-cols-2 gap-4 h-full text-xl font-bold">
              {[
                {label: "프로필", id: 0},
                {label: "가방", id: 1},
                {label: "포켓몬", id: 2},
                {label: "도망치다", id: 3},
              ].map((item) => (
                <button
                  key={item.id}
                  onMouseEnter={() => setMenuSelection(item.id)}
                  onClick={() => {
                    setMenuSelection(item.id); // Ensure correct selection on click
                    // We need to invoke using a timeout or direct call. 
                    // Since state might not update immediately in this callback scope, we use item.id or logic that relies on current state but we are passing item.id
                    console.log(`Selected option index: ${item.id}`);
                    alert(`You selected: ${item.label}`);
                  }}
                  className={`p-2 text-left border-2 rounded flex items-center cursor-pointer ${menuSelection === item.id
                    ? "border-black bg-gray-100"
                    : "border-transparent text-gray-400"
                  }`}
                >
                  <span className="w-6 inline-block">
                    {menuSelection === item.id ? "▶" : ""}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          )}
          {/* Enter Key Hint (optional, hidden in visuals but useful for DX) */}
          {battleState === "intro" && (
            <motion.div
              className="absolute bottom-2 right-4 text-xs text-gray-400 animate-pulse cursor-pointer hover:text-black"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 4}}
              onClick={() => setBattleState("menu")}
            >
              Press Enter ▼
            </motion.div>
          )}
        </div>
      </motion.div>
    </main>
  );
}