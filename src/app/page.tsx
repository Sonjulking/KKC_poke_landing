"use client";

import Image from "next/image";
import TypingText from "@/components/TypingText";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {PORTFOLIO_ITEMS} from "@/data/portfolioData";
import BattleMenu from "@/components/BattleMenu";
import PortfolioList from "@/components/PortfolioList";
import PortfolioDetail from "@/components/PortfolioDetail";
import ProfileCard from "@/components/ProfileCard";
import CaptureModal from "@/components/CaptureModal";

export default function Home() {
  /* 
   BattleState 'portfolio' mimics the Pokemon 'Party' screen 
   where users see a list of projects.
  */
  const [battleState, setBattleState] = useState<"intro" | "menu" | "portfolio" | "profile" | "portfolio_detail">("intro");

  /* 
   Menu Index Mapping (2x2 Grid):
   0: Fight (Top Left)   | 1: Bag (Top Right)
   2: Pokemon (Bot Left) | 3: Run (Bot Right) -> Capture
  */
  const [menuSelection, setMenuSelection] = useState<number>(0);
  const [portfolioSelection, setPortfolioSelection] = useState<number>(0);
  const [showCaptureModal, setShowCaptureModal] = useState<boolean>(false);

  const handleMenuConfirm = (index: number = menuSelection) => {
    console.log(`Selected option index: ${index}`);
    if (index === 0) { // '싸우다' -> '프로필' (Profile)
      setBattleState("profile");
      return;
    }
    if (index === 1) { // '가방' -> '포트폴리오' (Portfolio)
      setBattleState("portfolio");
      return;
    }
    if (index === 2) { // 'GitHub' -> 'GitHub' (GitHub)
      if (confirm("고강찬의 GitHub로 이동하시겠습니까?")) {
        const url = "https://github.com/Sonjulking";
        const newWindow = window.open(url, "_blank", "noopener,noreferrer");

        if (newWindow) {
          // 팝업 차단 등으로 인해 창이 열리지 않을 수 있으므로 체크
          newWindow.focus();
        }
      }
      return;
    }
    if (index === 3) { // '포획하기' (Capture)
      setShowCaptureModal(true);
      return;
    }

    alert(`You selected: ${["싸우다", "포트폴리오", "GitHub", "포획하기"][index]}`);
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
          setBattleState("menu");
        } else if (e.key === "Enter") {
          // Open Detail View
          setBattleState("portfolio_detail");
        }
      } else if (battleState === "profile") {
        // Profile Navigation Logic (Esc to Back)
        if (e.key === "Escape" || e.key === "Backspace") {
          setBattleState("menu");
        }
      } else if (battleState === "portfolio_detail") {
        // Detail View Navigation (Esc to Back to List)
        if (e.key === "Escape" || e.key === "Backspace") {
          setBattleState("portfolio");
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [battleState, menuSelection]);

  /*bg-[linear-gradient(to_bottom,#A0D8EF_58%,#78C850_58%)]*/
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-4 max-sm:p-2  overflow-hidden border-[12px] border-[#212121] shadow-[inset_0_0_0_6px_#f8fafc,inset_0_0_0_12px_#212121] max-sm:border-[6px] max-sm:shadow-[inset_0_0_0_3px_#f8fafc,inset_0_0_0_6px_#212121]">
      {/* Intro Animation Overlay */}
      <motion.div
        className="absolute inset-0 bg-black z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* 상단: 상대방 (예: 면접관, 방문자) */}
      {battleState !== "portfolio" && battleState !== "profile" && battleState !== "portfolio_detail" && (
        <motion.div
          className="w-full max-w-2xl flex justify-end items-center space-x-4 max-sm:space-x-2 p-4 max-sm:p-2 ml-100 max-sm:ml-0 -mt-12 max-sm:-mt-4"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.5 }}
        >
          <div className="flex space-x-1">
            {/* 포켓몬 볼 아이콘 6개 */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 max-sm:w-3 max-sm:h-3 bg-red-500 rounded-full border-2 max-sm:border border-black"
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
              loading="eager"
              style={{ width: "auto", height: "auto" }}
              className="pixelated max-sm:w-[200px] max-sm:h-[200px]"
            />
          </motion.div>
        </motion.div>
      )}

      {/* 하단: 플레이어 (본인) */}
      {battleState !== "portfolio" && battleState !== "profile" && battleState !== "portfolio_detail" && (
        <motion.div
          className="w-full max-w-2xl flex justify-start items-center space-x-4 max-sm:space-x-2 p-4 max-sm:p-2 mt-auto mb-8 max-sm:mb-4 mr-100 max-sm:mr-0"
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
              className="pixelated max-sm:w-[200px] max-sm:h-[200px]"
            />
          </motion.div>
          <div className="flex space-x-1">
            {/* 포켓몬 볼 아이콘 6개 */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-4 max-sm:w-3 max-sm:h-3 bg-red-500 rounded-full border-2 max-sm:border border-black"
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
        className="w-full max-w-3xl max-sm:max-w-full bg-white p-2 rounded-sm border-[6px] max-sm:border-4 border-black shadow-[inset_0_0_0_4px_white,inset_0_0_0_8px_#555] max-sm:shadow-[inset_0_0_0_2px_white,inset_0_0_0_4px_#555]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="p-4 max-sm:p-2 min-h-[120px] max-sm:min-h-[100px] relative">
          {battleState === "intro" ? (
            <div className="text-2xl max-sm:text-lg font-bold">
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
              onSelect={() => setBattleState("portfolio_detail")}
              onBack={() => setBattleState("menu")}
            />
          ) : battleState === "portfolio_detail" ? (
            <PortfolioDetail
              item={PORTFOLIO_ITEMS[portfolioSelection]}
              onBack={() => setBattleState("portfolio")}
            />
          ) : battleState === "profile" ? (
            <ProfileCard
              onBack={() => setBattleState("menu")}
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

      {/* Capture Modal */}
      <CaptureModal isOpen={showCaptureModal} onClose={() => setShowCaptureModal(false)} />
    </main>
  );
}