const envelope = document.getElementById('envelope');
const flap = document.querySelector('.envelope-flap');
const letter = document.getElementById('letter');
const letterContent = document.getElementById('letterContent');
const song = document.getElementById('song');
const note = document.getElementById('note');
const sheet = document.getElementById('sheet');

const downloadBtn1 = document.getElementById('downloadBtn1');
const downloadBtn2 = document.getElementById('downloadBtn2');
const readAgain = document.getElementById('readAgain');

let opened = false;
let shownDownload = false;

const letterText = `My Dearest, Helga

I couldn’t sleep tonight.
The hours feel longer than usual, and my mind keeps wandering — to us, to the little things, to everything I never quite say out loud.
It’s quiet here, but my thoughts haven’t stopped since the day began.

It’s strange how a single memory can replay itself over and over.
Like how you used to say my name when you were excited, or how you’d talk about your day with that light in your voice.
I still think about those things when the night feels too still — they remind me of a version of us that feels untouched by time.

Lately, I’ve been caught in my own head more than I should be.
Not in a bad way — just... wondering, maybe overthinking a little too much.
Sometimes I worry that one day, someone else might make you laugh the way I used to.
That maybe you’ll find a comfort in someone new, and I’ll slowly fade into a quiet part of your story.
It’s not jealousy, really — it’s fear.
The kind that comes from caring too much, from loving something so deeply that losing it feels unthinkable.

Still, I don’t say it. I just carry it quietly.
Because I don’t want those thoughts to make things heavy between us.
So I write them here instead, where they can live without changing anything.

You’re still the thought that finds its way into everything — songs, random moments, even the way I see the night sky.
I’ve realized that loving you has become part of how I exist; it’s not something I switch off when we say goodbye.

I know we’re both trying — to grow, to stay strong, to believe in what we’ve built.
And even though I sometimes fall into my own doubts, I never stop being grateful for you.
For your patience, your warmth, and the quiet way you make everything feel a little easier just by being there.

So tonight, like every other night I can’t sleep, I’ll think of you —
and hope that somewhere in your world, you still think of me too.

Love,
Reyhan`;

envelope.addEventListener('click', () => {
  if (opened) return;
  opened = true;

  flap.style.transform = 'rotateX(-160deg)';
  note.style.opacity = '0';

  setTimeout(() => {
    envelope.style.transition = 'transform 800ms ease, opacity 600ms ease';
    envelope.style.transform = 'translateY(-180px) scale(0.75) rotate(8deg)';
    envelope.style.opacity = '0';

    letter.classList.add('active');

    // Fade in music
    try {
      song.volume = 0;
      song.play().catch(() => {});
      let fade = setInterval(() => {
        if (song.volume < 1) song.volume += 0.02;
        else clearInterval(fade);
      }, 100);
    } catch (e) {}
  }, 700);

  setTimeout(() => typeWriter(letterText), 1500);
});

function typeWriter(text) {
  let i = 0;
  letterContent.innerHTML = '';
  function type() {
    if (i < text.length) {
      letterContent.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
}

// Show buttons after scroll bottom
sheet.addEventListener('scroll', () => {
  const bottomReached = sheet.scrollTop + sheet.clientHeight >= sheet.scrollHeight - 5;

  if (bottomReached && !shownDownload) {
    shownDownload = true;
    downloadBtn1.classList.add('show');
    downloadBtn2.classList.add('show');
    readAgain.classList.add('show');
  }
});

// Download 1
downloadBtn1.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'award.jpg';
  link.download = 'award.jpg';
  link.click();
});

// Download 2
downloadBtn2.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'photo.jpg';
  link.download = 'photo.jpg';
  link.click();
});

// Read Again
readAgain.addEventListener('click', () => {
  location.reload();
});

// Floating hearts
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '❤️';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '0px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 1200);
