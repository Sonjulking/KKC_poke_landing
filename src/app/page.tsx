"use client";

import Image from "next/image";
import TypingText from "@/components/TypingText";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PORTFOLIO_ITEMS } from "@/data/portfolioData";
import BattleMenu from "@/components/BattleMenu";
import PortfolioList from "@/components/PortfolioList";
import PortfolioDetail from "@/components/PortfolioDetail";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  /* 
   BattleState 'portfolio' mimics the Pokemon 'Party' screen 
   where users see a list of projects.
  */
  const [battleState, setBattleState] = useState<"intro" | "menu" | "portfolio" | "profile" | "portfolio_detail">("intro");

  /* 
   Menu Index Mapping (2x2 Grid):
   0: Fight (Top Left)   | 1: Bag (Top Right)
   2: Pokemon (Bot Left) | 3: Run (Bot Right)
  */
  const [menuSelection, setMenuSelection] = useState<number>(0);
  const [portfolioSelection, setPortfolioSelection] = useState<number>(0);

  const handleMenuConfirm = (index: number = menuSelection) => {
    console.log(`Selected option index: ${index}`);
    if (index === 0) { // '싸우다' -> '프로필' (Profile)
      setBattleState('profile');
      return;
    }
    if (index === 1) { // '가방' -> '포트폴리오' (Portfolio)
      setBattleState('portfolio');
      return;
    }
    alert(`You selected: ${["싸우다", "포트폴리오", "GitHub", "돌아가기"][index]}`);
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
      } else if (battleState === "portfolio") {
        // Portfolio Navigation Logic (Up/Down)
        if (e.key === "ArrowDown") {
          setPortfolioSelection(prev => (prev < PORTFOLIO_ITEMS.length - 1 ? prev + 1 : prev));
        } else if (e.key === "ArrowUp") {
          setPortfolioSelection(prev => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === "Escape" || e.key === "Backspace") {
          setBattleState('menu');
        } else if (e.key === "Enter") {
          // Open Detail View
          setBattleState('portfolio_detail');
        }
      } else if (battleState === "profile") {
        // Profile Navigation Logic (Esc to Back)
        if (e.key === "Escape" || e.key === "Backspace") {
          setBattleState('menu');
        }
      } else if (battleState === "portfolio_detail") {
        // Detail View Navigation (Esc to Back to List)
        if (e.key === "Escape" || e.key === "Backspace") {
          setBattleState('portfolio');
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [battleState, menuSelection]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-4 bg-gray-100 overflow-hidden">
      {/* Intro Animation Overlay */}
      <motion.div
        className="absolute inset-0 bg-black z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* 상단: 상대방 (예: 면접관, 방문자) */}
      {battleState !== 'portfolio' && battleState !== 'profile' && battleState !== 'portfolio_detail' && (
        <motion.div
          className="w-full max-w-2xl flex justify-end items-center space-x-4 p-4 ml-100 -mt-12"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.5 }}
        >
          <div className="flex space-x-1">
            {/* 포켓몬 볼 아이콘 6개 */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-red-500 rounded-full border-2 border-black"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
              ></motion.div>
            ))}
          </div>
          {/* 상대방 캐릭터 이미지 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
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
      )}

      {/* 하단: 플레이어 (본인) */}
      {battleState !== 'portfolio' && battleState !== 'profile' && battleState !== 'portfolio_detail' && (
        <motion.div
          className="w-full max-w-2xl flex justify-start items-center space-x-4 p-4 mt-auto mb-8 mr-100"
          initial={{ x: "-200%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.5 }}
        >
          {/* 본인 캐릭터 이미지 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
              ></motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 중앙: 메시지 박스 또는 메뉴 */}
      <motion.div
        className="w-full max-w-3xl bg-white p-2 rounded-sm border-[6px] border-black shadow-[inset_0_0_0_4px_white,inset_0_0_0_8px_#555]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="p-4 min-h-[120px] relative">
          {battleState === "intro" ? (
            <div className="text-2xl font-bold">
              <TypingText
                text="야생의 개발자 고강찬을 마주쳤다."
                startDelay={2.0}
              />
            </div>
          ) : battleState === "portfolio" ? (
            <PortfolioList
              items={PORTFOLIO_ITEMS}
              selection={portfolioSelection}
              setSelection={setPortfolioSelection}
              onSelect={() => setBattleState('portfolio_detail')}
              onBack={() => setBattleState('menu')}
            />
          ) : battleState === "portfolio_detail" ? (
            <PortfolioDetail
              item={PORTFOLIO_ITEMS[portfolioSelection]}
              onBack={() => setBattleState('portfolio')}
            />
          ) : battleState === "profile" ? (
            <ProfileCard
              onBack={() => setBattleState('menu')}
            />
          ) : (
            <BattleMenu
              selection={menuSelection}
              setSelection={setMenuSelection}
              onConfirm={handleMenuConfirm}
            />
          )}
          {/* Enter Key Hint (optional, hidden in visuals but useful for DX) */}
          {battleState === "intro" && (
            <motion.div
              className="absolute bottom-2 right-4 text-lg text-gray-600 animate-pulse cursor-pointer hover:text-black font-bold font-['Galmuri11']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              onClick={() => setBattleState("menu")}
            >
              Press Enter ▼
            </motion.div>
          )}
        </div>
      </motion.div>
    </main >
  );
}