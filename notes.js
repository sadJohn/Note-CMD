const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadFile("notes.json");

  const duplicateNote = notes.find(note => note.title === title);


  if (!duplicateNote) {
    notes.push({
      title,
      body
    });

    saveFile("notes.json", notes);
    console.log(chalk.green("Note added"));
  } else {
    console.log(chalk.red("This note is already added!"));
  }
};

const removeNote = title => {
  const notes = loadFile("notes.json");
  const removedNote = notes.filter(note => note.title !== title);
  if (notes.length === removeNote.length) {
    console.log(chalk.yellow("No such note!"));
    return;
  }
  saveFile("notes.json", removedNote);
  console.log(chalk.green("Note removed"));
};

const listNote = _ => {
  const notes = loadFile("notes.json");
  console.log(chalk.green("Your Notes:"));
  notes.forEach(note => console.log(chalk.blue(note.title)));
};

const readNote = title => {
  const notes = loadFile("notes.json");
  const note = notes.find(note => note.title === title);
  if (!note) {
    console.log(chalk.red("Note not found!"));
    return;
  }
  console.log(chalk.blue(note.title) + ": " + note.body);
};

const loadFile = url => {
  try {
    const bufferData = fs.readFileSync(url);
    const dataJSON = bufferData.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveFile = (url, notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync(url, dataJSON);
};

module.exports = {
  addNote,
  removeNote,
  listNote,
  readNote
};
