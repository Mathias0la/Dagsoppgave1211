
//1. Lag en funksjon som tar en tekst inn. Deler den i to deler på midten og bytt om slik at den bakerste delen kommer først og så kommer den første delen bakerst.

function splitText(text) {
    let textArray = text.split("") // Gjør text til en array for å kunne bruke Splice
    let arraySplice = textArray.splice(textArray.length /2) //deler arrayen på midten

    return arraySplice.concat((" "),textArray).join("") //Legger inn igjen første halvdel på slutten med mellomrom mellom ordene
}

console.log(splitText("Hello World"))

//2. Lag en funksjon som tar inn en tekst og en boolean. Basert på verdien i boolean'en skal den enten returnere teksten med store eller små bokstaver.
//Bruk toUpperCase() og toLowerCase()

//Funksjon som returnerer text input i uppercase om verdien på num1 er lik 5 eller under, om den er over 6 vil teksten komme ut i LowerCase
function bigOrSmall(boolean,text) {
    if(boolean === true){
        console.log(text.toUpperCase())
    } else if (boolean === false) {
        console.log(text.toLowerCase())
    } else {
     console.log("ERROR")
    }
}

bigOrSmall(true,"Hei dette er en tekst")//Returnerer teksten i upperCase
bigOrSmall(false,"Hei dette er en tekst")//Returnerer teksten i LowerCase


//3. Lag en funksjon som tar inn en tekst som inneholder dag i uken. Funksjonen skal bruke en switch til å skrive ut forskjellge tekster basert på parameter.
//Funksjon som sjekker hvilken dag det er, satt toLowerCase på day inni switch for at input skal matche uten å måtte være case sensitive.
function daysOfWeek(day) {
    switch(day.toLowerCase()) {  

        case "mandag":
            return "Det er Mandag i dag"
        break;
        case "tirsdag":
            return "Det er Tirsdag i dag"
        break;
        case "onsdag":
            return "Det er Onsdag i dag"
        break;
        case "torsdag":
            return "Det er Torsdag i dag"
        break;
        case "fredag":
            return "Det er Fredag i dag, endelig helg"
        break;
        case "lørdag":
            return "Det er Lørdag i dag"
        break;
        case "søndag":
            return "Det er Søndag i dag, uken er snart over"
        break;
        default:
          return  "Invalid input"
    }
}

//Tester om funksjonen funker som den skal, det gjør den, stringen blir til lowercase så den matcher cases i funksjonen
console.log(daysOfWeek("Mandag")) 
console.log(daysOfWeek("TIRSDAG"))
console.log(daysOfWeek("ToRsDaG"))
//Sjekker om default returnerer riktig ved feil input
console.log(daysOfWeek("Ingen"))


//4. Lag en funksjon som sjekker om en tekst starter og slutter med samme bokstav
//Bruk charAt()
//Funskjon for å sjekke om en string starter og slutter på samme bokstav
function sameLetter(text) {
    let upperCasetext = text.toUpperCase(); //Gjør teksten om til uppercase sånn at Strict equality får sjekket bokstaven på riktig vis.

    if(upperCasetext.charAt(0) === upperCasetext.charAt(upperCasetext.length -1)) {
        return `${text} starts and ends with the same character`;
    } else {
        return `${text} does not start and end with the same character`;
    }
}

//Sjekker om funksjonen funker
console.log(sameLetter("Hello World"))
console.log(sameLetter("Dello World"))


//5. Lag en funksjon som sjekker om en tekst finnes i en liste. Funksjonen tar både søketekst og liste inn som parametere og returnerer true/false.
//Bruk includes()
let fruits = ["Apple","Banana","Melon","Kiwi","Strawberry"]
//Funksjon som sjekker om en Array inneholder verdien som blir satt i text
function checkList(list,text) {
    if(list.includes(text)){
        return true;
    } else {
        return false;
    }
}
// Tester om funskjonen checkList fungerer.
console.log(checkList(fruits,"Apple")); //Returnerer true fordi "Apple" er i fruits
console.log(checkList(fruits,"Pear")); //Returnerer false fordi "Pear" er ikke i fruits

//6. Lag en funksjon som tar inn en liste av ord og returnerer det første og siste ordet kombinert.
//Bruk pop() og shift()

//Funksjon som henter første og siste ordet fra Fruits arrayen og kombinerer dem.
function popAndShift(fruits) {
    let firstWord = fruits.shift();//Henter første ordet fra array
    let lastWord = fruits.pop();//Henter siste ordet fra array

    return firstWord + lastWord //Returnerer resultatet av firstWord + lastWord
}
//Tester om funksjonen funker
console.log(popAndShift(fruits))


