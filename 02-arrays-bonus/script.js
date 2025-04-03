const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const teachersReversed = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  const currentTeachers = teachers[i];
  teachersReversed.push(currentTeachers);
  console.log(teachersReversed);
}
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  const currentTeachers = teachers[i];
  if (currentTeachers.length >= 5) {
    longNames.push(currentTeachers);
    console.log(longNames);
  }
}

// 3. Rimuovi 'Ed' dall'array teachers
for (let i = 0; i < teachers.length; i++) {
  const currentTeachers = teachers[i];
  if (currentTeachers === "Ed") {
    teachers.splice(i, 1);
    console.log(teachers);
  }
}
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

for (let i = 0; i < teachers.length; i++) {
  const currentTeachers = teachers[i];
  if (currentTeachers === "Fabio") {
    const isFabioPresent = true;
    console.table(isFabioPresent);
  } else {
    const isFabioPresent = false;
    console.table(isFabioPresent);
  }
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = "";

for (let i = 0; i < teachers.length; i++) {
  teachersString += teachers[i];
  if (i < teachers.length - 1) {
    teachersString += ", ";
    console.log(teachersString);
  }
}
