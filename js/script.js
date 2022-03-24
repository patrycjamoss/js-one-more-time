console.log ("Moje imie to Patrycja")


// komentarz liniowy:
// ctl+/

/* komentarz 
blokowy
shift + Alt + A */

// zmienne i stale:
   /*  -zawsze z małej litery
    -nie zaczynac od cyfr
    -bez polskich znaków
    -bez słwówek kluczowych(np.let. var) */

// -deklaracja zmiennej Es5
var imie = "Ewa"; 
//- deklaracja zmiennej  Es6
// let wiek = 25; 

// stałe 
    // -raz ustalamy wartosc

const pi = 3.14;
const liczbaMiesiecy = 12;

imie = "Monika";
// wiek = 30;


// console.log(wiek);

// FUNKCJE
   /*  -nazewnisctwo takie same jak przy zmiennych,
       -trzeba choc raz uzyc funkcji zeby zaczęła działać; */
    
przedstawMnie();
//   Przy tak zdeklarowanej funkcji, można ją wywołać przed zdeklarowaniem w kodzie
function przedstawMnie(){
    console.log("Mam na imie Patrycja")
}

przedstawMnie();

//   Przy tak zdeklarowanej funkcji, NIE można jEJ wywołać przed zdeklarowaniem w kodzie. Musi być wywołana po zdeklarowaniu.
const wypiszMojeImie = function(){
    console.log("Moje imie to Patrycja")
}

wypiszMojeImie();

// Funkcja z parametrem 
// function przedstawMnie(imie){
//     console.log(`Mam na imię ${imie}`);
//     console.log(`Miło Cię poznać ${imie}`);
// }
// przedstawMnie("Monika");
// przedstawMnie("Bartek");

// Funkcja z domyślnym parametrem 
    // -wywołujemy jak funkcje anonimową()
function przedstawMnie(imie = 'Patrycja'){
    console.log(`Mam na imię ${imie}`);
    console.log(`Miło Cię poznać ${imie}`);
}
    przedstawMnie()

const dodajLiczby = function(liczba1 = 0, liczba2 = 0) {
    let wynik = liczba1 + liczba2;
    console.log(wynik);
}
let liczbaHansa = 108;
let liczbaPierwsza = 1;
let LiczbaDruga = 10;

dodajLiczby(100, 8); /*  te parametry można zmieniać */
dodajLiczby(liczbaHansa, liczbaPierwsza);
dodajLiczby(10,20);

// Zwracanie wartość z funkcji

const mnozenieLiczb = function(liczba1 = 0, liczba2 = 0){
    let wynik = liczba1 * liczba2;

    return wynik;
}

let wynikMnozenia = 0;

wynikMnozenia = mnozenieLiczb(2,4);

console.log(wynikMnozenia);

// FUNKCJE STRZAŁKOWE

// const doKwadratu = function(x = 0) {
//     return x * x;
// }/*  --->stary zapis */

const doKwadratu = x => x * x;
/* ---> nowy zapis */
let wynik = doKwadratu(3);

console.log(wynik);


// Pętla, która jako parametr przyjmuje funkcje
// ['Krzysztof', 'Hans', 'Monika'].forEach(function(el) {
//     console.log(el);
// })
/* ---> krótszty zapis: */ ['Krzysztof', 'Hans', 'Monika'].forEach(el => console.log(el));

// ZASIĘG ZMIENNYCH

var imie = 'Hans';/*  ---> zmienna na poziomie globalnym. Poza funkcja
 */
console.log(imie);


function wyswietlImie() {
    var imie = 'Monika'
    var nazwisko = 'Kowalski'; /* --->zmienna wewnatrz funkcji-zmienna lokalna. Wywołuje się ja w środku funkcji*/
    console.log(imie);
    console.log(nazwisko);

    if (imie == 'monika') {
        var wiek = 30; 
    
        console.log(wiek);
    }
}

wyswietlImie();

if (imie == 'Hans') {
    var wiek = 30; /* ---> za pomoca słówka var w 'if'i w 'for' osiagamy zasieg globalny */

    console.log(wiek);
}

console.log(wiek);
