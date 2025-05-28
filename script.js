

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


    document.getElementById('p4-sub').innerHTML = data.domanda1.sottotitolo;
    document.getElementById('p4-title').innerHTML = data.domanda1.titolo;
    document.getElementById('p4-titolo1').innerHTML = data.domanda1.titolo1;
    document.getElementById('p4-testo1').innerHTML = data.domanda1.testo1;
    document.getElementById('p4-titolo2').innerHTML = data.domanda1.titolo2;
    document.getElementById('p4-testo2').innerHTML = data.domanda1.testo2;


    document.getElementById('p5-sub').innerHTML = data.domanda2.sottotitolo;
    document.getElementById('p5-title').innerHTML = data.domanda2.titolo;
    document.getElementById('p5-testo1').innerHTML = data.domanda2.testo1;
    document.getElementById('p5-testo2').innerHTML = data.domanda2.testo2;
    document.getElementById('p5-testo3').innerHTML = data.domanda2.testo3;

    document.getElementById('p6-sub').innerHTML = data.domanda3.sottotitolo;
    document.getElementById('p6-title').innerHTML = data.domanda3.titolo;
    document.getElementById('p6-testo1').innerHTML = data.domanda3.testo1;
    document.getElementById('p6-testo2').innerHTML = data.domanda3.testo2;
    document.getElementById('p6-testo3').innerHTML = data.domanda3.testo3;
    document.getElementById('p6-testo4').innerHTML = data.domanda3.testo4;


    document.getElementById('p7-sub').innerHTML = data.domanda4.sottotitolo;
    document.getElementById('p7-title').innerHTML = data.domanda4.titolo;
    document.getElementById('p7-titolo1').innerHTML = data.domanda4.titolo1;
    document.getElementById('p7-testo1').innerHTML = data.domanda4.testo1;
    document.getElementById('p7-titolo2').innerHTML = data.domanda4.titolo2;
    document.getElementById('p7-testo2').innerHTML = data.domanda4.testo2;
    document.getElementById('p7-titolo3').innerHTML = data.domanda4.titolo3;
    document.getElementById('p7-testo3').innerHTML = data.domanda4.testo3;

    document.getElementById('end-title').innerHTML = data.conclusione.titolo;
    document.getElementById('end-text').innerHTML = data.conclusione.testo;
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

            document.getElementById('p4-sub').innerHTML = data.domanda1.sottotitolo;
            document.getElementById('p4-title').innerHTML = data.domanda1.titolo;
            document.getElementById('p4-titolo1').innerHTML = data.domanda1.titolo1;
            document.getElementById('p4-testo1').innerHTML = data.domanda1.testo1;
            document.getElementById('p4-titolo2').innerHTML = data.domanda1.titolo2;
            document.getElementById('p4-testo2').innerHTML = data.domanda1.testo2;

            document.getElementById('p5-sub').innerHTML = data.domanda2.sottotitolo;
            document.getElementById('p5-title').innerHTML = data.domanda2.titolo;
            document.getElementById('p5-testo1').innerHTML = data.domanda2.testo1;
            document.getElementById('p5-testo2').innerHTML = data.domanda2.testo2;
            document.getElementById('p5-testo3').innerHTML = data.domanda2.testo3;

            document.getElementById('p6-sub').innerHTML = data.domanda3.sottotitolo;
            document.getElementById('p6-title').innerHTML = data.domanda3.titolo;
            document.getElementById('p6-testo1').innerHTML = data.domanda3.testo1;
            document.getElementById('p6-testo2').innerHTML = data.domanda3.testo2;
            document.getElementById('p6-testo3').innerHTML = data.domanda3.testo3;
            document.getElementById('p6-testo4').innerHTML = data.domanda3.testo4;


            document.getElementById('p7-sub').innerHTML = data.domanda4.sottotitolo;
            document.getElementById('p7-title').innerHTML = data.domanda4.titolo;
            document.getElementById('p7-titolo1').innerHTML = data.domanda4.titolo1;
            document.getElementById('p7-testo1').innerHTML = data.domanda4.testo1;
            document.getElementById('p7-titolo2').innerHTML = data.domanda4.titolo2;
            document.getElementById('p7-testo2').innerHTML = data.domanda4.testo2;
            document.getElementById('p7-titolo3').innerHTML = data.domanda4.titolo3;
            document.getElementById('p7-testo3').innerHTML = data.domanda4.testo3;


           document.getElementById('end-title').innerHTML = data.conclusione.titolo;
           document.getElementById('end-text').innerHTML = data.conclusione.testo;

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

            document.getElementById('p4-sub').innerHTML = data.domanda1.sottotitolo;
            document.getElementById('p4-title').innerHTML = data.domanda1.titolo;
            document.getElementById('p4-titolo1').innerHTML = data.domanda1.titolo1;
            document.getElementById('p4-testo1').innerHTML = data.domanda1.testo1;
            document.getElementById('p4-titolo2').innerHTML = data.domanda1.titolo2;
            document.getElementById('p4-testo2').innerHTML = data.domanda1.testo2;

            document.getElementById('p5-sub').innerHTML = data.domanda2.sottotitolo;
            document.getElementById('p5-title').innerHTML = data.domanda2.titolo;
            document.getElementById('p5-testo1').innerHTML = data.domanda2.testo1;
            document.getElementById('p5-testo2').innerHTML = data.domanda2.testo2;
            document.getElementById('p5-testo3').innerHTML = data.domanda2.testo3;

            document.getElementById('p6-sub').innerHTML = data.domanda3.sottotitolo;
            document.getElementById('p6-title').innerHTML = data.domanda3.titolo;
            document.getElementById('p6-testo1').innerHTML = data.domanda3.testo1;
            document.getElementById('p6-testo2').innerHTML = data.domanda3.testo2;
            document.getElementById('p6-testo3').innerHTML = data.domanda3.testo3;
            document.getElementById('p6-testo4').innerHTML = data.domanda3.testo4;


            document.getElementById('p7-sub').innerHTML = data.domanda4.sottotitolo;
            document.getElementById('p7-title').innerHTML = data.domanda4.titolo;
            document.getElementById('p7-titolo1').innerHTML = data.domanda4.titolo1;
            document.getElementById('p7-testo1').innerHTML = data.domanda4.testo1;
            document.getElementById('p7-titolo2').innerHTML = data.domanda4.titolo2;
            document.getElementById('p7-testo2').innerHTML = data.domanda4.testo2;
            document.getElementById('p7-titolo3').innerHTML = data.domanda4.titolo3;
            document.getElementById('p7-testo3').innerHTML = data.domanda4.testo3;


          document.getElementById('end-title').innerHTML = data.conclusione.titolo;
          document.getElementById('end-text').innerHTML = data.conclusione.testo;


            });
    }
}
