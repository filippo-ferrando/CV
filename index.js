$("#myModal").on("shown.bs.modal", function() {
  $("#myInput").trigger("focus");
});

// -----------------------------------------------------------------
// -----------------------------------------------------------------// -----------------------------------------------------------------
// TITLE -----------------------------------------------------------

const titleOptions = [
  "Filippo Ferrando",
  "un Musicista",
  "un Informatico",
  "uno Studente"
];

const titleToggleInfo = ["Click to stop", "Click to start"];

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
      FILIPPO FERRANDO DAMILLANO
  </H1>
</center>
`,
  info: `
<center>
  <p style="opacity: 0.7;">
      filippo.ferrando@itiscuneo.eu | (+39) 331 345 3281
      <br>
      07/10/2003
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
  <b>ITIS Mario Delpozzo Cuneo</b><br>Indirizzo Informatico, Smart Robot
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
      <small>2014 &rarr; 2018</small>
  </div>
  <b>First Lego League</b>
  <br>Programmatore<br>
  <code>Programmazione,</code> <code>Teamwork,</code> <code>Writing</code>
  <br>
  <br>
  <div style="opacity: 0.7;">
      <small>2019 &rarr; 2020</small>
  </div>
  <b>NAO Challenge</b><br>Programmatore
  <br>
  <code>Programmazione,</code> <code>Teamwork,</code> <code>Team management</code>
  <br>
  <br>
  <div style="opacity: 0.7;">
      <small>2017 &rarr; 2019</small>
  </div>
  <b>Olimpiadi Problem Solving</b><br>Miglior squadra dell'istituto
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
  <b>Scuolorando</b>
  <br>Assistente ai compiti
  <br><small>@ Associazione Scuolorando, Cuneo</small><br>
  <code>Teamwork,</code> <code>Kids</code>
  <br>
  <br>
  <div style="opacity: 0.7;">
      <small>Estate 2017-2018-2019</small>
  </div>
  <b>Animatore</b>
  <br>Intrattenitore bamabini dai 6 ai 12 anni
  <br><small>@ Spinetta, Cuneo</small><br>
  <code>Teamwork</code>
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