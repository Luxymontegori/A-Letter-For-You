const envelope = document.getElementById('envelope');
const flap = document.querySelector('.envelope-flap');
const letter = document.getElementById('letter');
const letterContent = document.getElementById('letterContent');
const song = document.getElementById('song');
const note = document.getElementById('note');
const sheet = document.getElementById('sheet');

const downloadBtn1 = document.getElementById('downloadBtn1');
const downloadBtn2 = document.getElementById('downloadBtn2');

let opened = false;
let shownDownload = false;

envelope.addEventListener('click', () => {
  if (opened) return;
  opened = true;

  flap.style.transform = 'rotateX(-160deg)';

  setTimeout(() => {
    envelope.style.transition = 'transform 800ms ease, opacity 600ms ease';
    envelope.style.transform = 'translateY(-180px) scale(0.75) rotate(8deg)';
    envelope.style.opacity = '0';

    letter.classList.add('active');

    try { song.currentTime = 0; song.play().catch(()=>{}); } catch(e) {}
    note.style.opacity = '1';
  }, 700);

  setTimeout(() => {
    letterContent.classList.add('show');
  }, 1500);
});

// 📜 Show buttons after scroll to bottom
sheet.addEventListener('scroll', () => {
  const bottomReached = sheet.scrollTop + sheet.clientHeight >= sheet.scrollHeight - 5;

  if (bottomReached && !shownDownload) {
    shownDownload = true;
    downloadBtn1.classList.add('show');
    downloadBtn2.classList.add('show');
  }
});

// 💾 Button 1 — your first file
downloadBtn1.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'award.jpg';  // ← your first file here
  link.download = 'award.jpg';
  link.click();
});

// 💾 Button 2 — your second file
downloadBtn2.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'photo.jpg';  // ← your second file here
  link.download = 'photo.jpg';
  link.click();
});
