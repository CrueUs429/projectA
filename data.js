const aiTools = [
    {
        category: "디자인",
        name: "Midjourney",
        description: "텍스트 프롬프트로 놀라운 품질의 이미지를 생성합니다.",
        tags: { difficulty: "전문가용", price: "유료" },
        link: "#"
    },
    {
        category: "디자인",
        name: "Canva AI",
        description: "기존 Canva 디자인 템플릿에 AI 기능을 더해 작업을 자동화합니다.",
        tags: { difficulty: "초보자용", price: "부분유료" },
        link: "#"
    },
    {
        category: "글쓰기",
        name: "ChatGPT (GPT-4)",
        description: "대화, 콘텐츠 생성, 번역 등 다양한 언어 작업을 수행합니다.",
        tags: { difficulty: "초보자용", price: "부분유료" },
        link: "#"
    },
    {
        category: "글쓰기",
        name: "Claude 3 Opus",
        description: "긴 문서의 맥락을 정확하게 이해하고 요약하는 데 탁월합니다.",
        tags: { difficulty: "전문가용", price: "유료" },
        link: "#"
    },
    {
        category: "영상 편집",
        name: "Runway Gen-2",
        description: "텍스트나 이미지로부터 고품질 영상을 생성하는 모델입니다.",
        tags: { difficulty: "전문가용", price: "부분유료" },
        link: "#"
    },
    {
        category: "영상 편집",
        name: "Vrew",
        description: "영상 속 음성을 분석해 자동으로 자막을 생성하고 편집점을 찾아줍니다.",
        tags: { difficulty: "초보자용", price: "부분유료" },
        link: "#"
    },
    {
        category: "코딩",
        name: "GitHub Copilot",
        description: "코드 자동 완성, 제안, 디버깅을 도와주는 AI 페어 프로그래머입니다.",
        tags: { difficulty: "전문가용", price: "유료" },
        link: "#"
    },
    {
        category: "코딩",
        name: "Cursor",
        description: "AI 기반으로 코드를 작성하고 수정하는 데 특화된 코드 에디터입니다.",
        tags: { difficulty: "전문가용", price: "무료" },
        link: "#"
    }
];

const todayFreeTool = {
    name: "[Pika] 영상 생성 AI",
    description: "오늘 단 하루, 아이디어를 3D 애니메이션, 영화 스타일 등 다양한 영상으로 만들 수 있는 Pika의 크레딧 150개를 무료로 드립니다!",
    tags: { difficulty: "초보자용", price: "한시적 무료" },
    link: "#"
};

const aiStacks = [
    {
        name: "1인 유튜버를 위한 AI 세트",
        description: "대본(ChatGPT) → 영상(Runway) → 썸네일(Midjourney) → 편집(Adobe AI) 조합으로 혼자서도 채널 운영이 가능합니다.",
        link: "#"
    },
    {
        name: "마케터를 위한 콘텐츠 제작 세트",
        description: "콘텐츠 아이디어(Gemini) → 블로그 글(Claude) → 이미지(Stable Diffusion) → SNS 예약(Buffer AI)으로 업무를 자동화하세요.",
        link: "#"
    },
    {
        name: "개발자 생산성 향상 세트",
        description: "코드 작성(GitHub Copilot) → 문서 검색(Phind) → 코드 리뷰(CodeRabbit) 조합으로 개발 시간을 단축하세요.",
        link: "#"
    }
];

const blogPosts = [
    {
        title: "블로그: 2024년 반드시 써봐야 할 디자인 AI 10선",
        link: "#"
    },
    {
        title: "뉴스: 구글의 새로운 AI 모델, 영상 산업을 어떻게 바꿀까?",
        link: "#"
    },
    {
        title: "팁: ChatGPT 프롬프트, 이렇게 쓰면 효율이 200% 오릅니다.",
        link: "#"
    }
];
