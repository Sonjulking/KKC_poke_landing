"use client";

import React from "react";

interface BattleMenuProps {
    selection: number;
    setSelection: (index: number) => void;
    onConfirm: (index: number) => void;
    options?: { label: string; id: number }[];
}

export default function BattleMenu({
    selection,
    setSelection,
    onConfirm,
    options = [
        { label: "프로필", id: 0 },
        { label: "포트폴리오", id: 1 },
        { label: "GitHub", id: 2 },
        { label: "포획하기", id: 3 },
    ],
}: BattleMenuProps) {
    return (
        <div className="grid grid-cols-2 gap-4 max-sm:gap-2 h-full text-xl max-sm:text-base font-bold">
            {options.map((item) => (
                <button
                    key={item.id}
                    onMouseEnter={() => setSelection(item.id)}
                    onClick={() => {
                        setSelection(item.id);
                        onConfirm(item.id);
                    }}
                    className={`p-2 max-sm:p-1.5 text-left border-2 rounded flex items-center cursor-pointer ${selection === item.id
                        ? "border-black bg-gray-100"
                        : "border-transparent text-gray-400"
                        }`}
                >
                    <span className="w-6 max-sm:w-4 inline-block">
                        {selection === item.id ? "▶" : ""}
                    </span>
                    {item.label}
                </button>
            ))}
        </div>
    );
}
