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

const exercises = [
  "1234",
  "1243",
  "1324",
  "1342",
  "1423",
  "1432",
  "2134",
  "2143",
  "2314",
  "2341",
  "2413",
  "2431",
  "3124",
  "3142",
  "3214",
  "3241",
  "3412",
  "3421",
  "4123",
  "4132",
  "4213",
  "4231",
  "4321",
  "4312",
];

const noteHtml = document.getElementById("note-span");
const patternHtml = document.getElementById("pattern-span");
const exerciseHtml = document.getElementById("exercise-span");

noteHtml.innerHTML = notes[Math.floor(Math.random() * notes.length)];
patternHtml.innerHTML = patterns[Math.floor(Math.random() * patterns.length)];
exerciseHtml.innerHTML =
  exercises[Math.floor(Math.random() * exercises.length)];
