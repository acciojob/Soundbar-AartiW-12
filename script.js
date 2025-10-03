//your JS code here. If required.
const sound_btn = document.querySelectorAll(".btn");

const sounds = ['applause','boo','gasp','tada','victory','wrong']
sounds.forEach((sound) => {
	const audio = document.createElement("audio");
	audio.id =sound;
	audio.src = `./sounds/${sound}.mp3`;
	audio.preload = "auto";
	document.body.appendChild(audio)
})

sound_btn.forEach((btn) => {
	btn.addEventListener("click" , ()=> {
		stopSounds();
		const soundId = btn.textContent.trim();
		document.getElementById(soundId).play();
	})
})

document.querySelector(".stop").addEventListener("click",stopSounds)

function stopSounds() {
	sounds.forEach(sound => {
		const audio = document.getElementById(sound);
		audio.pause();
		audio.currentTime = 0;
	})
}