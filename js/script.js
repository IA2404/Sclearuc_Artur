let name = "Артур";
let b_year = "2005";
let student = true;

console.log("Имя,", name);
console.log("Год рождения:", b_year);
console.log("Учится?:", student);

let score = prompt("Введите ваш балл:");
if (score >= 90) {
 console.log("Отлично!");
} else if (score >= 70) {
 console.log("Хорошо");
} else {
 console.log("Можно лучше!");
}

for (let i = 1; i <= 5; i++) {
 console.log(`Итерация: ${i}`);
}