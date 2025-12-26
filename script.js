// Google Apps Script 웹앱 URL (설정 필요)
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

// 성경 말씀 데이터
const bibleVerses = [
    { text: "여호와는 나의 목자시니 내게 부족함이 없으리로다", ref: "시편 23:1" },
    { text: "내가 너와 함께하며 네가 어디로 가든지 너를 지키리라", ref: "창세기 28:15" },
    { text: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라", ref: "이사야 41:10" },
    { text: "범사에 네가 형통하고 강건하기를 네 영혼이 잘됨 같이 내가 원하노라", ref: "요한삼서 1:2" },
    { text: "항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라", ref: "데살로니가전서 5:16-18" },
    { text: "내가 세상 끝날까지 너희와 항상 함께 있으리라", ref: "마태복음 28:20" },
    { text: "여호와를 기뻐하라 그가 네 마음의 소원을 네게 이루어 주시리로다", ref: "시편 37:4" },
    { text: "너를 항상 인도하며 네 영혼을 풍족하게 하리라", ref: "이사야 58:11" },
    { text: "내가 너를 강하게 하리라 참으로 너를 도와 주리라", ref: "이사야 41:10" },
    { text: "여호와를 경외하는 것이 지혜의 근본이라", ref: "잠언 9:10" },
    { text: "새 힘을 얻으리니 독수리가 날개치며 올라감 같을 것이요", ref: "이사야 40:31" },
    { text: "주께서 이 백성에게 복에 복을 더하사 너희와 너희 자손에게 주시기를 원하노라", ref: "시편 115:14" },
    { text: "보라 내가 새 일을 행하리니 이제 나타낼 것이라", ref: "이사야 43:19" },
    { text: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라", ref: "요한복음 14:27" },
    { text: "네 시작은 미약하였으나 네 나중은 심히 창대하리라", ref: "욥기 8:7" },
    { text: "할렐루야 내 영혼아 여호와를 찬양하라", ref: "시편 146:1" },
    { text: "주 안에서 항상 기뻐하라 내가 다시 말하노니 기뻐하라", ref: "빌립보서 4:4" },
    { text: "믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거니", ref: "히브리서 11:1" },
    { text: "내가 산을 향하여 눈을 들리라 나의 도움이 어디서 올까 나의 도움은 천지를 지으신 여호와에게서로다", ref: "시편 121:1-2" },
    { text: "너희가 내 안에 거하고 내 말이 너희 안에 거하면 무엇이든지 원하는 대로 구하라 그리하면 이루리라", ref: "요한복음 15:7" },
    { text: "진실로 진실로 너희에게 이르노니 한 알의 밀이 땅에 떨어져 죽지 아니하면 한 알 그대로 있고 죽으면 많은 열매를 맺느니라", ref: "요한복음 12:24" },
    { text: "사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라", ref: "잠언 16:9" },
    { text: "오직 성령의 열매는 사랑과 희락과 화평과 오래 참음과 자비와 양선과 충성과 온유와 절제니", ref: "갈라디아서 5:22-23" },
    { text: "나의 힘이 되신 여호와여 내가 주를 사랑하나이다", ref: "시편 18:1" },
    { text: "여호와의 자비와 긍휼이 무궁하시도다 아침마다 새로우니", ref: "예레미야애가 3:22-23" },
    { text: "너희 짐을 여호와께 맡기라 그가 너희를 붙드시고 의인의 요동함을 영원히 허락하지 아니하시리로다", ref: "시편 55:22" },
    { text: "하나님의 나라는 먹는 것과 마시는 것이 아니요 오직 성령 안에 있는 의와 평강과 희락이라", ref: "로마서 14:17" },
    { text: "모든 일에 기도와 간구로 너희 구할 것을 감사함으로 하나님께 아뢰라", ref: "빌립보서 4:6" },
    { text: "내가 선한 싸움을 싸우고 나의 달려갈 길을 마치고 믿음을 지켰으니", ref: "디모데후서 4:7" },
    { text: "주 예수 그리스도의 은혜와 하나님의 사랑과 성령의 교통하심이 너희 무리와 함께 있을지어다", ref: "고린도후서 13:13" }
];

// DOM 요소
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('retry-btn');
const saveImageBtn = document.getElementById('save-image-btn');
const shareFacebookBtn = document.getElementById('share-facebook');
const shareInstagramBtn = document.getElementById('share-instagram');
const shareCopyBtn = document.getElementById('share-copy');
const verseText = document.getElementById('verse-text');
const verseRef = document.getElementById('verse-ref');
const cardStack = document.querySelector('.card-stack');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const userNameInput = document.getElementById('user-name');
const resultName = document.getElementById('result-name');

// 이미지 카드 요소
const imageCard = document.getElementById('image-card');
const imageVerseText = document.getElementById('image-verse-text');
const imageVerseRef = document.getElementById('image-verse-ref');
const imageUserName = document.getElementById('image-user-name');

// 현재 선택된 말씀
let currentVerse = null;
let currentUserName = '';

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

// 구글 스프레드시트에 데이터 저장
async function saveToGoogleSheet(name, verse, ref) {
    if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        console.log('Google Script URL not configured');
        return;
    }

    try {
        const data = {
            timestamp: new Date().toISOString(),
            name: name,
            verse: verse,
            ref: ref
        };

        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        console.log('Data saved to Google Sheet');
    } catch (error) {
        console.error('Error saving to Google Sheet:', error);
    }
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
    if (cardStack) {
        cardStack.classList.add('card-flip');
    }

    setTimeout(() => {
        currentVerse = getRandomVerse();

        // 화면에 결과 표시
        verseText.textContent = `"${currentVerse.text}"`;
        verseRef.textContent = currentVerse.ref;
        resultName.textContent = `${currentUserName}님의`;

        // 이미지 카드에도 데이터 설정
        imageVerseText.textContent = currentVerse.text;
        imageVerseRef.textContent = currentVerse.ref;
        imageUserName.textContent = `${currentUserName}님의`;

        // 구글 스프레드시트에 저장
        saveToGoogleSheet(currentUserName, currentVerse.text, currentVerse.ref);

        // 화면 전환
        showScreen(resultScreen);
        if (cardStack) {
            cardStack.classList.remove('card-flip');
        }
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
        await new Promise(resolve => setTimeout(resolve, 200));

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

// 페이스북 공유
function shareFacebook() {
    const shareUrl = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
    showToast('페이스북으로 공유합니다!');
}

// 인스타그램 DM 공유 (이미지 저장 후 인스타그램 앱으로 이동)
function shareInstagram() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // 먼저 이미지를 저장하도록 안내
        showToast('이미지를 저장 후 인스타그램 DM에서 공유하세요!');

        // 이미지 저장 실행
        setTimeout(() => {
            saveAsImage();
        }, 500);

        // 인스타그램 앱 열기
        setTimeout(() => {
            window.location.href = 'instagram://direct-inbox';
        }, 2000);
    } else {
        // PC에서는 이미지 저장 안내
        showToast('이미지를 저장 후 인스타그램에서 공유하세요!');
        saveAsImage();
    }
}

// 링크 복사
function shareCopyLink() {
    copyToClipboard(window.location.href);
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
shareFacebookBtn.addEventListener('click', shareFacebook);
shareInstagramBtn.addEventListener('click', shareInstagram);
shareCopyBtn.addEventListener('click', shareCopyLink);
userNameInput.addEventListener('keypress', handleEnterKey);

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    console.log('2026 성경말씀 뽑기 사이트가 준비되었습니다!');
});
