let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("jquery");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("bootstrap");
        habilidades[6].classList.add("angular");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("equipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Animación del texto

var animationDelay = 2500;

animateHeadline($('.cd-headline'));

function animateHeadline($headlines) {
   $headlines.each(function(){
      var headline = $(this);
      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
      //other checks here ...
   });
}

function hideWord($word) {
    var nextWord = takeNext($word);
    switchWord($word, nextWord);
    setTimeout(function(){ hideWord(nextWord) }, animationDelay);
 }
 
 function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
 }
 
 function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
 }

 singleLetters($('.cd-headline.letters').find('b'));

function singleLetters($words) {
   $words.each(function(){
      var word = $(this),
          letters = word.text().split(''),
          selected = word.hasClass('is-visible');
      for (i in letters) {
         letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
      }
      var newLetters = letters.join('');
      word.html(newLetters);
   });
}
