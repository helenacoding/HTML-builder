
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt' );
const writeStream = fs.createWriteStream(filePath, 'utf-8');
console.log('Hello, enter your text.\n');
const { stdin, stdout } = process;
stdin.on('data', (chank) => {
  if (chank.toString().trim() === 'exit') {
    console.log('You have entered the command "Exit". Goodbye!');
    process.exit();
  }
  writeStream.write(chank);
});


process.stdin.resume();
process.on('SIGINT', () => {
  console.log('You have entered the exit command ctrl+c. Goodbye!');
  process.exit();
});







// НИЖЕ ЭКСПЕРИМЕНТАЛЬНЫЙ КОД ДЛЯ ОБУЧЕНИЯ





// const path = require('path');

// console.log('Выводим название файла: ', path.basename(__filename));
// console.log('Выводим имя директории: ', path.dirname(__filename));
// console.log('Выводим расширение файла: ', path.extname(__filename));
// console.log('Parse: ', path.parse(__filename).name);
// console.log(path.join(__dirname, 'text.txt'));




// const fs = require('fs');

// СОЗДАНИЕ ПАПКИ
// fs.mkdir(path.join(__dirname, 'row'), (err) =>{
//   if (err) {
//     throw err;
//   }
//   console.log('Папка создана!');
// })





// СОЗДАНИЕ ФАЙЛА
// const filePath = path.join(__dirname, 'text.txt' );
// fs.writeFile(filePath, 'Hello!', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Файл создан!');
// })

// ДОБАВЛЕНИЕ В УЖЕ СОЗДАННЫЙ ФАЙЛ
// fs.appendFile(filePath, '\nHello again!', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Файл дополнен!');
// })

// ЧТЕНИЕ ФАЙЛА
// fs.readFile(filePath, 'utf-8', (err, content) => {
//   if (err) {
//     throw err;
//   }
//   console.log(content);
// })





// const os = require('os');

// ВЫВОД ИНФО О КОМПЬЮТЕРЕ
// console.log('Операционная система: ', os.platform());
// console.log('Архитектура процессора: ', os.arch());
// console.log('Инфо о процессоре: ', os.cpus());
// console.log('Свободная память: ', os.freemem());
// console.log('Всего памяти: ', os.totalmem());
// console.log('Домашняя директория: ', os.homedir());
// console.log('Включен: ', os.uptime());




