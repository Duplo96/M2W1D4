/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.


*/

/*  I datatype definiscono il formato di una variabile e si dividono in:
Stringhe: Sono tutti quei dati scritti a caratteri compresi dalle " Qui definiamo la nostra ciotola"
Numeri: Sono numeri scritti senza nessun contorno "La nostra ciotola ha 50g all'interno"
Boolean: Possiamo riassumerlo in VERO o FALSO "C'è dello zucchero nella nostra ciotola?"
Undefined: Il nostro dato non ha un valore specifico "non abbiamo dato alla nostra ciotola il valore di zucchero all'interno"
Null: Il nostro dato è stato svuotato del suo valore di partenza ovvero abbiamo tolto dalla nostra ciotola lo zucchero di prima 
Object: è un contenitore di proprietà ovvero di elementi che caratterizano l'elemento "Il documento d'identità è un object in quanto definisce le nostre generalità divise per proprietà"*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

*/

/*  Un' oggetto è un contenitore di proprietà, che caratterizzano l'elemento con un valore e un nome 
 ES: Il nostro documento d'identità 
 Nome: Pluto
 Cognome: Pippo
 Data di nascita: Quella del mio compleanno
 Città: Roma */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Tiziano"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"

console.log("john" === "John")

console.log(name1.toLowerCase() === name2.toLowerCase())

