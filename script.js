document.addEventListener("DOMContentLoaded", function () {
  const naturalModesSelectAll = document.getElementById("naturalModesSelectAll");
  const naturalModeCheckboxes = document.querySelectorAll(".naturalMode");

  naturalModesSelectAll.addEventListener("change", function () {
    const isChecked = naturalModesSelectAll.checked;
    naturalModeCheckboxes.forEach(function (checkbox) {
      checkbox.checked = isChecked;
    });
  });

  const harmonicMinorModesSelectAll = document.getElementById("harmonicMinorModesSelectAll");
  const harmonicMinorModeCheckboxes = document.querySelectorAll(".harmonicMinorMode");

  harmonicMinorModesSelectAll.addEventListener("change", function () {
    const isChecked = harmonicMinorModesSelectAll.checked;
    harmonicMinorModeCheckboxes.forEach(function (checkbox) {
      checkbox.checked = isChecked;
    });
  });

  const melodicMinorModesSelectAll = document.getElementById("melodicMinorModesSelectAll");
  const melodicMinorModeCheckboxes = document.querySelectorAll(".melodicMinorMode");

  melodicMinorModesSelectAll.addEventListener("change", function () {
    const isChecked = melodicMinorModesSelectAll.checked;
    melodicMinorModeCheckboxes.forEach(function (checkbox) {
      checkbox.checked = isChecked;
    });
  });

 const pentatonicModesSelectAll = document.getElementById("pentatonicModesSelectAll");
  const pentatonicModeCheckboxes = document.querySelectorAll(".pentatonicMode");

  pentatonicModesSelectAll.addEventListener("change", function () {
    const isChecked = pentatonicModesSelectAll.checked;
    pentatonicModeCheckboxes.forEach(function (checkbox) {
      checkbox.checked = isChecked;
    });
  });

  const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const scales = {
    'Modo Jónico': ['1', '2', '3', '4', '5', '6', '7'],
    'Modo Dórico': ['1', '2', 'b3', '4', '5', '6', 'b7'],
    'Modo Frigio': ['1', 'b2', 'b3', '4', '5', 'b6', 'b7'],
    'Modo Lidio': ['1', '2', '3', '#4', '5', '6', '7'],
    'Modo Mixolidio': ['1', '2', '3', '4', '5', '6', 'b7'],
    'Modo Eólico': ['1', '2', 'b3', '4', '5', 'b6', 'b7'],
    'Modo Locrio': ['1', 'b2', 'b3', '4', 'b5', 'b6', 'b7'],
    'Escala Menor Armónica': ['1', '2', 'b3', '4', '5', 'b6', '7'],
    'Modo Locrio n6': ['1', 'b2', 'b3', '4', 'b5', '6', 'b7'],
    'Modo Jónico #5': ['1', '2', '3', '4', '#5', '6', '7'],
    'Modo Dórico #4': ['1', '2', 'b3', '#4', '5', '6', 'b7'],
    'Modo Mixolidio b9b13': ['1', '2', '3', '4', 'b5', 'b6', 'b7'],
    'Modo Lidio #9': ['1', '2', '3', '#4', '5', '6', '7'],
    'Modo Armonico Disminuido': ['1', '2', 'b3', '4', 'b5', 'b6', 'bb7'],
    'Escala Menor Melódica': ['1', '2', 'b3', '4', '5', '6', '7'],
    'Modo Dórico b2': ['1', 'b2', 'b3', '4', '5', '6', 'b7'],
    'Modo Lidio Aumentado': ['1', '2', '3', '#4', '#5', '6', '7'],
    'Modo Lidio b7': ['1', '2', '3', '#4', '5', '6', 'b7'],
    'Modo Mixolidio b13': ['1', '2', '3', '4', '5', '6', 'b7'],
    'Modo Locrio n9': ['1', 'b2', 'b3', '4', 'b5', '6', 'b7'],
    'Modo Alterada': ['1', 'b2', '3', '#4', '#5', 'b7'],
  };

  let timerId;

  function start() {
    clearInterval(timerId);
    const speed = parseInt(document.getElementById('speedInput').value) * 1000;
    timerId = setInterval(() => {
      displayRandomNote();
      displayRandomScale();
    }, speed);
  }

  function displayRandomNote() {
    const randomIndex = Math.floor(Math.random() * notes.length);
    const randomNote = notes[randomIndex];
    document.getElementById('noteDisplay').innerText = `Nota: ${randomNote}`;
  }

  function displayRandomScale() {
    const scaleNames = Object.keys(scales);
    const selectedScales = [];
    scaleNames.forEach(function (scaleName) {
      const checkbox = document.querySelector(`input[value="${scaleName}"]`);
      if (checkbox.checked) {
        selectedScales.push(scaleName);
      }
    });
    const randomScaleName = selectedScales[Math.floor(Math.random() * selectedScales.length)];
    const randomScale = scales[randomScaleName];
    document.getElementById('scaleDisplay').innerText = `Escala: ${randomScaleName} - Construcción: ${randomScale.join(', ')}`;
  }

  document.getElementById('startButton').addEventListener('click', start);
});
