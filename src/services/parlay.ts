const awaitVoices = new Promise(
  (done) => (window.speechSynthesis.onvoiceschanged = done)
);

let synth;
let voice;

const getSynth = () => {
  if (!window.speechSynthesis) {
    return Promise.resolve(undefined);
  }

  if (synth) {
    return Promise.resolve(synth);
  }

  return awaitVoices.then(() => {
    synth = window.speechSynthesis;
    const voices = synth.getVoices();

    voice = voices.find((v) => v.lang === "fi-FI");

    return synth;
  });
};

export const speak = (utterance: string): void => {
  getSynth().then((synth) => {
    const msg = new SpeechSynthesisUtterance(utterance);
    msg.lang = "fi";
    msg.pitch = 0;
    msg.voice = voice;
    synth.speak(msg);
  });
};
