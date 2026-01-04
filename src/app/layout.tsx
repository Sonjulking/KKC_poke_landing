// app/layout.tsx
import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google' // 폰트 가져오기
import './globals.css'

const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: '400' }) // 폰트 설정

export const metadata: Metadata = {
    title: '포켓몬 트레이너 [이름]의 포트폴리오',
    description: '야생의 개발자가 나타났다!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <html lang="ko">
                {/* 폰트 클래스 적용 */}
                <body className={pressStart2P.className}>{children}</body>
            </html>
    )
}