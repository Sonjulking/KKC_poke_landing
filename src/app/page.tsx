// app/page.tsx
import Image from "next/image";
import TypingText from "@/components/TypingText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-100 font-pixel"> {/* 전체 컨테이너 & 배경색 설정 */}
      {/* 상단: 상대방 (예: 면접관, 방문자) */}
      <div className="w-full max-w-2xl flex justify-end items-center space-x-4 p-4">
        <div className="flex space-x-1">
          {/* 포켓몬 볼 아이콘 6개 (예시) */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-red-500 rounded-full border-2 border-black"
            ></div>
          ))}
        </div>
        {/* 상대방 캐릭터 이미지 (예시) */}
        <Image
          src="/img/metamong.jpg"
          alt="Rival"
          width={100}
          height={100}
          className="pixelated"
        /> {/* pixelated 클래스로 이미지 픽셀화 */}
      </div>

      {/* 하단: 플레이어 (본인) */}
      <div className="w-full max-w-2xl flex justify-start items-center space-x-4 p-4 mt-auto mb-8">
        {/* 본인 캐릭터 이미지 (예시) */}
        <Image
          src="/img/player.jpg"
          alt="Player"
          width={120}
          height={120}
          className="pixelated"
        />
        <div className="flex space-x-1">
          {/* 포켓몬 볼 아이콘 6개 (본인 스킬/프로젝트 수로 응용 가능) */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-red-500 rounded-full border-2 border-black"
            ></div>
          ))}
        </div>
      </div>

      {/* 중앙: 메시지 박스 */}
      <div className="w-full max-w-3xl bg-white p-2 rounded-sm border-[6px] border-black shadow-[inset_0_0_0_4px_white,inset_0_0_0_8px_#555]">
        <div className="p-4 min-h-[120px]">
          <TypingText text="PKMN TRAINER RED wants to battle!" />
        </div>
      </div>
    </main>
  );
}