let audio;
let isPranking = false;

function startPrank() {
    audio = document.getElementById('idiotSound');
    audio.volume = 1.0;           // Max volume
    audio.loop = true;            // Ensure looping

    const playPromise = audio.play();

    if (playPromise) {
        playPromise.catch(() => {
            console.log("Waiting for interaction...");
        });
    }

    isPranking = true;

    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1 style="color: #ff0000; animation: shake 0.4s infinite;">YOU ARE AN IDIOT</h1>
        <p style="font-size: 1.6rem; color: #ff3333;">This message will repeat until you give up.</p>
        <button onclick="stopPrank()" class="btn" style="background:#ff0000;color:white;padding:20px 50px;font-size:1.3rem;">I AM NOT AN IDIOT</button>
    `;

    // Rapid color flashing
    setInterval(() => {
        if (isPranking) {
            document.body.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        }
    }, 250);

    // Volume spikes for extra annoyance
    setInterval(() => {
        if (audio && isPranking) {
            audio.volume = 0.85 + Math.random() * 0.15; // between 0.85 and 1.0
        }
    }, 600);
}

function stopPrank() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    isPranking = false;
    document.body.style.background = 'linear-gradient(135deg, #0f0f0f, #1a1a2e)';
    
    // Troll them
    setTimeout(() => {
        alert("😂 Just kidding, you really are an idiot.");
    }, 500);
}
