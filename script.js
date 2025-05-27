

fetch('testi.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('hero-title').innerHTML = data.hero.title;
    document.getElementById('hero-subtitle').innerHTML = data.hero.subtitle;
    document.getElementById('hero-description').innerHTML = data.hero.description;
    document.getElementById('intro').innerHTML = data.introduzione.titolo;
    document.getElementById('intro-testo').innerHTML = data.introduzione.testo;
  });