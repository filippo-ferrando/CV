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
const cv = {
  nome: `
<center>
  <H1>
      PIETRO JOMINI
  </H1>
</center>
`,
  info: `
<center>
  <p style="opacity: 0.7;">
      pietro.jomini@itiscuneo.eu | (+39) 327 045 1782
      <br>
      26/09/2001
  </p>
</center>
`,
  educazione: `
<center>
<hr>
  <H3>
      EDUCAZIONE
  </H3>
  <br>
  <div style="opacity: 0.7;">
      <small>2017 &rarr; Presente</small>
  </div>
  <b>ITIS Mario Delpozzo Cuneo</b><br>Indirizzo Informatico, curvatura Smart Robot
  <br><br>
  <div style="opacity: 0.7;">
      <small>2015 &rarr; 2017</small>
  </div>
  <b>Liceo Scientifico G. Peano</b><br>Indirizzo Scienze Applicate
  <br><br><br>
</center>
`,
  progetti: `
<center>
<hr>
  <H3>
      PROGETTI & COMPETIZIONI
  </H3>
  <br>
  <div style="opacity: 0.7;">
      <small>2019 &rarr; Presente</small>
  </div>
  <b>Olimpiadi di Robotica</b>
  <br>Team leader<br>
  <code>Programmazione,</code> <code>Teamwork,</code> <code>Problem Solving</code>
  <br>
  <br>
  <div style="opacity: 0.7;">
      <small>2018 &rarr; Presente</small>
  </div>
  <b>Olimpiadi Italiano di Informatica</b><br>Partecipazione annuale
  <br>
  <code>Programmazione,</code> <code>Algoritmi</code>
  <br>
  <br>
  <div style="opacity: 0.7;">
      <small>2018 &rarr; 2019</small>
  </div>
  <b>NAO Challenge</b><br>Squadra finalista, team leader
  <br>
  <code>Programmazione,</code> <code>Teamwork,</code> <code>Team management</code>
  <br>
  <br>
  <div style="opacity: 0.7;">
      <small>2017 &rarr; 2019</small>
  </div>
  <b>DMT Maple</b><br>Finalista
  <br>
  <code>Matematica,</code> <code>Problem Solving</code>
  <br>
  <br><br>
</center>
`,
  lavoro: `
<center>
<hr>
  <H3>
      ESPERIENZE LAVORATIVE
  </H3>
  <br>
  <div style="opacity: 0.7;">
      <small>2019 &rarr; Presente</small>
  </div>
  <b>GraffITIS</b>
  <br>Sviluppatore web Full-Stack
  <br><small>@ ITIS Delpozzo, Cuneo</small><br>
  <code>Programmazione,</code> <code>Web</code>
  <br>
  <br>
  <div style="opacity: 0.7;">
      <small>2020 &rarr; Presente</small>
  </div>
  <b>Altervista 3d Rendering</b>
  <br>Sviluppo plugin Altervista<br>
  <code>Programmazione,</code> <code>Design</code>
  <br>
  <br>
  <div style="opacity: 0.7;">
      <small>Estate 2019</small>
  </div>
  <b>Carpenteria edile</b>
  <br>Tetto chalet di alta montagna
  <br><small>@ Fribourg, Svizzera</small><br>
  <code>Manualità,</code> <code>Lingue</code>
  <br>
  <br>
  <div style="opacity: 0.7;">
      <small>Estate 2018</small>
  </div>
  <b>Carpenteria edile</b>
  <br>Interni chalet di alta montagna
  <br><small>@ Evolène, Svizzera</small><br>
  <code>Manualità,</code> <code>Lingue</code>
  <br>
  <br><br>
</center>
`,
  lingue: `
<center>
<hr>
  <H3>
      LINGUE
  </H3>
</center>

<table class="table table-striped table-borderless">
            <thead>
              <tr>
                <th class="text-right">LINGUA</th>
                <th>LIVELLO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-right">Italiano</td>
                <td>Nativo</td>
              </tr>
              <tr>
                <td class="text-right">Inglese</td>
                <td>Esperto</td>
              </tr>
              <tr>
                <td class="text-right">Francese</td>
                <td>Buono</td>
              </tr>
            </tbody>
          </table>
<center>
  <small>Principiante | Buono | Esperto | Fluente | Nativo</small>
</center>
<br>
`
};

cv.completo =
  cv.nome + cv.info + cv.educazione + cv.progetti + cv.lavoro + cv.lingue;

const md = markdownit({
  html: true,
  typographer: true
});

// -----------------------------------------------------------------------
// TERMINAL --------------------------------------------------------
// https://github.com/soyjavi/vanilla-terminal ---------------------

let currcv = ``;

$("#cv").modal({
  show: false
});

$("#cvc").modal({
  show: false
});

$("#renderc").html(md.render(cv.completo));

const render = raw => {
  $("#render").html(md.render(raw));
};

