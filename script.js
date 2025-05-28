

fetch('testi.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('hero-title').innerHTML = data.hero.title;
    document.getElementById('hero-subtitle').innerHTML = data.hero.subtitle;
    document.getElementById('hero-description').innerHTML = data.hero.description;
    document.getElementById('intro').innerHTML = data.introduzione.titolo;
    document.getElementById('intro-testo').innerHTML = data.introduzione.testo;
    document.getElementById('p3-sub').innerHTML = data.domande.sottotitolo;
    document.getElementById('p3-title').innerHTML = data.domande.titolo;
    document.getElementById('q1').innerHTML = data.domande.domanda1;
    document.getElementById('q2').innerHTML = data.domande.domanda2;
    document.getElementById('q3').innerHTML = data.domande.domanda3;
    document.getElementById('q4').innerHTML = data.domande.domanda4;
    document.getElementById('q5').innerHTML = data.domande.domanda5;
  });



  function changeLanguage(lang){
    if (lang === 'it'){
        fetch('testi.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('hero-title').innerHTML = data.hero.title;
            document.getElementById('hero-subtitle').innerHTML = data.hero.subtitle;
            document.getElementById('hero-description').innerHTML = data.hero.description;
            document.getElementById('intro').innerHTML = data.introduzione.titolo;
            document.getElementById('intro-testo').innerHTML = data.introduzione.testo;
            document.getElementById('p3-sub').innerHTML = data.domande.sottotitolo;
            document.getElementById('p3-title').innerHTML = data.domande.titolo;
            document.getElementById('q1').innerHTML = data.domande.domanda1;
            document.getElementById('q2').innerHTML = data.domande.domanda2;
            document.getElementById('q3').innerHTML = data.domande.domanda3;
            document.getElementById('q4').innerHTML = data.domande.domanda4;
            document.getElementById('q5').innerHTML = data.domande.domanda5;
            });
        } else if (lang === 'en'){
        fetch('dates.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('hero-title').innerHTML = data.hero.title;
            document.getElementById('hero-subtitle').innerHTML = data.hero.subtitle;
            document.getElementById('hero-description').innerHTML = data.hero.description;
            document.getElementById('intro').innerHTML = data.introduzione.titolo;
            document.getElementById('intro-testo').innerHTML = data.introduzione.testo;
            document.getElementById('p3-sub').innerHTML = data.domande.sottotitolo;
            document.getElementById('p3-title').innerHTML = data.domande.titolo;
            document.getElementById('q1').innerHTML = data.domande.domanda1;
            document.getElementById('q2').innerHTML = data.domande.domanda2;
            document.getElementById('q3').innerHTML = data.domande.domanda3;
            document.getElementById('q4').innerHTML = data.domande.domanda4;
            document.getElementById('q5').innerHTML = data.domande.domanda5;
            });
    }
}
