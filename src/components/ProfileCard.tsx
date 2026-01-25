"use client";

import React from "react";
import Image from "next/image";

interface ProfileCardProps {
  onBack: () => void;
}

export default function ProfileCard({ onBack }: ProfileCardProps) {
  return (
    <div className="flex flex-col h-full font-bold text-black dark:text-white">
      <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-2 max-sm:pb-1 mb-2 max-sm:mb-1">
        <span className="text-xl max-sm:text-base">고강찬 (Ko KangChan)</span>
        {/*         <span className="text-sm">Lv.999</span>*/}
      </div>
      <div className="flex max-sm:flex-col flex-1">
        {/* Left: Avatar */}
        <div className="w-1/3 max-sm:w-32 max-sm:aspect-square flex-shrink-0 border-2 border-gray-400 bg-gray-200 dark:bg-gray-700 dark:border-gray-500 relative overflow-hidden mr-4 max-sm:mr-0 max-sm:mb-2 max-sm:self-center">
          <Image
            src="/img/metamong.png"
            alt="Profile"
            fill
            className="pixelated object-cover"
          />
        </div>
        {/* Right: Stats & Skills */}
        <div className="w-2/3 max-sm:w-full flex flex-col h-full overflow-hidden">
          <div className="flex-1 overflow-y-auto space-y-4 max-sm:space-y-2 pr-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            {/* Basic Stats */}
            <div className="space-y-1 text-sm max-sm:text-xs">
              <div className="flex justify-between">
                {/*                                <span>HP (Coffee)</span>
                                <div className="w-24 bg-gray-300 h-4 border border-black relative">
                                    <div className="bg-green-500 h-full w-full"></div>
                                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white">Full</span>
                                </div>*/}
              </div>
              <div className="flex justify-between">
                <span>JOB</span>
                <span>Full Stack Dev</span>
              </div>
            </div>

            {/* Skills */}
            <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-1">
              <div className="text-xs max-sm:text-[10px] mb-1 text-gray-600 dark:text-gray-200">기술스택</div>
              <div className="grid grid-cols-2 gap-2 max-sm:gap-1 text-sm max-sm:text-xs">
                <div className="border border-black dark:border-white p-1 text-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">Spring
                  Boot
                </div>
                <div className="border border-black dark:border-white p-1 text-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">React</div>
                <div className="border border-black dark:border-white p-1 text-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">MySQL</div>
                <div className="border border-black dark:border-white p-1 text-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">Linux</div>
              </div>
            </div>

            {/* Career (Gym Badges) */}
            <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-1">
              <div className="text-xs max-sm:text-[10px] mb-1 text-blue-700 dark:text-blue-300">경력</div>
              <div className="space-y-2 max-sm:space-y-1 text-sm max-sm:text-xs">
                <div className="flex items-center">
                  <div className="w-4 h-4 max-sm:w-3 max-sm:h-3 rounded-full bg-gray-400 border border-black dark:border-white mr-2 max-sm:mr-1.5"></div>
                  <div>
                    <div className="font-bold">바이오커넥트</div>
                    <div className="text-xs max-sm:text-[10px] text-gray-600 dark:text-gray-200">2025.06 ~ 2025.12</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 max-sm:w-3 max-sm:h-3 rounded-full bg-gray-400 border border-black dark:border-white mr-2 max-sm:mr-1.5"></div>
                  <div>
                    <div className="font-bold">미션비</div>
                    <div className="text-xs max-sm:text-[10px] text-gray-600 dark:text-gray-200">2024.06 ~ 2024.10</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education (Academy) */}
            <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-1">
              <div className="text-xs max-sm:text-[10px] mb-1 text-red-700 dark:text-red-300">학력</div>
              <div className="text-sm max-sm:text-xs">
                <div className="font-bold">신한대학교</div>
                <div className="text-xs max-sm:text-[10px] text-gray-600 dark:text-gray-200">컴퓨터공학 (2016-2023)</div>
              </div>
            </div>

            {/* Certifications (Ribbons) */}
            <div className="border-t-2 border-gray-300 dark:border-gray-600 pt-1">
              <div className="text-xs max-sm:text-[10px] mb-1 text-purple-700 dark:text-purple-300">자격증</div>
              <div className="flex flex-wrap gap-2 max-sm:gap-1 text-xs max-sm:text-[10px]">
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 px-2 max-sm:px-1.5 py-1 max-sm:py-0.5 rounded border border-purple-300 dark:border-purple-700">정보처리기사</span>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-2 max-sm:px-1.5 py-1 max-sm:py-0.5 rounded border border-blue-300 dark:border-blue-700">SQLD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-2 text-xs text-right text-gray-500 cursor-pointer hover:text-black dark:text-gray-400 dark:hover:text-white"
        onClick={onBack}
      >
        [ESC] BACK
      </div>
    </div>
  );
}
