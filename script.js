/* =====================================
   LOADING SCREEN
===================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 1000);

    }, 1800);

});

/* =====================================
   MUSIC
===================================== */

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        playing = true;

        musicBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

    } else {

        music.pause();

        playing = false;

        musicBtn.innerHTML =
            '<i class="fa-solid fa-play"></i>';

    }

});

/* =====================================
   TYPING EFFECT
===================================== */

const message = `

Hai nilaaaaa...

Terima kasih karena pernah hadir
dan menjadi salah satu teman
yang paling berarti dalam my life.

Website sederhana ini mungkin
tidak seberapa.

Namun setiap baris kode
dibuat dengan tulus(aseli rek).

Semoga setiap langkahmu
selalu dipenuhi kebahagiaan.

Tetaplah tersenyum,
karena senyummu begitu indah.

💜

`;

const typingTarget =
document.getElementById("typingText");

let typingIndex = 0;

function typingEffect(){

    if(typingIndex < message.length){

        typingTarget.innerHTML +=
        message.charAt(typingIndex);

        typingIndex++;

        setTimeout(typingEffect,45);

    }

}

setTimeout(typingEffect,2200);

/* =====================================
   LOVE COUNTER
===================================== */

// GANTI TANGGAL DI SINI
const startDate = new Date("2026-04-07T13:13:00");

function updateLoveCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

setInterval(updateLoveCounter,1000);

updateLoveCounter();
/* =====================================
   POPUP
===================================== */

const popup = document.getElementById("popup");

const openPopup =
document.getElementById("showLove");

const closePopup =
document.getElementById("closePopup");

openPopup.addEventListener("click",()=>{

    popup.classList.add("show");

    createConfetti();

});

closePopup.addEventListener("click",()=>{

    popup.classList.remove("show");

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("show");

    }

});

/* =====================================
   ENVELOPE
===================================== */

const envelope =
document.getElementById("envelope");

envelope.addEventListener("click",()=>{

    envelope.classList.toggle("open");

});

/* =====================================
   LIGHTBOX
===================================== */

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

document.querySelectorAll(".card img")
.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src=img.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

/* =====================================
   SCROLL ANIMATION
===================================== */

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

document.querySelectorAll(".section")
.forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});

/* =====================================
   CURSOR GLOW
===================================== */

document.addEventListener("mousemove",(e)=>{

document.body.style.setProperty("--x",e.clientX+"px");

document.body.style.setProperty("--y",e.clientY+"px");

});

/* =====================================
   HEART CLICK EFFECT
===================================== */

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💜";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize=
(Math.random()*18+18)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},4000);

});

/* =====================================
   HERO BUTTON
===================================== */

const heroBtn =
document.getElementById("loveBtn");

heroBtn.addEventListener("click",()=>{

document.querySelector(".letter")
.scrollIntoView({

behavior:"smooth"

});

});

/* =====================================
   MUSIC AUTOPLAY
===================================== */

document.addEventListener("click",()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML=
'<i class="fa-solid fa-pause"></i>';

}

},{once:true});
/* =====================================
   CONFETTI EFFECT
===================================== */

function createConfetti() {

    const colors = [
        "#ffffff",
        "#d8b4fe",
        "#c084fc",
        "#a855f7",
        "#f9a8d4",
        "#f472b6"
    ];

    for (let i = 0; i < 180; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-20px";
        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];
        confetti.style.pointerEvents = "none";
        confetti.style.borderRadius =
            Math.random() > .5 ? "50%" : "2px";
        confetti.style.zIndex = "999999";

        const duration = Math.random() * 3 + 3;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(${window.innerHeight + 100}px) rotate(${Math.random()*720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, duration * 1000);

    }

}

/* =====================================
   FLOATING HEARTS
===================================== */

function autoHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        Math.random() > .5 ? "💜" : "❤️";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.bottom = "-30px";

    heart.style.position = "fixed";

    heart.style.fontSize =
        (Math.random() * 18 + 18) + "px";

    document.body.appendChild(heart);

    heart.animate(

        [
            {
                transform: "translateY(0)",
                opacity: 1
            },

            {
                transform:
                    "translateY(-110vh)",
                opacity: 0
            }

        ],

        {

            duration:
                Math.random() * 4000 + 5000,

            easing: "linear"

        }

    );

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(autoHeart, 900);

/* =====================================
   SHOOTING STAR
===================================== */

function shootingStar() {

    const star = document.createElement("div");

    star.style.position = "fixed";
    star.style.width = "180px";
    star.style.height = "2px";

    star.style.background =
        "linear-gradient(to right, white, transparent)";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top =
        Math.random() * 250 + "px";

    star.style.transform =
        "rotate(-35deg)";

    star.style.pointerEvents = "none";

    star.style.zIndex = "999";

    document.body.appendChild(star);

    star.animate(

        [

            {

                transform:
                    "translate(0,0) rotate(-35deg)",

                opacity: 1

            },

            {

                transform:
                    "translate(-700px,350px) rotate(-35deg)",

                opacity: 0

            }

        ],

        {

            duration: 1400,

            easing: "ease-out"

        }

    );

    setTimeout(() => {

        star.remove();

    }, 1500);

}

setInterval(shootingStar, 9000);

/* =====================================
   RANDOM GLOW HERO
===================================== */

setInterval(() => {

    document.querySelector(".hero span")
        .animate(

            [

                {

                    textShadow:
                        "0 0 10px #ffffff"

                },

                {

                    textShadow:
                        "0 0 35px #d8b4fe"

                },

                {

                    textShadow:
                        "0 0 10px #ffffff"

                }

            ],

            {

                duration: 1500

            }

        );

}, 2500);

/* =====================================
   HERO BUTTON PULSE
===================================== */

setInterval(() => {

    heroBtn.animate(

        [

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.08)"

            },

            {

                transform: "scale(1)"

            }

        ],

        {

            duration: 1000

        }

    );

}, 3500);

/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log("%cUntuk Rosalinda 💜",
"font-size:26px;color:#c084fc;font-weight:bold;");

console.log("%cWebsite dibuat dengan kegabutan temanmu ini ❤️, tapi tulus kok 😘",
"font-size:16px;color:#ffffff;");