const _cv = t => {
  render(currcv);
  $("#cv").modal("show");
  t.output("");
};

const cvc = () => {
  $("#cvc").modal("show");
};

const giausato = `Hai già usato questo comando, prova con un comando diverso!
<br>Per una lista di tutti i comandi disponibili, usa il comando <code>help</code>
<br>Per vedere quali sezioni mancano al CV, usa il comando <code>sezioni</code>`;

let provau = false;
const prova = t => {
  if (!provau)
    t.output(`
  Complimenti, hai appena eseguito il tuo primo <code>COMANDO</code>!
  <br>
  Adesso possiamo iniziare a costruire il mio CV.
  <br> In ogni momento, puoi usare il comando <code>cv</code> per vedere lo stato del mio CV
  <br> La prima cosa di cui ogni CV ha bisogno è un nome (in questo caso, il mio!). Prova ad aggiungerlo al CV tramite il comando <code>nome</code>:
`);
  else t.output(giausato);
  provau = true;
};

let nomeu = false;
const nome = t => {
  if (!nomeu) {
    currcv += cv.nome + cv.info;
    t.output(`
    <code>Nome</code> aggiunto con successo!
    <br>Non dimenticarti di controllare lo stato corrente del CV tramite il comando <code>CV</code>!
    Sono sicuro che tu abbia capito il meccanismo! L'ultimo comando che voglio mostrarti è <code>sezioni</code>, con cui puoi vedere quali sezioni mancano per completare il mio cv
    `);
  } else t.output(giausato);
  nomeu = true;
};

let eduu = false;
const edu = t => {
  if (!eduu) {
    currcv += cv.educazione;
    t.output(
      "Sezione <code>Educazione</code> aggiunta con successo!<br>Non dimenticarti di controllare lo stato corrente del CV tramite il comando <code>CV</code>!"
    );
  } else t.output(giausato);
  eduu = true;
};

let progu = false;
const prog = t => {
  if (!progu) {
    currcv += cv.progetti;
    t.output(
      "Sezione <code>Progetti</code> aggiunta con successo!<br>Non dimenticarti di controllare lo stato corrente del CV tramite il comando <code>CV</code>!"
    );
  } else t.output(giausato);
  progu = true;
};

let lavu = false;
const lav = t => {
  if (!lavu) {
    currcv += cv.lavoro;
    t.output(
      "Sezione <code>Lavoro</code> aggiunta con successo!<br>Non dimenticarti di controllare lo stato corrente del CV tramite il comando <code>CV</code>!"
    );
  } else t.output(giausato);
  lavu = true;
};

let lingu = false;
const ling = t => {
  if (!lingu) {
    currcv += cv.lingue;
    t.output(
      "Sezione <code>Lingue</code> aggiunta con successo!<br>Non dimenticarti di controllare lo stato corrente del CV tramite il comando <code>CV</code>!"
    );
  } else t.output(giausato);
  lingu = true;
};

// nome, educazione, progetti, lavoro, lingue
const sezioni = t => {
  res = "";
  if (!nomeu) res += "<br>Sezione Nome - comando: <code>nome</code>";
  if (!eduu) res += "<br>Sezione Educazione - comando: <code>educazione</code>";
  if (!progu) res += "<br>Sezione Progetti - comando: <code>progetti</code>";
  if (!lavu) res += "<br>Sezione Lavoro - comando: <code>lavoro</code>";
  if (!lingu) res += "<br>Sezione Lingue - comando: <code>lingue</code>";
  if (res == "")
    res =
      "Complimenti, hai aggiunt tutte le sezioni al mio CV! Visualizza il risultato con il comando <code>cv</code>";
  else res = res.substring(4);
  t.output(res);
};

function start() {
  $("#terminal").empty();
  const term = new VanillaTerminal({
    container: "terminal",
    commands: {
      cv: _cv,
      prova,
      nome,
      sezioni,
      educazione: edu,
      progetti: prog,
      lavoro: lav,
      lingue: ling
    }
  });

  term.clear();

  term.output(`
    Ciao! Sono <code>Pietro Jomini</code>, studente al 4° anno di informatica (smart robot) all'ITIS Delpozzo di Cuneo.
    <br><br>
    Questa è una <code>Riga di comando</code>, il posto dove i <code>programmatori</code> svolgono la maggior parte del loro lavoro, ed è lo strumento con cui <code>TU</code> puoi costruire il <code>MIO</code> curriculum vitae!
    <br>
    Se invece vuoi saltare la costruzione e passare subito al risultato, <label onclick="cvc()" class="pointer text-info">Clicca qui!</label>
    <br><br>
    Per compiere operazioni nel terminale, bisogna scrivere i <code>COMANDI</code> nella <code>RIGA DI COMANDO</code>, dopo il carattere '>'
    <br>
    per iniziare prova a scrivere il comando <code>prova</code>, seguito dalla pressione del tasto <code>INVIO</code>:
    `);
}
