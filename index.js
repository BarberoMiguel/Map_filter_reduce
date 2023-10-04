//RESUELVE LOS EJERCICIOS AQUI

//map

//1
const  numbers = [4, 5, 6, 7, 8, 9, 10];
let elevados = () => numbers.map((x) => x**x);

//2
let paises = ["Italia","Japón","Valencia"]
function comida(el, i) {
    if(el != "Entrecot"){
        return `Como soy de ${paises[i]}, amo comer ${el}`;
    }else{
        return `Aunque no como carne, el ${el} es sabroso`;
    };
}
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
var result2 = foodList.map((actual, i) => comida(actual, i));

//3
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];
function genera(el) {
    return `${el.name} es ${el.role} y le gusta ${el.hobbies[0]} y ${el.hobbies[1]}`;
};
let result3 = staff.map((actual) => genera(actual));

//filter

//4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4 = numbers2.filter((el) => el %2 != 0);


//5
const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];
function concatenar(el) {
    if (el.name == 'Tempeh') {
        return 'Que rico Tempeh me voy a comer!';
    } else {return 'Que rica Tofu burguer me voy a comer!'}};
let array2 = foodList2.filter(el => el.isVeggie);
var result5 = array2.map(el => concatenar(el));
//funciona!!

//6
const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];
  let result6 = inventory.filter(el => el.price > 300).map(el => el.name);


//.reduce((acc, item) => acc+item, valorinicial);

//6Bis
const numeros3 = [39, 2, 4, 25, 62];
let initialValue = 1;
let result7 = numeros3.reduce((total, actual) => total*actual, initialValue);


//7 //8


const sentenceElements = [
    'Me',
    'llamo',
    'anonimo',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];

let result8 = sentenceElements.reduce((total, actual) => total+" "+actual, "").slice(1);


//9
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

let result9 = books.filter(el => el.category == "code")
                    .reduce((total, el) => total + el.price, 0);

