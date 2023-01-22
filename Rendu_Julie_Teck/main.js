// Veuillez attendre 1 minutes pour avoir toutes les animations du site
// Toutes les 3 millisecondes, écrit dans la console une phrase
const interval = setInterval(() => console.log("JUST MONIKA"), 3 * 100);

// Toutes les 30 secondes, ajoute un effet de glitch sur la page pendant 30 secondes
setInterval(() => {
  // Variables
  const paragraphe = document.querySelector("p")
  const head = document.querySelector(".dokidoki")
  const monika = document.querySelector(".monika")
  const audio = document.querySelector(".audio")
  // Récupère la date dans la variable date
  const date = new Date();
  (date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds());

  // Récupère variable secondes
  // Si les secondes sont supérieures ou égales à 30, ajoute l'animation "glitched" sur l'image titre et le bloc de texte au dessus de la vidéo + toutes les minutes apparait une image pendant 1 seconde
  let seconds = date.getSeconds();
  if (seconds >= 30)
    paragraphe.classList.toggle("glitch"),
    head.classList.toggle("glitch"),
    console.log("glitched")
    else if (seconds < 2) monika.classList.toggle("hidden"), audio.play(), audio.volume = 0.1
}, 1000)

// Si bouton cliqué, changement de la navbar
const bouton = document.querySelector("#bouton")
const navbar = document.querySelector("ul")
bouton.addEventListener("click", () =>
  navbar.innerHTML = "JUST MONIKA",)

// Si bouton cliqué, changement d'image des personnages
// Variables des images
const imgchara = document.querySelector(".img1")
const imgcharahorror = document.querySelector(".img2")
// Event des images
bouton.addEventListener("click", () =>
  imgchara.classList.toggle("hidden"),)
bouton.addEventListener("click", () =>
  imgcharahorror.classList.toggle("hidden"))
  
// Si bouton cliqué, le paragraphe de fin change
// Variable paragraphe
const pfin = document.querySelector(".p2")
bouton.addEventListener("click", () =>
  pfin.innerHTML ="It's just the two fo us now ♥")

// Si bouton cliqué, change la couleur des images
// Variable couleur image titre
const titleimg = document.querySelector(".dokidoki")
bouton.addEventListener("click", () =>
  titleimg.classList.add("invert")
)

// Toutes les 10 secondes, écrit dans la console une phrase au hasard
setInterval(() => {
  const sentence = ["There's no one here, it's just the both of us", "As long as we're alone and safe together, this really is our home", "Then again, you're still here with me, aren't you...?",
"You know, I'm kind of jealous that everyone else in the club had scenes outside of school too...","I've been imagining all the romantic things we could do if we went on a date...",
"When you're here, everything that we do is fun", "I can try acting a little more creepy for you. Ehehe~"]
// Récupère la longueur de la liste "sentence"
  let length = sentence.length
  // Random entre les chiffres de la longueur length
  let r = Math.floor(Math.random()*length)
  sentence.forEach(elm =>
    console.log(`${sentence[r]}`))
}, 10*1000);
