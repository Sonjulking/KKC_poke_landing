"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CaptureModal({ isOpen, onClose }: CaptureModalProps) {
    const [step, setStep] = useState<"throwing" | "shaking" | "caught" | "info">("throwing");
    const [email] = useState("bushwick97@naver.com");
    const [phone] = useState("010-0000-0000"); // Placeholder for phone number

    useEffect(() => {
        if (isOpen) {
            setStep("throwing");
            // Sequence: Throw -> Shake -> Caught -> Info

            // 1. Throwing animation (0.5s) -> Start shaking
            const timer1 = setTimeout(() => {
                setStep("shaking");
            }, 800);

            // 2. Shaking (3 shakes ~1.5s total) -> Caught
            const timer2 = setTimeout(() => {
                setStep("caught");
            }, 2500);

            // 3. Caught message (1.5s) -> Info
            const timer3 = setTimeout(() => {
                setStep("info");
            }, 4000);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="relative w-full max-w-md max-sm:max-w-xs p-6 max-sm:p-4 flex flex-col items-center justify-center text-center">

                    {/* Master Ball Animation / 마스터볼 그리기 */}
                    {step !== "info" && (
                        <div className="relative">
                            <motion.div
                                initial={{ y: -300, opacity: 0 }}
                                animate={
                                    step === "throwing"
                                        ? { y: 0, opacity: 1 }
                                        : step === "shaking"
                                            ? { y: 0, opacity: 1, rotate: [0, -20, 20, -20, 20, 0] } // Keep y:0 so it doesn't float up
                                            : { y: 0, opacity: 1, filter: "brightness(0.5) grayscale(0.5)" } // Darken when caught
                                }
                                transition={
                                    step === "throwing"
                                        ? { type: "spring", stiffness: 200, damping: 20 }
                                        : step === "shaking"
                                            ? { duration: 1.0, repeat: 2, ease: "easeInOut" } // Repeat twice + initial = 3 shakes
                                            : { duration: 0.3 }
                                }
                            >
                                <img
                                    src="/img/ball2.png"
                                    alt="Master Ball"
                                    className="w-64 h-64 max-sm:w-40 max-sm:h-40 object-contain"
                                />
                            </motion.div>

                            {/* Stars/Effect when caught */}
                            {step === "caught" && (
                                <motion.div
                                    className="absolute -top-10 max-sm:-top-6 -left-10 max-sm:-left-6 w-44 h-44 max-sm:w-28 max-sm:h-28 text-yellow-400 font-bold text-2xl max-sm:text-lg flex items-center justify-center"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1.2, opacity: 1 }}
                                >
                                    ✨ GOTCHA! ✨
                                </motion.div>
                            )}
                        </div>
                    )}

                    {/* Status Text */}
                    {/*                    {step === "throwing" && <p className="mt-8 text-white text-xl font-bold animate-pulse">Master Ball Go!</p>}*/}
                    {/*                    {step === "shaking" && <p className="mt-8 text-white text-xl font-bold">Wiggle... Wiggle...</p>}*/}
                    {step === "caught" && <p className="mt-8 max-sm:mt-4 text-yellow-300 text-2xl max-sm:text-xl font-bold align-middle">
                        야생의 개발자 고강찬을<br />잡았다!
                    </p>}

                    {/* Info Card (Final Step) */}
                    {step === "info" && (
                        <motion.div
                            className="bg-white rounded-lg border-4 max-sm:border-2 border-black p-6 max-sm:p-4 w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                        >
                            <h2 className="text-2xl max-sm:text-xl font-bold mb-2">🎉 포획 성공!</h2>
                            <p className="text-gray-600 mb-6 max-sm:mb-4 max-sm:text-sm">
                                야생의 개발자 고강찬을 붙잡았습니다!
                            </p>

                            <div className="space-y-3">
                                <div className="p-3 max-sm:p-2 bg-gray-100 rounded border border-gray-300 flex items-center justify-between">
                                    <span className="font-mono text-sm max-sm:text-xs truncate mr-2">{email}</span>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(email);
                                            alert("이메일이 복사되었습니다!");
                                        }}
                                        className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                                    >
                                        COPY
                                    </button>
                                </div>
                                {/*
                                <a
                                    href={`mailto:${email}`}
                                    className="block w-full py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition"
                                >
                                    📧 이메일 보내기
                                </a>

                                <div className="p-3 bg-gray-100 rounded border border-gray-300 flex items-center justify-between">
                                    <span className="font-mono text-sm">{phone}</span>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(phone);
                                            alert("전화번호가 복사되었습니다!");
                                        }}
                                        className="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                                    >
                                        COPY
                                    </button>
                                </div>
                                <a
                                    href={`tel:${phone}`}
                                    className="block w-full py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition"
                                >
                                    📞 전화 걸기
                                </a>*/}

                                <button
                                    onClick={onClose}
                                    className="block w-full py-2 text-gray-500 hover:text-black text-sm underline mt-2"
                                >
                                    [닫기]
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
