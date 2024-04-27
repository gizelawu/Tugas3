const title = document.getElementById("title");
const container = document.getElementById("container");
const image = document.getElementById("image");
const result = document.getElementById("result");
const choice = document.getElementById("choice");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  title.textContent = "Anda Berbohong!";
  image.src = "assets/teknisi.png";
  container.classList.replace("bg-[#DBDBDB]", "bg-[#E12E2E]");
  result.textContent = "Anda adalah seorang Teknisi";
  choice.classList.replace("flex", "hidden");
});

noBtn.addEventListener("click", () => {
  title.textContent = "Anda Benar!";
  image.src = "assets/mahasiswa.png";
  container.classList.replace("bg-[#DBDBDB]", "bg-[#6FD240]");
  result.textContent = "Anda adalah seorang Mahasiswa";
  choice.classList.replace("flex", "hidden");
});