//7. Lag en funksjon som sammenligner to tekststrenger og sjekker om de er identiske, uavhengig av store og små bokstaver.

function textComparison(text,text1) {
    let firstText = text.toLowerCase();
    let secondText = text1.toLowerCase();
//if else test med strict compare for å sjekke om tekstene er identiske, teksten er gjort om til LowerCase for at strict compare skal kunne sjekke ordentlig.
    if(firstText === secondText) {
        return (`${text}`+ ` og ` +`${text1}` +` er identiske, uavhengig av store og små bokstaver`)
    } else {
        return (`${text}`+ ` og `+ `${text1}`+ ` er ikke identiske.`)
    }
}
//Sjekker om funksjonen textComparison fungerer
console.log(textComparison("Hello WORLD","HELLO WORLD"));
console.log(textComparison("Hello WORLD","WORLD HHELLOO"));

//8. Lag en funksjon som sjekker hvilken kategori en alder hører til.
/*
Funksjonen skal ta inn et tall (alder) og returnere en av følgende kategorier basert på alderen:
Under 13: "Barn"
13 til 19: "Tenåring"
20 til 64: "Voksen"
65 og over: "Pensjonist"
   Bruk if og else if eller switch for å løse oppgaven*/


function ageCheck(num) {
    if(num <=13){
        return "Barn"
    } else if(num <=19) {
        return "Tenåring"
    } else if (num <=64) {
        return "Voksen"
    } else if (num >=65) {
          return "Pensjonist"
    } else {
        return "Invalid input"
    }
        
}
//Sjekker om funskjonen ageCheck fungerer
console.log(ageCheck(13))//Returnerer "Barn"

console.log(ageCheck(19))//Returnerer "Tenåring"

console.log(ageCheck(64))//Returnerer "Voksen"

console.log(ageCheck(66))//Returnerer "Pensjonist"

//9. Lag en funksjon som tar inn en bokstav og sjekker om det er en vokal eller konsonant.
//Array med vokaler
let vowel = ["a", "e", "i", "o", "u", "y", "æ", "ø", "å"]
//Funksjon for å sjekke om en bokstav er en vokal eller konsonant.
function vowelOrConsonant(text) {
    let lowerCaseText = text.toLowerCase();

    if(vowel.includes(lowerCaseText)) {
        return `Bokstaven ` + `${text}` + ` er en vokal`
    } else {
        return `Bokstaven ` + `${text}` + ` er en konsonant`
    }
}
//Sjekker om funksjonen funker (Bokstaver som finnes i arrayen vowel vil returnere `Bokstaven ` + `BOKSTAV` + ` er en vokal` )
console.log(vowelOrConsonant("A"))// returnerer Bokstaven A er en vokal
console.log(vowelOrConsonant("b"))// Returnerer Bokstaven b er en konsonant

/*10. Lag en funksjon som sjekker hvilken årstid en måned tilhører.

Funksjonen tar inn navnet på en måned og returnerer en av følgende årstider:
Desember, Januar, Februar: "Vinter"
Mars, April, Mai: "Vår"
Juni, Juli, August: "Sommer"
September, Oktober, November: "Høst"
Bruk switch for å bestemme årstiden basert på måneden.*/

//Funskjon for å sjekke hvilken årstid de forskjellige månedene er i
function seasons(month) {
    switch(month.toLowerCase()){
        case "december":
        case "january":
        case "february":
            return "Winter"
        case "march":
        case "april":
        case "may":
            return "Spring"
        case "june":
        case "july":
        case "august":
            return "Summer"
        case "september":
        case "october":
        case "november":
            return "Autumn"
        default:
            return "Invalid input"
    }
}
//Sjekker om funksjonen seasons funker
console.log(seasons("January")); // Winter
console.log(seasons("April")); // Spring
console.log(seasons("August")); // Sum,mer
console.log(seasons("September")); //Autumn
console.log(seasons("Januar")) // Invalid input


/*11. Lag en funksjon som fjerner det første og siste elementet fra en liste.
Funksjonen tar inn en array og returnerer en ny array der første og siste element er fjernet.
Bruk slice() for å få en ny array uten de to ytterste elementene.
Eksempel: ["sol", "vind", "regn", "snø"] gir ["vind", "regn"].*/

let weather = ["sun","wind","rain","snow"]
let newFruits = ["Banana","Apple","Pear","Kiwi","Mandarin","Orange"]
//Funskjon som fjerner første og siste element i en array
function listRemoval(list) {
    return list.slice(1, list.length -1)
}
//Sjekker om funksjonen fungerer
console.log(listRemoval(weather));
console.log(listRemoval(newFruits));
