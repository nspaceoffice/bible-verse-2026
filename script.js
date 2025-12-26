// 성경 말씀 데이터
const bibleVerses = [
    {
        text: "여호와는 나의 목자시니 내게 부족함이 없으리로다",
        ref: "시편 23:1",
        message: "2026년, 주님께서 당신의 모든 필요를 채워주실 것입니다. 부족함 없는 풍성한 한 해가 되길 축복합니다."
    },
    {
        text: "내가 너와 함께하며 네가 어디로 가든지 너를 지키리라",
        ref: "창세기 28:15",
        message: "어디를 가든, 무엇을 하든 하나님이 함께하십니다. 2026년 모든 발걸음에 동행하시는 주님을 경험하세요."
    },
    {
        text: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라",
        ref: "이사야 41:10",
        message: "2026년, 두려움 대신 담대함으로 나아가세요. 전능하신 하나님이 당신과 함께 하십니다."
    },
    {
        text: "범사에 네가 형통하고 강건하기를 네 영혼이 잘됨 같이 내가 원하노라",
        ref: "요한삼서 1:2",
        message: "영혼의 건강과 함께 모든 일에 형통함이 있기를! 2026년 전인적 축복을 누리세요."
    },
    {
        text: "항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라",
        ref: "데살로니가전서 5:16-18",
        message: "기쁨, 기도, 감사 - 이 세 가지가 2026년 당신의 삶을 변화시킬 것입니다."
    },
    {
        text: "내가 세상 끝날까지 너희와 항상 함께 있으리라",
        ref: "마태복음 28:20",
        message: "2026년 365일, 매 순간 예수님이 함께하십니다. 결코 혼자가 아닙니다."
    },
    {
        text: "여호와를 기뻐하라 그가 네 마음의 소원을 네게 이루어 주시리로다",
        ref: "시편 37:4",
        message: "하나님 안에서 기뻐할 때, 마음의 소원이 이루어집니다. 2026년 소망이 현실이 되길 축복합니다."
    },
    {
        text: "너를 항상 인도하며 네 영혼을 풍족하게 하리라",
        ref: "이사야 58:11",
        message: "2026년, 하나님의 인도하심을 따라가세요. 풍족하고 충만한 한 해가 약속되어 있습니다."
    },
    {
        text: "내가 너를 강하게 하리라 참으로 너를 도와 주리라",
        ref: "이사야 41:10",
        message: "연약할 때 강함 주시고, 어려울 때 도우시는 하나님! 2026년 능력을 경험하세요."
    },
    {
        text: "여호와를 경외하는 것이 지혜의 근본이라",
        ref: "잠언 9:10",
        message: "2026년, 하나님을 경외함으로 참된 지혜를 얻으세요. 모든 결정에 지혜가 함께하길 축복합니다."
    },
    {
        text: "새 힘을 얻으리니 독수리가 날개치며 올라감 같을 것이요",
        ref: "이사야 40:31",
        message: "지치지 않는 새 힘! 2026년 독수리처럼 높이 비상하는 한 해가 되길 축복합니다."
    },
    {
        text: "주께서 이 백성에게 복에 복을 더하사 너희와 너희 자손에게 주시기를 원하노라",
        ref: "시편 115:14",
        message: "복에 복을 더하시는 하나님! 2026년 당신과 가정에 넘치는 축복이 임하기를 기도합니다."
    },
    {
        text: "보라 내가 새 일을 행하리니 이제 나타낼 것이라",
        ref: "이사야 43:19",
        message: "2026년, 하나님의 새로운 역사가 시작됩니다. 기대와 설렘으로 새 일을 맞이하세요!"
    },
    {
        text: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라",
        ref: "요한복음 14:27",
        message: "세상이 줄 수 없는 참 평안! 2026년 예수님의 평화가 당신의 마음을 지키기를 축복합니다."
    },
    {
        text: "네 시작은 미약하였으나 네 나중은 심히 창대하리라",
        ref: "욥기 8:7",
        message: "작은 시작을 두려워하지 마세요. 2026년 끝에는 창대한 열매가 기다리고 있습니다."
    },
    {
        text: "할렐루야 내 영혼아 여호와를 찬양하라",
        ref: "시편 146:1",
        message: "찬양으로 시작하는 2026년! 모든 날이 감사와 기쁨으로 채워지길 축복합니다."
    },
    {
        text: "주 안에서 항상 기뻐하라 내가 다시 말하노니 기뻐하라",
        ref: "빌립보서 4:4",
        message: "환경에 상관없이 주 안에서 기뻐하세요. 2026년 변치 않는 기쁨이 함께하길 축복합니다."
    },
    {
        text: "믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거니",
        ref: "히브리서 11:1",
        message: "2026년, 믿음의 눈으로 바라보세요. 보이지 않는 것들이 현실이 되는 기적을 경험하게 될 것입니다."
    },
    {
        text: "내가 산을 향하여 눈을 들리라 나의 도움이 어디서 올까 나의 도움은 천지를 지으신 여호와에게서로다",
        ref: "시편 121:1-2",
        message: "2026년의 모든 도움은 하나님께로부터 옵니다. 그분을 바라보며 담대히 나아가세요!"
    },
    {
        text: "너희가 내 안에 거하고 내 말이 너희 안에 거하면 무엇이든지 원하는 대로 구하라 그리하면 이루리라",
        ref: "요한복음 15:7",
        message: "말씀 안에 거하는 2026년! 구하는 것마다 응답받는 축복을 누리세요."
    },
    {
        text: "진실로 진실로 너희에게 이르노니 한 알의 밀이 땅에 떨어져 죽지 아니하면 한 알 그대로 있고 죽으면 많은 열매를 맺느니라",
        ref: "요한복음 12:24",
        message: "2026년, 자기를 내려놓을 때 풍성한 열매가 맺힙니다. 희생이 축복의 씨앗이 되길 기도합니다."
    },
    {
        text: "사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라",
        ref: "잠언 16:9",
        message: "계획하되 인도하심을 따르세요. 2026년 하나님의 선하신 길로 이끌리기를 축복합니다."
    },
    {
        text: "오직 성령의 열매는 사랑과 희락과 화평과 오래 참음과 자비와 양선과 충성과 온유와 절제니",
        ref: "갈라디아서 5:22-23",
        message: "2026년, 성령의 아홉 가지 열매가 당신의 삶에 풍성히 맺히기를 축복합니다."
    },
    {
        text: "나의 힘이 되신 여호와여 내가 주를 사랑하나이다",
        ref: "시편 18:1",
        message: "주님은 우리의 힘입니다. 2026년 그 힘을 의지하며 사랑으로 나아가세요."
    },
    {
        text: "여호와의 자비와 긍휼이 무궁하시도다 아침마다 새로우니",
        ref: "예레미야애가 3:22-23",
        message: "매일 아침 새로운 은혜! 2026년 365개의 새 아침마다 하나님의 자비를 경험하세요."
    },
    {
        text: "너희 짐을 여호와께 맡기라 그가 너희를 붙드시고 의인의 요동함을 영원히 허락하지 아니하시리로다",
        ref: "시편 55:22",
        message: "무거운 짐을 내려놓으세요. 2026년 하나님께서 당신을 붙들어 주실 것입니다."
    },
    {
        text: "하나님의 나라는 먹는 것과 마시는 것이 아니요 오직 성령 안에 있는 의와 평강과 희락이라",
        ref: "로마서 14:17",
        message: "2026년, 진정한 풍요를 누리세요. 의와 평강과 희락이 당신의 것입니다."
    },
    {
        text: "모든 일에 기도와 간구로 너희 구할 것을 감사함으로 하나님께 아뢰라",
        ref: "빌립보서 4:6",
        message: "감사하며 기도하는 2026년! 염려 대신 평강이 마음을 지키기를 축복합니다."
    },
    {
        text: "내가 선한 싸움을 싸우고 나의 달려갈 길을 마치고 믿음을 지켰으니",
        ref: "디모데후서 4:7",
        message: "2026년 한 해를 달려갈 때, 끝까지 믿음을 지키며 승리하기를 축복합니다."
    },
    {
        text: "주 예수 그리스도의 은혜와 하나님의 사랑과 성령의 교통하심이 너희 무리와 함께 있을지어다",
        ref: "고린도후서 13:13",
        message: "삼위일체 하나님의 풍성한 임재! 2026년 은혜, 사랑, 교제가 충만하기를 축복합니다."
    }
];

