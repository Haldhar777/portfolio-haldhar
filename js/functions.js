window.onload = function () {
  document.body.className += " loaded";
};

const navlink = document.getElementById("navbar");

const toggle = () => {
  navlink.classList.toggle("close");
  if (navlink.style.opacity == "1") {
    navlink.style.opacity = "0";
  } else {
    navlink.style.opacity = "1";
  }
  navlink.style.right = "0px";
  navlink.style.top = "40px";
};

if (window.innerWidth > 950) {
  navlink.style.opacity = "1";
}
