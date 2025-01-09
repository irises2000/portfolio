// 로컬 이미지 경로 설정
const images = [];

// 랜덤 이미지 선택
function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

// 배경 이미지를 변경하는 함수
function changeImage() {
  const backgroundContainer = document.querySelector(".background-container");
  backgroundContainer.style.backgroundImage = `url('${getRandomImage()}')`;
}

// 페이지 로드 시 랜덤 이미지로 배경 설정
window.onload = changeImage;
