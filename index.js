$("#myModal").on("shown.bs.modal", function() {
  $("#myInput").trigger("focus");
});

// -----------------------------------------------------------------
// -----------------------------------------------------------------// -----------------------------------------------------------------
// TITLE -----------------------------------------------------------

const titleOptions = [
  "Pietro Jomini",
  "un robotico",
  "un informatico",
  "uno sportivo",
  "uno studente"
];

const titleToggleInfo = ["Click me to stop", "Click me to start"];

let titleOn = true;

const toggleTitle = () => {
  titleOn ? title.stop() : title.start();
  titleOn = !titleOn;
  $("#toggleTitle").text(titleToggleInfo[titleOn ? 0 : 1]);
};

const title = new Typewriter("#title", {
  strings: titleOptions,
  autoStart: true,
  cursor: "|",
  loop: true
});

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// TERMINAL --------------------------------------------------------
// https://github.com/soyjavi/vanilla-terminal ---------------------

$("#cv").modal({
  show: false
});

function start() {
  $("#terminal").empty();
  const term = new VanillaTerminal({
    container: "terminal",
    commands: {
      cv: t => {
        $("#cv").modal("show");
        t.output("");
      }
    }
  });

  term.clear();

  term.output(
    `<label onclick="$('#cv').modal('show')" class="pointer">CLick me!</label>`
  );
}
