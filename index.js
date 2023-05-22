linkBtn = document.querySelector(".links-btn");
linksUl = document.querySelector(".main-header nav ul");

linkBtn.addEventListener("click", () => {
  linkBtn.classList.toggle("active");
  linksUl.classList.toggle("hidden");
});
