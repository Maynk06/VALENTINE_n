let count = 0;
const gifs = [
    "gif/gif1.gif",
    "gif/gif2.gif",
    "gif/gif3.gif",
    "gif/gif4.gif",
    "gif/gif5.gif",
    "gif/gif6.gif"
];

const texts = [
    "Will You be my Valentine?🌹",
    "Soch le dobara😒",
    "pit jaegii😭",
    "itna maarunga naa😡",
    "Last chance",
    "Will You be my Valentine?🌹huhhh"
];

function noClick() {
    count++;
    
    // Change GIF
    if (count < gifs.length) {
        document.getElementById("gif").src = gifs[count];
    }

    // Change Text
    if (count < texts.length) {
        document.getElementById("text").innerHTML = texts[count];
    }

    // Hide NO button on last attempt
    if (count === 5) {
        document.getElementById("no").style.display = "none";
    }
}

function yesClick() {
    document.getElementById("gif").src = "gif/happy.webp";
    document.getElementById("text").innerHTML = "Happy Valentine Day Jaanuuu💗💍";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";

    if (!document.getElementById("extra-message")) {
        const para = document.createElement("p");
        para.id = "extra-message";
        para.innerHTML = "I am the luckiest guy to have you in my life. I love youu soo much babyy!🌹💋<br>Life feels perfect when you’re with me.💞";
        
        para.style.textAlign = "center";
        para.style.fontSize = "clamp(1rem, 4vw, 1.4rem)";
        para.style.marginTop = "20px";
        para.style.color = "#d63384";
        para.style.lineHeight = "1.5";
        
        document.querySelector(".out-box").appendChild(para);
    }
}

// Heart Animation logic
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const emojis = ['❤️', '💖', '💝', '🌸', '🌹', '✨', '💕', '🥰', '🎈', '💘', '🌷'];
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px"; 
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 
    heart.style.opacity = Math.random() * 0.5 + 0.5; 

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);