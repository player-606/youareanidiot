document.getElementById('click-overlay').addEventListener('click', function() {
    this.style.display = 'none';
    const audio = document.getElementById('idiot-audio');
    audio.play().catch(error => console.log("Audio play failed:", error));
});
