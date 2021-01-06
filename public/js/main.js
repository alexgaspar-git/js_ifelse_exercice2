// exo 1

// let chifr1 = parseInt(prompt("unsHIFFR?"));
// let chifr2 = parseInt(prompt("unotreShiffr?"));

// if (chifr1 === chifr2) {
//     alert(`le nombre ${chifr1} et le nombre ${chifr2} sont ils égaux? ui`);
// } else {
//     alert(`le nombre ${chifr1} et le nombre ${chifr2} sont ils égaux? no`);
// }

// exo 2

// let chifr1 = parseInt(prompt("unsHIFFR?"));
// let chifr2 = parseInt(prompt("unotreShiffr?"));

// if (chifr1 < chifr2) {
//     alert(`le nombre ${chifr1} est-il plus petit que le nombre ${chifr2}? ui`);
// } else {
//     alert(`le nombre ${chifr1} est-il plus petit que le nombre ${chifr2}? non`);
// }

// exo 3

// let chifr1 = parseInt(prompt("unsHIFFR?"));
// let chifr2 = parseInt(prompt("unotreShiffr?"));
// let chifr3 = parseInt(prompt("ancoreUNotreShiffr?"));

// if (chifr1 + chifr2 > chifr3) {
//     alert(`la somme des nombres ${chifr1} et ${chifr2} est-elle plus grande que le nombre ${chifr3}? ui`);
// } else {
//     alert(`la somme des nombres ${chifr1} et ${chifr2} est-elle plus grande que le nombre ${chifr3}? no`);
// }

// exo 4

// let phrase = prompt('ecris qqchose');
// let esti = parseInt(prompt('estime'));

// if (esti == phrase.length) {
//     console.log("bien jué");
// } else {
//     console.log(`dommage, t'étais à ${Math.abs(esti - phrase.length)} unités de la réponse!`)
// }

// exo 5

// let nom = prompt("Nom svp");

// if (nom.length == 0) {
//     alert("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom?");
//     nom = prompt("NOM SVP!!!");
// } else {
//     alert(`Bonjour, ${nom}`);
// }
// if (nom.length == 0) {
//     alert("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom?");
//     nom = prompt("NOM SVP!!!");
// } else {
//     alert(`Bonjour, ${nom}`);
// }

// exo 6
// let prompti;
// let confirmou;

// if (confirm("Abonnes toi")) {
//     prompti = prompt("Luxe ou Normal?");
// } else {
//     alert("va faire foot");
// }

// if (prompti == "luxe") {
//     alert("Félicitation vous avez choisis la formule Luxe!");
// } else if (prompti == "normal") {
//     alert("Merci pour votre abonnement")
// } else {
//     confirmou = confirm("t sur bruh?");
// }

// if (confirmou) {
//     alert("dommage, bonne journée");
// } else {
//     prompti = prompt("Luxe ou normal?");
// }

// exo 7

// let q1 = prompt("tu tapel komen?");
// let q2 = prompt("t sur?");

// let a1 = "jeff"
// let a2 = "patro"

// if (q1 != a1 && q2 != a2) {
//     alert("fais mieux la prochaine fois");
// } else if (q1 == a1 && q2 != a2) {
//     alert(`tu t'es seulment trompé sur "${q2}"!`)
// } else if (q1 != a1 && q2 == a2) {
//     alert(`tu t'es seulment trompé sur "${q1}"!`)
// } else if (q1 == a1 && q2 == a2) {
//     alert(`bieN JUEEE`);
// }

// exo 8

// let age = parseInt(prompt("age?"));

// if (age < 0) {
//     alert("mdr t 1 foetus");
// } else if (age > 100) {
//     alert("jure t vivan");
// } else if (age >= 18) {
//     alert("Vous êtes majeur, vous pouvez reserver!");
// } else if (age < 18) {
//     alert("bouuuuuuuu");
// }

// exo 9

// let q1 = prompt("moulah?");
// let q2 = prompt("vacances?");
// let q3 = prompt("minou?");

// if (q1 == 'oui' && q2 == 'oui' && q3 == 'oui') {
//     console.log("oké");
// } else if (q1 == 'oui' && q2 == 'oui' && q3 == 'non') {
//     console.log("Tout est parfait, partez en vacance !");
// } else if (q1 == 'oui' && q2 == 'non' && q3 == 'non') {
//     console.log("Vous pourriez partir en vacance si vous le voulez");
// } else if (q1 == 'non' && q2 == 'non' && q3 == 'non') {
//     console.log("Même si vous le voulez, vous ne pouvez pas partir.");
// } else if (q1 == 'non' && q2 == 'non' && q3 == 'oui') {
//     console.log("Même si vous le voulez, vous ne pouvez pas partir.");
// } else if (q1 == 'non' && q2 == 'oui' && q3 == 'non') {
//     console.log("charbonne fieu");
// } else if (q1 == 'non' && q2 == 'oui' && q3 == 'oui') {
//     console.log("haha t pas riche");
// } else {
//     console.log("réponds bien à drari");
// }