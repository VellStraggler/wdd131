let pianoMode = false;

const toggleButton = document.getElementById('togglePiano');
const links = document.querySelectorAll('nav a');

toggleButton.addEventListener('click', () => {
    pianoMode = !pianoMode;
    toggleButton.style.backgroundColor = pianoMode ? 'red' : 'gray';
    toggleButton.setAttribute('aria-pressed', pianoMode ? 'true' : 'false');
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        const note = link.dataset.note;

        // Always show the pressed image first
        if (note === "1") {
            link.style.backgroundImage = "url('left-note-pressed.jpg')";
        } else {
            link.style.backgroundImage = "url('note-pressed.jpg')";
        }

        // Then unpress it shortly after
        setTimeout(() => {
            if (note === "1") {
                link.style.backgroundImage = "url('left-note.jpg')";
            } else {
                link.style.backgroundImage = "url('note.jpg')";
            }
        }, 200);

        // Only play sound and block navigation when piano mode is on
        if (pianoMode) {
            e.preventDefault();
            const audio = new Audio(`notes/note-${note}.wav`);
            audio.play();
        }
    });
});