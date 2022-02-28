/* Section pour le bouton qui fait retourner en haut de la page*/
const btn = document.querySelector('.btn'); // cherche la classe btn


/* To top: bouton qui fait remonter en haut de la page */
function totop() { 
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
};


/* le défilement est fluide quand on clique sur une ancre */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// LES COOKIES C LA VIE


function setcookie(x, y) {
  document.cookie = x + "=" + y + "; path=/; max-age= 604800";
};
function deletecookie(x) {
  document.cookie = x + "=; path=/; max-age= 1";
};
function getcookie(x) {
  let allcookies = document.cookie;
  if (allcookies.search(";") > 0) {
    let cookiesDICT;
    let cookiesLST = allcookies.split(";");
    for (let cookie of cookiesLST) {

    };
    return cookiesDICT[x];
  } else {
    if (allcookies.split("=")[0] == x) {
      return allcookies.split("=")[1];
    } else {
      return null;
    };

  };

};

