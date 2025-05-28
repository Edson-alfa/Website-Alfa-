function showBio() {
  const profile = document.getElementById("profile");
  profile.classList.remove("hidden");
  profile.classList.add("fade-in");
}

window.onscroll = function () {
  const backTop = document.getElementById("backTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
