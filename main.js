<<<<<<< HEAD
let words = document.querySelectorAll('.word');
words.forEach((word) => {
    let letters = word.textContent.split('');
    word.textContent = '';
    letters.forEach((letter) => {

        let span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].computedStyleMap.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";

        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);

    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;


};
changeText();
setInterval(changeText, 3000)


// skill right circle ------------------------------------------

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i=0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

// active menu -----------------------------
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove('active'));
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// sticky navbar----------------------

const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY> 50)
})

// toogke icon navbar??

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist')

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

//parallax //////////////////////////////////////////////


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        }
        else {
            entry.target.classList.remove("show-items")
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));
=======
let words=document.querySelectorAll(".word");words.forEach((e=>{let t=e.textContent.split("");e.textContent="",t.forEach((t=>{let o=document.createElement("span");o.textContent=t,o.className="letter",e.append(o)}))}));let currentWordIndex=0,maxWordIndex=words.length-1;words[currentWordIndex].computedStyleMap.opacity="1";let changeText=()=>{let e=words[currentWordIndex],t=currentWordIndex===maxWordIndex?words[0]:words[currentWordIndex+1];Array.from(e.children).forEach(((e,t)=>{setTimeout((()=>{e.className="letter out"}),80*t)})),t.style.opacity="1",Array.from(t.children).forEach(((e,t)=>{e.className="letter behind",setTimeout((()=>{e.className="letter in"}),340+80*t)})),currentWordIndex=currentWordIndex===maxWordIndex?0:currentWordIndex+1};changeText(),setInterval(changeText,3e3);const circles=document.querySelectorAll(".circle");circles.forEach((e=>{var t=e.getAttribute("data-dots"),o=e.getAttribute("data-percent"),r=Math.floor(t*o/100),c="",l=360/t;for(let e=0;e<t;e++)c+=`<div class="points" style="--i:${e}; --rot:${l}deg"></div>`;e.innerHTML=c;const n=e.querySelectorAll(".points");for(let e=0;e<r;e++)n[e].classList.add("marked")}));let menuLi=document.querySelectorAll("header ul li a"),section=document.querySelectorAll("section");function activeMenu(){let e=section.length;for(;--e&&window.scrollY+97<section[e].offsetTop;);menuLi.forEach((e=>e.classList.remove("active")))}activeMenu(),window.addEventListener("scroll",activeMenu);const header=document.querySelector("header");window.addEventListener("scroll",(function(){header.classList.toggle("sticky",window.scrollY>50)}));let menuIcon=document.querySelector("#menu-icon"),navlist=document.querySelector(".navlist");menuIcon.onclick=()=>{menuIcon.classList.toggle("bx-x"),navlist.classList.toggle("open")},window.onscroll=()=>{menuIcon.classList.remove("bx-x"),navlist.classList.remove("open")};const observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show-items"):e.target.classList.remove("show-items")}))})),scrollScale=document.querySelectorAll(".scroll-scale");scrollScale.forEach((e=>observer.observe(e)));const scrollBottom=document.querySelectorAll(".scroll-bottom");scrollBottom.forEach((e=>observer.observe(e)));const scrollTop=document.querySelectorAll(".scroll-top");scrollTop.forEach((e=>observer.observe(e)));

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Display a loading message or spinner if desired
    // ...
  
    // Submit the form using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          document.getElementById("responseMessage").textContent = response.message;
          document.getElementById("responseMessage").style.display = "block";
          // Optionally, you can reset the form after successful submission
          // document.getElementById("myForm").reset();
        } else {
          // Handle error response if needed
        }
      }
      // Hide the loading message or spinner
      // ...
    };
    
    xhr.send(new FormData(this));
  });
>>>>>>> 138e49ac11f23547b97cb8b7a3f0d9c5a5ff7097
