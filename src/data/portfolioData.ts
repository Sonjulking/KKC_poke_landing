export interface PortfolioItem {
  title: string;
  desc: string;
  stack: {
    frontend?: string;
    backend?: string;
    DB?: string;
    language?: string;
  };
  features: string[];
  url?: string;
  githubUrl?: string;
  notionUrl?: string;
  hp?: number;
  maxHp?: number;
  link?: string; // Optional legacy support
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "바이탈플랫폼 (바이오커넥트)",
    desc: "회원관리 및 생체정보 시각화 프로젝트",
    stack: {frontend: "React", backend: "Spring Boot", DB: "MySQL"},
    features: ["'바이탈트래커' 기기 사용자의 회원 관리", "'바이탈트래커' 기기 에서 수집한 생체정보 시각화"],
    notionUrl: "https://www.notion.so/27842709847c80ed8eb1e10309023a53?source=copy_link#27e42709847c809095e5dfa49cea3786"
  },
  {
    title: "로그 수집 및 모니터링 시스템 (바이오커넥트)",
    desc: "분산된 서버 환경의 로그를 중앙에서 수집하고 시각화하여 모니터링 효율성 증대를 위한 프로젝트",
    stack: {frontend: "Kibana(Dashboard)", backend: "Elasticsearch, Filebeat, Logstash"},
    features: ["기기나, 서버별 로그 수집", "로그 분석을 위한 대시보드 구축"],
    notionUrl: "https://www.notion.so/27842709847c80ed8eb1e10309023a53?source=copy_link#27e42709847c809095e5dfa49cea3786"
  },
  {
    title: "인생겜컷 (KOSTA Final-PROJECT)",
    desc: "게임 클립 영상 공유를 통한 유저간 소통 원활, 자신만의 게임 영상 아카이브 형성을 위한 프로젝트",
    stack: {frontend: "React", backend: "SpringBoot", DB: "MySQL"},
    features: ["게시글 및 댓글 CRUD", "영상 업로드 및 시청"],
    url: "https://www.gamecut.net/",
    githubUrl: "https://github.com/Sonjulking/GameCut_final_backend",
    notionUrl: "https://www.notion.so/27842709847c80ed8eb1e10309023a53?source=copy_link#27842709847c80909c2de04b662e6518"

  },
  {
    title: "ColorGram (KOSTA MINI-PROJECT)",
    desc: "음악시각화 음악플레이어 프로젝트 ",
    stack: {language: "Java, Java Fx"},
    features: ["음악 플레이어", "음악 시각화 및 정렬"],
    githubUrl: "https://github.com/Sonjulking/ColorGram",
    notionUrl: "https://www.notion.so/27842709847c80ed8eb1e10309023a53?source=copy_link#27842709847c801188ffd8e78cf3f7cf"
  },
  {
    title: "HappyDelivery (Discord Music Bot)",
    desc: "디스코드 음악 봇 프로젝트",
    stack: {backend: "SpringBoot"},
    features: ["음악 재생기능", "음악 재생목록 저장 기능", "음악 재생목록 셔플 기능"],
    githubUrl: "https://github.com/Sonjulking/discord_bot_public",
    notionUrl: "https://www.notion.so/27842709847c80ed8eb1e10309023a53?source=copy_link#28c42709847c80b8af6feb8cac01c4dc"
  },
  {
    title: "EGG (개인 프로젝트)",
    desc: "발로란트 유저들을 위한 포지션 성향(VBTI) 분석, 추천 및 프로게이머 장비 통계 제공 웹 프로젝트",
    stack: {frontend: "Thymeleaf", backend: "SpringBoot"},
    features: ["Image Optimization", "Code Minification", "Fast Build"],
    url: "http://www.valorant-egg.com/",
    githubUrl: "https://github.com/Sonjulking/vware",
    notionUrl: "https://www.notion.so/27842709847c80ed8eb1e10309023a53?source=copy_link#27842709847c80cd9a58cf47741f087c"
  },
];
