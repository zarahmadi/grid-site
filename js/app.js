//varaible
const navbar = document.querySelector(".navbar");
const sidbarBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const navbarBtn = document.querySelector(".nav-btn");
const date =document.getElementById("date")

//eventlistener
window.addEventListener("scroll", navbarFixed);
sidbarBtn.addEventListener("click", closeSidebar);
navbarBtn.addEventListener("click", openSidebar);

//function
function navbarFixed() {
  if (window.scrollY > 80) {
    navbar.classList.add("nav-fixed");
  } else {
    navbar.classList.remove("nav-fixed");
  }
}

function closeSidebar() {
  sidebar.classList.remove("show-sidebar");
}

function openSidebar() {
  sidebar.classList.add("show-sidebar");
}

//add now date in HYML

date.innerHTML=new Date().getFullYear();