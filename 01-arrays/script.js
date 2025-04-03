const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
for (let i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  if (currentTeacher === "Phil") {
    const fourthTeacher = currentTeacher;
    console.log(fourthTeacher);
  }
}

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick";
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
for (let i = 0; i < teachers.length; i++) {
  const currentTeacher = teachers[i];
  if (currentTeacher === "Lewis") {
    const lewisIndex = i;
    console.log(lewisIndex);
  }
}

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
for (let i = 0; i < teachers.length; i++) {
  if (teachers === undefined) {
    const isTeachersEmpty = true;
    console.log(isTeachersEmpty);
  } else {
    const isTeachersEmpty = false;
    console.log(isTeachersEmpty);
  }
}
