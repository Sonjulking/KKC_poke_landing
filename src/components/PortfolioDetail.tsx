"use client";

import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

interface PortfolioDetailProps {
  item: PortfolioItem;
  onBack: () => void;
}

export default function PortfolioDetail({ item, onBack }: PortfolioDetailProps) {
  return (
    <div className="flex flex-col h-full font-bold text-black dark:text-white">
      <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-2 max-sm:pb-1 mb-2 max-sm:mb-1">
        <span className="text-xl max-sm:text-base truncate mr-2">{item.title}</span>
        <div className="flex gap-2 max-sm:gap-1 flex-shrink-0">
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 max-sm:p-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              title="Live Deployment"
            >
              <FaExternalLinkAlt size={16} className="max-sm:w-3 max-sm:h-3" />
            </a>
          )}
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 max-sm:p-1 rounded-full bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors shadow-sm"
              title="GitHub Repository"
            >
              <FaGithub size={16} className="max-sm:w-3 max-sm:h-3" />
            </a>
          )}
          {(item.notionUrl || item.link) && (
            <a
              href={item.notionUrl || item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 max-sm:p-1 rounded-full bg-white text-black border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 transition-colors shadow-sm"
              title="Notion Page"
            >
              <SiNotion size={16} className="max-sm:w-3 max-sm:h-3" />
            </a>
          )}
        </div>
      </div>
      <div className="flex-1 space-y-4 max-sm:space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        {/* Description */}
        <div className="bg-yellow-50 dark:bg-gray-800 p-2 max-sm:p-1.5 rounded border border-black dark:border-gray-600 text-sm max-sm:text-xs">
          <div className="text-xs max-sm:text-[10px] text-gray-500 dark:text-gray-300 mb-1">프로젝트 설명</div>
          {item.desc}
        </div>
        {/* Tech Stack Section */}
        <div className="bg-gray-100 dark:bg-gray-800 p-2 max-sm:p-1.5 rounded border border-gray-300 dark:border-gray-600">
          <div className="text-xs max-sm:text-[10px] text-blue-600 dark:text-blue-400 mb-1">기술스택</div>
          {item.stack.language && (
            <div className="text-sm max-sm:text-xs">
              <span className="inline-block w-20 max-sm:w-16 text-gray-500 dark:text-gray-300">Language:</span>
              {item.stack.language}
            </div>
          )}
          {item.stack.frontend && (
            <div className="text-sm max-sm:text-xs">
              <span className="inline-block w-20 max-sm:w-16 text-gray-500 dark:text-gray-300">Frontend:</span>
              {item.stack.frontend}
            </div>
          )}
          {item.stack.backend && (
            <div className="text-sm max-sm:text-xs">
              <span className="inline-block w-20 max-sm:w-16 text-gray-500 dark:text-gray-300">Backend:</span>
              {item.stack.backend}
            </div>
          )}
          {item.stack.DB && (
            <div className="text-sm max-sm:text-xs">
              <span className="inline-block w-20 max-sm:w-16 text-gray-500 dark:text-gray-300">DB:</span>
              {item.stack.DB}
            </div>
          )}
        </div>
        {/* Features Section */}
        <div className="bg-gray-100 dark:bg-gray-800 p-2 max-sm:p-1.5 rounded border border-gray-300 dark:border-gray-600">
          <div className="text-xs max-sm:text-[10px] text-red-600 dark:text-red-400 mb-1">주요기능</div>
          <ul className="text-sm max-sm:text-xs list-disc list-inside">
            {item.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="mt-2 text-xs text-right text-gray-400 cursor-pointer hover:text-black dark:text-gray-400 dark:hover:text-white"
        onClick={onBack}
      >
        [ESC] BACK TO LIST
      </div>
    </div>
  );
}
