
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'pl-PL';
recognition.continuous = true;

let entries = [];

recognition.onresult = (event) => {
  const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
  console.log("Rozpoznano: ", transcript);

  if (transcript.includes("dodaj odcinek")) {
    const nowy = {
      tytul: prompt("Tytuł odcinka:"),
      gosc: prompt("Gość / Temat:"),
      data: prompt("Data nagrania:"),
      status: "Nowy"
    };
    entries.push(nowy);
    alert("Dodano odcinek: " + nowy.tytul);
  }

  if (transcript.includes("pokaż odcinki")) {
    console.table(entries);
  }

  if (transcript.includes("usuń wszystko")) {
    if (confirm("Czy na pewno chcesz usunąć wszystkie wpisy?")) {
      entries = [];
      alert("Wszystkie odcinki zostały usunięte.");
    }
  }
};

function startAgent() {
  recognition.start();
  alert("Agent głosowy uruchomiony. Mów: 'dodaj odcinek', 'pokaż odcinki' lub 'usuń wszystko'");
}

function stopAgent() {
  recognition.stop();
  alert("Agent głosowy zatrzymany.");
}
