window.onload = function () {
  document.body.className += " loaded";
};

const navlink = document.getElementById("navbar");

const toggle = () => {
  navlink.classList.toggle("close");
};