// DOM 요소
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('retry-btn');
const saveImageBtn = document.getElementById('save-image-btn');
const shareUrlBtn = document.getElementById('share-url-btn');
const verseText = document.getElementById('verse-text');
const verseRef = document.getElementById('verse-ref');
const blessingMessage = document.getElementById('blessing-message');
const cardStack = document.querySelector('.card-stack');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const userNameInput = document.getElementById('user-name');
const resultName = document.getElementById('result-name');
const todayVisitors = document.getElementById('today-visitors');
const totalVisitors = document.getElementById('total-visitors');

// 이미지 카드 요소
const imageCard = document.getElementById('image-card');
const imageVerseText = document.getElementById('image-verse-text');
const imageVerseRef = document.getElementById('image-verse-ref');
const imageBlessing = document.getElementById('image-blessing');
const imageUserName = document.getElementById('image-user-name');

// 현재 선택된 말씀
let currentVerse = null;
let currentUserName = '';

// 방문자 카운터 초기화
function initVisitorCounter() {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const storedDate = localStorage.getItem('visitorDate');
    let todayCount = parseInt(localStorage.getItem('todayVisitors')) || 0;
    let totalCount = parseInt(localStorage.getItem('totalVisitors')) || 0;

    // 날짜가 바뀌면 오늘 방문자 초기화
    if (storedDate !== today) {
        todayCount = 0;
        localStorage.setItem('visitorDate', today);
    }

    // 새 방문자 카운트 (세션당 1회)
    if (!sessionStorage.getItem('visited')) {
        todayCount++;
        totalCount++;
        localStorage.setItem('todayVisitors', todayCount);
        localStorage.setItem('totalVisitors', totalCount);
        sessionStorage.setItem('visited', 'true');
    }

    // 화면에 표시
    todayVisitors.textContent = todayCount.toLocaleString();
    totalVisitors.textContent = totalCount.toLocaleString();
}

