const notes = [
  "C",
  "C#",
  "Db",
  "D",
  "E",
  "F",
  "F#",
  "Gb",
  "G",
  "G#",
  "Ab",
  "A",
  "A#",
  "Bb",
  "B",
];

const patterns = ["up-down", "123-234-345 ...", "1234-2345-3456 ..."];

const noteHtml = document.getElementById("note-span");
const patternHtml = document.getElementById("pattern-span");

noteHtml.innerHTML = notes[Math.floor(Math.random() * notes.length)];
patternHtml.innerHTML = patterns[Math.floor(Math.random() * patterns.length)];
