preguntass = readText("static/preguntasjson.json");

preguntass.then((preguntas) => juego(preguntas));

preguntasIndices = preguntasSelec();
let INDEX_PREGUNTA = 0;
let puntaje = 0;
function juego(basePreguntas) {
  preguntas = [...basePreguntas];

  for (let i = 0; i < preguntas.length; i++) {
    preguntas.sort(() => Math.random() - 0.5);
  }

  cargarPregunta(preguntasIndices[INDEX_PREGUNTA]);
}

function cargarPregunta(index) {
  objetoPregunta = preguntas[index];

  console.log(objetoPregunta);

  opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);
  for (let i = 0; i < 4; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }

  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
  if (objetoPregunta.imagen) {
    document.getElementById("imagen").src = objetoPregunta.imagen;
    document.getElementById("imagen").style.display = "";
  } else {
    document.getElementById("imagen").style.display = "none";
  }

  if (objetoPregunta.ayuda) {
    document.getElementById("ayuda").style.display = "";
  } else {
    document.getElementById("ayuda").style.display = "none";
  }

  document.getElementById("opcion-1").innerHTML = opciones[0];
  document.getElementById("opcion-2").innerHTML = opciones[1];
  document.getElementById("opcion-3").innerHTML = opciones[2];
  document.getElementById("opcion-4").innerHTML = opciones[3];
}

async function seleccionarOpción(index) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  if (validezRespuesta) {
    await Swal.fire({
      title: "Respuesta correcta",
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    puntaje++;
  } else {
    await Swal.fire({
      title: "Respuesta Incorrecta",
      html: `La respuesta correcta es ${objetoPregunta.respuesta}`,
      icon: "error",
    });
  }
  INDEX_PREGUNTA++;
  if (INDEX_PREGUNTA >= 8) {
    await Swal.fire({
      title: "Juego términado",
      text: `Tu puntaje fue de: ${puntaje}/${8}`,
    }).then(function () {
      const v = { value: puntaje };
      const s = JSON.stringify(v);
      
      fetch("http://127.0.0.1:5000/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: s,
      }).then(() => {
        window.location.replace("/puntuaciones");
      })
    });

    INDEX_PREGUNTA = 0;
    puntaje = 0;
    preguntasIndices = preguntasSelec();
  }
  cargarPregunta(preguntasIndices[INDEX_PREGUNTA]);
}

function ayuda() {
  Swal.fire({
    title: "Ayuda",
    text: objetoPregunta.ayuda,
    imageUrl: objetoPregunta.ayudaImg,
    imageHeight: 300,
  });
}

async function readText(ruta_local) {
  const request = new Request(ruta_local);

  const response = await fetch(request);
  const preguntas = await response.json();

  return preguntas;
}

function randomInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function preguntasSelec() {
  preguntasIndices = [];
  for (let index = 0; index < 8; index++) {
    if (index == 0) {
      preguntasIndices[index] = randomInterval(0, 29);
    } else {
      pass = 0;

      while (!pass) {
        preguntasIndices[index] = randomInterval(0, 29);

        some = 0;
        for (let i = 0; i < index; i++) {
          if (preguntasIndices[i] == preguntasIndices[index]) {
            some = 1;
          }
        }
        if (some == 0) pass = 1;
      }
    }
  }
  return preguntasIndices;
}
