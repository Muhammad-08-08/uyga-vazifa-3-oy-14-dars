// ? 1-misol

// let age = +prompt("yoshingizni kiriting");

// if (age > 50) {
//   alert("siz kattasiz");
// } else {
//   alert("siz yoshsiz");
// }

// ? 1-misol tugadi

// ? 2-misol

// let narx = +prompt("somsaning narxini yozing");

// if (narx >= 3000) {
//   alert("juda qimmat");
// } else {
//   alert("arzon ekan olavering");
// }

// ? 2-misol tugadi

// ? 3-misol

// let kod = prompt("parolni kiriting");

// if (kod === "sarimsoqpiyoz") {
//   alert("Assalomu Aleykum yaxshimisiz");
// }

// ? 3-misol tugadi

// ? 4-misol

// let kod = prompt("parolni kiriting");

// if (kod === "sarimsoqpiyoz") {
//   alert("Assalomu Aleykum yaxshimisiz");
// } else {
//   alert("Xato");
// }

// ? 4-misol tugadi

// ? 5-misol

// let yosh = +prompt("yoshingizni kiriting");

// if (yosh > 0 && yosh < 30) {
//   alert("siz yoshsiz");
// } else if (yosh > 30 && yosh < 60) {
//   alert("siz kattasiz");
// } else {
//   alert("siz qarisiz");
// }

// ? 5-misol tugadi

// ? 6-misol

// let ism = prompt("ismingizni kiriting");

// if (ism === "Ali") {
//   alert("Salom og'a");
// } else if (ism === "Ahmad") {
//   alert("Ko'rinmay qolding do'stim");
// } else{
//     alert(`salom ${ism}`)
// }

// ? 6-misol tugadi

// ? 7-misol

// let oylik = prompt("oylik maoshingizni kiriting");
// let soliq = confirm("soliqli hisoblaysizmi");

// if (soliq === true) {
//   alert(`${(oylik / 100) * 12 - 1000} so'm va yiilik maoshingiz ${(oylik / 100) * 12 - 1000 * 12}`);
// } else {
//   alert(`${oylik} so'm va yillik maoshingiz ${oylik*12}`);
// }

// ? 7-misol tugadi

// ? 8-misol

// let oylik = parseFloat(prompt("Oylik maoshingizni kiriting:"));
// let soliq = confirm("Soliqli hisoblaysizmi");

// if (soliq) {
//    yil = oylik * 12 * 0.9;
// } else {
//     yil = oylik * 12;
// }

// let sarf = yil * 0.9;

// alert("Yillik maosh: " + yil.toFixed(2) + " so'm");
// alert("Sarflash: " + sarf.toFixed(2) + " so'm");

// ? 8-misol tugadi

// ? 9-misol

// function fn() {
//     let kurs = 12850;
//     let sum = parseFloat(prompt("Pul miqdorini kiriting:"));
//     let pul = prompt("Pul jinsi kiriting");

//     let result;

//     if (pul === '1') {
//         result = sum * kurs;
//         alert(`${sum} dollar ${result.toFixed(2)} so'mga teng.`);
//     } else if (pul === '2') {
//         result = sum / kurs;
//         alert(`${sum} so'm ${result.toFixed(2)} dollar.`);
//     } else {
//         alert("Noto'g'ri pul jinsi tanlandi.");
//     }
// }

// fn();

// ? 9-misol tugadi

// ? 10-misol

// function munyu() {
//     let taom = prompt("Biror bir taom kiriting:");
//     let narx;

//     switch (taom) {
//         case "somsa":
//             narx = 3000;
//             break;
//         case "palov":
//             narx = 15000;
//             break;
//         case "gumma":
//             narx = 2000;
//             break;
//         default:
//             alert("Bunday taom bizda yo'q.");
//             return;
//     }
//     alert(`${taom} ning narxi ${narx} so'm`);
// }

// munyu();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>homework 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// homework
let datas = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Tom Hardy",
    age: 40,
    email: "tom@example.com",
    phone: "765-432-1098",
  },
  {
    id: 4,
    name: "Emily Blunt",
    age: 28,
    email: "emily@example.com",
    phone: "321-654-9870",
  },
  {
    id: 5,
    name: "Emily Test",
    age: 48,
    email: "emilytest@example.com",
    phone: "321-654-98700980",
  },
];

// crud ni bajarib kelila
// CRUD
//  C => create
//  R => read
//  U => Update
//  D => delete

// 4 ta function tuziladi

// function create(data) {
//   datas.push(data);
//   console.log(datas);
// }

// let name = prompt("what is your name?");
// let age = prompt("how old are you?");
// let email = prompt("what is your email?");
// let phone = prompt("what is your phone number?");
// let date = new Date();
// create({
//   id: datas[datas.length - 1].id + 1,
//   name,
//   age,
//   email,
//   phone,
// });
// console.log(date.getTime());

///////////////////////////////////
// let search = prompt(" your entersearching name");
// function read(name) {
//   let data = datas.filter((val, inx) =>
//     val.name.toLowerCase().includes(name.toLowerCase())
//   );
//   console.log(data);
// }
// read(search);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let id = prompt("Enter id");
// function update(ids, info, re) {
//   let index = datas.findIndex((user) => user.id === ids);
//   if (index !== -1) {
//     let res = { ...datas[index], ...info };
//     console.log(datas);
//   }
// }

// update(
//   3,
//   {
//     age: 40,
//     phone: "765-432-10w98",
//   },
//   5
// );
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// function onDelete(ids) {
//   let res = datas.filter((val) => val.id !== ids);
//   console.log(res);
// }
// onDelete(3);

// ? tugadi 
// todo hamma misol tugadi