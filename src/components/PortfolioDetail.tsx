"use client";

import {PORTFOLIO_ITEMS, PortfolioItem} from "@/data/portfolioData";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";
import {SiNotion} from "react-icons/si";

interface PortfolioDetailProps {
  item: PortfolioItem;
  onBack: () => void;
}

export default function PortfolioDetail({item, onBack}: PortfolioDetailProps) {
  return (
    <div className="flex flex-col h-full font-bold">
      <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-2">
        <span className="text-xl">{item.title}</span>
        <div className="flex gap-2">
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              title="Live Deployment"
            >
              <FaExternalLinkAlt size={16}/>
            </a>
          )}
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors shadow-sm"
              title="GitHub Repository"
            >
              <FaGithub size={16}/>
            </a>
          )}
          {(item.notionUrl || item.link) && (
            <a
              href={item.notionUrl || item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors shadow-sm"
              title="Notion Page"
            >
              <SiNotion size={16}/>
            </a>
          )}
        </div>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto">
        {/* Description */}
        <div className="bg-yellow-50 p-2 rounded border border-black text-sm">
          <div className="text-xs text-gray-500 mb-1">프로젝트 설명</div>
          {item.desc}
        </div>
        {/* Tech Stack Section */}
        <div className="bg-gray-100 p-2 rounded border border-gray-300">
          <div className="text-xs text-blue-600 mb-1">기술스택</div>
          {item.stack.language && (
            <div className="text-sm">
              <span className="inline-block w-20 text-gray-500">Language:</span>
              {item.stack.language}
            </div>
          )}
          {item.stack.frontend && (
            <div className="text-sm">
              <span className="inline-block w-20 text-gray-500">Frontend:</span>
              {item.stack.frontend}
            </div>
          )}
          {item.stack.backend && (
            <div className="text-sm">
              <span className="inline-block w-20 text-gray-500">Backend:</span>
              {item.stack.backend}
            </div>
          )}
          {item.stack.DB && (
            <div className="text-sm">
              <span className="inline-block w-20 text-gray-500">DB:</span>
              {item.stack.DB}
            </div>
          )}
        </div>
        {/* Features Section */}
        <div className="bg-gray-100 p-2 rounded border border-gray-300">
          <div className="text-xs text-red-600 mb-1">주요기능</div>
          <ul className="text-sm list-disc list-inside">
            {item.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="mt-2 text-xs text-right text-gray-400 cursor-pointer hover:text-black"
        onClick={onBack}
      >
        [ESC] BACK TO LIST
      </div>
    </div>
  );
}
