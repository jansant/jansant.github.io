console.log('Hola mundo');
const myName = 'Janet';
//myName = 'Selene';
let myAge = 16;
x=3;
y=4;
let z = x+y  
console.log('z',z);
console.log('z es de tipo',typeof z);

const likesMusic = true;
if(likesMusic===true){
    console.log('Si me gusta la musica')
}else{
    console.log('No me gusta la musica')
}





console.log('myName',myName);
console.log('myAge',myAge);
console.log('x',x);
console.log('y',y);
console.log('likesMusic',likesMusic);

console.log('myName es de tipo',typeof myName);
console.log('myAge es de tipo',typeof myAge);
console.log('x es de tipo', typeof x);
console.log('y es de tipo',typeof y);
console.log('likesMusic es de tipo', typeof likesMusic);



 //Mi tiendita, Sumando, restando, etc
const sabrita = 10;
const refresco = 15;
const cuponDescuento = 5;
let totalProductos;

totalProductos = sabrita + refresco;
console.log('***************************');
console.log("******   BIENVENIDO *******");
console.log('*                         *');
console.log('*                         *');
console.log('*                         *');

console.log('*  2 Sabrita..............', sabrita);
console.log('*  2 Refresco.............', refresco);

totalProductos = 2*sabrita+2*refresco;
console.log("*  Mi total es: ........", "$"+totalProductos );

if(totalProductos>=50){
    console.log('*  Descuento............', "-"+cuponDescuento);
    console.log('*  Gran Total............', "$"+(totalProductos-cuponDescuento));
} else {
    console.log('*  Gran Total............', "$"+(totalProductos));
}


console.log('*                         *');
console.log('*                         *');
console.log('*                         *');
console.log("*********   GRACIAS **********") 



let compraRealizada = false;
let pisoBarrido = true;
let dinero = 0;



if (compraRealizada === true && pisoBarrido===true){
     dinero = 50

} else if(compraRealizada === true || pisoBarrido === true){
    dinero= 20;

}else {
    dinero= 5;
}


console.log('Te dare: ', dinero)



let nacimiento = 2006
let actual = 2022

for (let year = nacimiento; year <= actual; year++){
    if (year==nacimiento){
        console.log('En ' +year+ ' yo naci');
    }
    else if(year-nacimiento==1){
        console.log('En ' + year+ ' yo tenia ' + ( year - nacimiento ) + ' año');
    }
    else if (year == actual){
        console.log('En el '+year+ ' yo tendre ' +(year-nacimiento)+ ' años');
    }
    else{
        console.log('En' +year+ ' yo tenia ' +(year-nacimiento)+  ' años')
    }

} 


let year = nacimiento;
while(year <= actual) {
    let age = year-nacimiento;
    if (year == nacimiento){
        console.log('En' +year+ ' yo naci');
    }
    else if (age==1){
        console.log('En ' +year+ ' yo tenia ' +age+ ' año');
    }
    else if (year==actual){
        console.log('En el ' +year+ ' yo tendre ' +age+ ' años' );
    }
    else{
        console.log ('En ' +year+ ' yo tenia ' +age+ ' años');
    }
    year++;
}

//Funcion 
function aCelsius(fahrenheit ) {
    return(fahrenheit-32)/1.8;
}
console.log(aCelsius(100));

//Funcion arrow
const aCelsius2 = (fahrenheit) => ((fahrenheit-32)/1.8) 

console.log(aCelsius2(100));



//notas
const playNote = (key) => {
    // Obtenemos la nota
    const noteAudio = document.getElementById(key.dataset.note);
    // Reseteamos la ejecución de la nota
    noteAudio.currentTime = 0;
    // Utilizamos el método play de la nota
    noteAudio.play();

    // Añadimos la clase active
    key.classList.add('active');
    // Agregamos un event listener al evento ended
    noteAudio.addEventListener('ended',() => {
       // Cuando termine de reproducirse el sonido, removemos la clase active
       key.classList.remove('active');
    });
  }
  
const nameElement=document.querySelector('#name');
const ageElement= document.querySelector('#age');
const likesMusicElement= document.querySelector('#likesMusic');

console.log('nameElement', nameElement);
console.log('ageElement', ageElement);
console.log('likesMusicElement', likesMusicElement);

nameElement.textContent=myName;
ageElement.textContent=myAge;

if (likesMusic==true) {
    likesMusicElement.textContent='Me gusta la musica';
} else{
    likesMusicElement.textContent='No me gusta la musica';
}

const body = document.querySelector('body');
const text = document.createElement('p');
text.textContent = 'Hola mundo :)';
body.appendChild(text);
body.removeChild(text);


const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];


  const keys = document.querySelectorAll('.key');

  keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
  });
  const whiteKeys = document.querySelectorAll('.key.white');
  const blackKeys = document.querySelectorAll('.key.black');



document.addEventListener('keydown',(e)=>{
    if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})


const persona ={
    nombre: 'Janet',
    edad: 15,
    nacionalidad:'mexicana',
    likesMusic: true,
    mascota :{
        tipo: 'perro',
        raza: 'pug',
        nombre: 'Fiona'
    }
}
 console.log('persona',persona);

const persona2 ={
    nombre: 'Denisse',
    edad: 27,
    nacionalidad:'mexicana',
    likesMusic: true,
    mascota :{
        tipo: 'huron',
        raza: 'estandar',
        nombre: 'Dewey'
    }
}
console.log('persona2', persona2);


const frutas = ['Papaya', 'Fresa', 'Uva', 'Mandarina', 'kiwi'];
frutas[5]= 'Piña';
frutas[0]= 'Higo';
frutas.push='Frambuesa';
frutas.shift();
console.log(frutas);


const calificaciones =[10,6,7,5,8,8,7,5,10,9,9];
const reprobados = calificaciones.find((calificacion) => calificacion <= 5);
const mayor8 = calificaciones.map((calificacion) => calificacion >= 8);
const aprobados = calificaciones.filter((calificacion) => calificacion>6);

const sumatoria = calificaciones.reduce(
    (valorAnterior, valorActual) => valorAnterior + valorActual,
    0
);

const promedio = sumatoria/calificaciones.length;
console.log('reprobados', reprobados);
console.log('aprobados', aprobados);
console.log('Mayor a 8 ', mayor8);

console.log('El promedio general de la escuela es de : ' +promedio)


/*const getAge = async () => {
    const response = await fetch('https://api.agify.io?name=noe');
    console.log(response);

    const data = await response.json();
    console.log(data)
}

const printJuan = () => {
    let age = 10;
    let years = 5;
    console.log('Juan' + (age + years));
}

const main = async () => {
    await getAge();

    printJuan();
    console.log('Pepe')
}


main();
*/

const getGuessedAge = async () => {
    const response = await fetch('https://api.agify.io?name=janet');
    const data = await response.json();
    return data.age;
}

const displayGuessedAge = async () =>{
    const guessedAgeSpan = document.getElementById('guessedAge');
    const guessedAge = await getGuessedAge();
    guessedAgeSpan.textContent = guessedAge;
}

const displayisGuessRight = async () =>{
    const isGuessRightSpan = document.getElementById('isGuessRight');
    const isGuessRight = await false;
    isGuessRightSpan.textContent = false;
}

displayisGuessRight();
displayGuessedAge();
