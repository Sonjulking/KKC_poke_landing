// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: '고강찬의 포트폴리오',
    description: '야생의 개발자가 나타났다!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            {/* 폰트 클래스 제거 (globals.css에서 통합 관리) */}
            <body>{children}</body>
        </html>
    )
}