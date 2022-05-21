let ad;

ad = 'Esra';

console.log(ad);

let customerName = 'Çınar';

let customerLastName = 'Turan';

let fullName = 'Çınar Turan';

let musterId = '123456789';

let total = 207.7;

let gender = true; //erkek true , kadın false
//object
let address = {
    city: 'Kocaeli İzmit',
    district: 'İzmit',
    body: 'çiçek mah. No:43'
};
//array
let customerHobbies = ['Reading book', 'Listening music',
    'Play the violin', 'Do yoga'
];

//** siparişlerin toplamı 

let order1 = 100;
let order2 = 150;

let totalOrder = order1 + order2;

console.log(totalOrder);

// console.log(order1 + order2);


//** siparişleirin toplamını tam sayı olarak heasaplama

let order3 = parseInt(100.3);
let order4 = parseInt(150.6);

console.log(order3 + order4);

// ** doğum yılına göre yaş hesaplama

let yearOfBirth = 1986;

console.log(new Date().getFullYear() - yearOfBirth);

// **  karakter sayısı bulma

let course = 'Modern Javascript Kursu';

console.log(course.length);