const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.0.0");

yargs.command(
  "add",
  "Add a note...",
  {
    title: {
      alias: "t",
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      alias: "b",
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  argv => {
    notes.addNote(argv.title, argv.body);
  }
).argv;

yargs.command(
  "remove",
  "Remove a note...",
  {
    title: {
      alias: "t",
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  argv => {
    notes.removeNote(argv.title);
  }
).argv;

yargs.command(
  "list",
  "Listing notes...",
  _ => {
    notes.listNote();
  }
).argv;

yargs.command(
  "read",
  "Read a note...",
  {
    title: {
      alias: "t",
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  argv => {
    notes.readNote(argv.title);
  }
).argv;
