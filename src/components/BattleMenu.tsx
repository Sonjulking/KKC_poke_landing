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
        { label: "돌아가기", id: 3 },
    ],
}: BattleMenuProps) {
    return (
        <div className="grid grid-cols-2 gap-4 h-full text-xl font-bold">
            {options.map((item) => (
                <button
                    key={item.id}
                    onMouseEnter={() => setSelection(item.id)}
                    onClick={() => {
                        setSelection(item.id);
                        onConfirm(item.id);
                    }}
                    className={`p-2 text-left border-2 rounded flex items-center cursor-pointer ${selection === item.id
                        ? "border-black bg-gray-100"
                        : "border-transparent text-gray-400"
                        }`}
                >
                    <span className="w-6 inline-block">
                        {selection === item.id ? "▶" : ""}
                    </span>
                    {item.label}
                </button>
            ))}
        </div>
    );
}
