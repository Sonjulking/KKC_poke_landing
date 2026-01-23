"use client";

import React from "react";
import { PORTFOLIO_ITEMS } from "@/data/portfolioData";

interface PortfolioListProps {
    items: typeof PORTFOLIO_ITEMS;
    selection: number;
    setSelection: (index: number) => void;
    onSelect: (index: number) => void;
    onBack: () => void;
}

export default function PortfolioList({
    items,
    selection,
    setSelection,
    onSelect,
    onBack,
}: PortfolioListProps) {
    return (
        <div className="flex flex-col h-full overflow-hidden">
            <div className="text-sm max-sm:text-xs mb-2 font-bold border-b-2 border-gray-200 pb-1">
                PORTFOLIO LIST
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 max-sm:space-y-1.5 pr-1">
                {items.map((project, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center p-2 max-sm:p-1.5 border-2 rounded-md cursor-pointer ${selection === idx ? "border-black bg-gray-100" : "border-gray-200"
                            }`}
                        onMouseEnter={() => setSelection(idx)}
                        onClick={() => {
                            setSelection(idx);
                            onSelect(idx);
                        }}
                    >
                        <div className="mr-3 max-sm:mr-2 text-red-500 text-xl max-sm:text-base">
                            {selection === idx ? "▶" : "●"}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="font-bold flex justify-between max-sm:text-sm">
                                <span className="truncate">{project.title}</span>
                                {/*<span className="text-xs">Lv.50</span>*/}
                            </div>
                            <div className="text-xs max-sm:text-[10px] text-gray-500 truncate">{project.desc}</div>
                            {/* Tech Badges instead of HP Bar */}
                            <div className="mt-1 flex flex-wrap gap-1">
                                {project.stack.language && (
                                    <span className="text-[10px] max-sm:text-[8px] px-1.5 max-sm:px-1 py-0.5 bg-green-100 text-green-800 border border-green-300 rounded">
                                        {project.stack.language.split(',')[0].trim()}
                                    </span>
                                )}
                                {project.stack.frontend && (
                                    <span className="text-[10px] max-sm:text-[8px] px-1.5 max-sm:px-1 py-0.5 bg-blue-100 text-blue-800 border border-blue-300 rounded">
                                        {project.stack.frontend.split(',')[0].trim()}
                                    </span>
                                )}
                                {project.stack.backend && !project.stack.backend.includes("N/A") && !project.stack.backend.includes("None") && (
                                    <span className="text-[10px] max-sm:text-[8px] px-1.5 max-sm:px-1 py-0.5 bg-stone-100 text-stone-600 border border-stone-300 rounded">
                                        {project.stack.backend.split(',')[0].trim()}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="mt-2 text-xs text-right text-gray-400 cursor-pointer hover:text-black"
                onClick={onBack}
            >
                [ESC] BACK
            </div>
        </div>
    );
}