// 랜덤 말씀 선택
function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    return bibleVerses[randomIndex];
}

// 화면 전환
function showScreen(screenToShow) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    screenToShow.classList.add('active');
}

// 토스트 메시지 표시
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// 말씀 뽑기 실행
function pickVerse() {
    // 이름 가져오기
    currentUserName = userNameInput.value.trim();

    if (!currentUserName) {
        showToast('이름을 입력해주세요!');
        userNameInput.focus();
        return;
    }

    // 카드 애니메이션
    cardStack.classList.add('card-flip');

    setTimeout(() => {
        currentVerse = getRandomVerse();

        // 화면에 결과 표시
        verseText.textContent = `"${currentVerse.text}"`;
        verseRef.textContent = currentVerse.ref;
        blessingMessage.textContent = currentVerse.message;
        resultName.textContent = `${currentUserName}님의`;

        // 이미지 카드에도 데이터 설정
        imageVerseText.textContent = currentVerse.text;
        imageVerseRef.textContent = currentVerse.ref;
        imageBlessing.textContent = currentVerse.message;
        imageUserName.textContent = `${currentUserName}님의`;

        // 화면 전환
        showScreen(resultScreen);
        cardStack.classList.remove('card-flip');
    }, 600);
}

// 다시 뽑기
function retry() {
    showScreen(startScreen);
    setTimeout(() => {
        pickVerse();
    }, 300);
}

// 이미지 저장하기
async function saveAsImage() {
    if (!currentVerse) return;

    try {
        // 버튼 로딩 상태
        saveImageBtn.classList.add('loading');
        saveImageBtn.disabled = true;

        // 이미지 카드를 화면에 잠시 보이게 함 (렌더링을 위해)
        const imageCardEl = document.querySelector('.image-card');
        imageCard.style.left = '0';
        imageCard.style.opacity = '0';

        // 잠시 대기 (폰트 로딩 등)
        await new Promise(resolve => setTimeout(resolve, 100));

        // html2canvas로 캡처
        const canvas = await html2canvas(imageCardEl, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            logging: false
        });

        // 다시 숨기기
        imageCard.style.left = '-9999px';
        imageCard.style.opacity = '1';

        // 이미지 다운로드
        const link = document.createElement('a');
        const fileName = `2026_${currentUserName}_말씀_${currentVerse.ref.replace(/\s/g, '_')}.png`;
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();

        showToast('이미지가 저장되었습니다!');

    } catch (error) {
        console.error('이미지 저장 실패:', error);
        showToast('이미지 저장에 실패했습니다.');
    } finally {
        saveImageBtn.classList.remove('loading');
        saveImageBtn.disabled = false;
    }
}

// URL 공유하기 (친구에게 보내기)
async function shareUrl() {
    const shareText = `2026년 성경말씀 뽑기\n나도 말씀 뽑아보기!`;
    const shareUrl = window.location.href;

    // Web Share API 지원 확인
    if (navigator.share) {
        try {
            await navigator.share({
                title: '2026 성경말씀 뽑기',
                text: shareText,
                url: shareUrl
            });
        } catch (err) {
            if (err.name !== 'AbortError') {
                // 공유 취소가 아닌 경우 URL 복사로 대체
                copyToClipboard(shareUrl);
            }
        }
    } else {
        // Web Share API 미지원 시 클립보드 복사
        copyToClipboard(shareUrl);
    }
}

// 클립보드 복사
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('링크가 복사되었습니다!');
    }).catch(err => {
        // 폴백
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('링크가 복사되었습니다!');
    });
}

// 엔터키로 말씀 뽑기
function handleEnterKey(e) {
    if (e.key === 'Enter') {
        pickVerse();
    }
}

// 이벤트 리스너 등록
startBtn.addEventListener('click', pickVerse);
retryBtn.addEventListener('click', retry);
saveImageBtn.addEventListener('click', saveAsImage);
shareUrlBtn.addEventListener('click', shareUrl);
userNameInput.addEventListener('keypress', handleEnterKey);

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    initVisitorCounter();
    console.log('2026 성경말씀 뽑기 사이트가 준비되었습니다!');
});
