let nav = document.querySelector("nav");
const burger = document.querySelector(".burger");


const scrollNav = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    nav.style.backgroundColor = "";
  }
};

const parallax = () =>{
  const distance = window.scrollY;
  
  document.querySelector(".One").style.transform = `translateY(${
    distance * -1.5
  }px)`;
  document.querySelector(".headerBg").style.transform = `translateY(${
    distance * -0.3
  }px)`;
  document.querySelector(".logo").style.transform = `translateY(${
    distance * +0.4
  }px)`;
}

const openBurger = (event) =>{
  document.querySelector("nav").style.display = "none";
  document.querySelector(".One").style.display = "none";
  document.querySelector(".Two").style.display = "none";
  document.querySelector(".Three").style.display = "none";
  document.querySelector("footer").style.display = "none";
  document.querySelector(".mobile").style.display ="flex";
}


burger.addEventListener("click",openBurger)

window.onscroll = function () {
  scrollNav();
 
  parallax();
};
