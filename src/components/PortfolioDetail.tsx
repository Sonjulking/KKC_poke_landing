"use client";

import React from "react";
import { PORTFOLIO_ITEMS } from "@/data/portfolioData";

interface PortfolioDetailProps {
    item: typeof PORTFOLIO_ITEMS[0];
    onBack: () => void;
}

export default function PortfolioDetail({ item, onBack }: PortfolioDetailProps) {
    return (
        <div className="flex flex-col h-full font-bold">
            <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-2">
                <span className="text-xl">{item.title}</span>
          {/*      <span className="text-sm">Lv.50</span>*/}
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto">
                {/* Tech Stack Section */}
                <div className="bg-gray-100 p-2 rounded border border-gray-300">
                    <div className="text-xs text-blue-600 mb-1">TECH STACK (TYPE)</div>
                    <div className="text-sm">
                        <span className="inline-block w-20 text-gray-500">Frontend:</span>
                        {item.stack.frontend}
                    </div>
                    <div className="text-sm">
                        <span className="inline-block w-20 text-gray-500">Backend:</span>
                        {item.stack.backend}
                    </div>
                </div>
                {/* Features Section */}
                <div className="bg-gray-100 p-2 rounded border border-gray-300">
                    <div className="text-xs text-red-600 mb-1">KEY FEATURES (MOVES)</div>
                    <ul className="text-sm list-disc list-inside">
                        {item.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </div>
                {/* Description */}
                <div className="bg-yellow-50 p-2 rounded border border-black text-sm">
                    <div className="text-xs text-gray-500 mb-1">TRAINER MEMO</div>
                    {item.desc}
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
