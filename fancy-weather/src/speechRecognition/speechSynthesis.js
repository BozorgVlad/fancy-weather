const speak = (text, lang, volume = 0.1) => {
  const message = new SpeechSynthesisUtterance();
  message.lang = lang;
  message.text = text;
  message.volume = volume;
  window.speechSynthesis.speak(message);
};

export default speak;
