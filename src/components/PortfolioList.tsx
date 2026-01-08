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
            <div className="text-sm mb-2 font-bold border-b-2 border-gray-200 pb-1">
                PORTFOLIO LIST
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                {items.map((project, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center p-2 border-2 rounded-md cursor-pointer ${selection === idx ? "border-black bg-gray-100" : "border-gray-200"
                            }`}
                        onMouseEnter={() => setSelection(idx)}
                        onClick={() => {
                            setSelection(idx);
                            onSelect(idx);
                        }}
                    >
                        <div className="mr-3 text-red-500 text-xl">
                            {selection === idx ? "▶" : "●"}
                        </div>
                        <div className="flex-1">
                            <div className="font-bold flex justify-between">
                                <span>{project.title}</span>
                                {/*<span className="text-xs">Lv.50</span>*/}
                            </div>
                            <div className="text-xs text-gray-500">{project.desc}</div>
                            {/* Tech Badges instead of HP Bar */}
                            <div className="mt-1 flex flex-wrap gap-1">
                                <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-800 border border-blue-300 rounded">
                                    {project.stack.frontend.split(',')[0].trim()}
                                </span>
                                {!project.stack.backend.includes("N/A") && !project.stack.backend.includes("None") && (
                                    <span className="text-[10px] px-1.5 py-0.5 bg-stone-100 text-stone-600 border border-stone-300 rounded">
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
