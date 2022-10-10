$('#service').on('change', function() {
    var value = $(this)
      .children('option:selected')
      .val()
  
    if (value == 1) {
      $('#valor').html('<img src="img/01.png" class="this"/> <br><strong>Esse é o macaco mais gay da linhagem, gosta de dar o cu pro macaco imperial 🤪, ele é um macaco afeminado! 🙊<strong>')
    } else if (value == 2) {
      $('#valor').html('<img src="img/02.jpg" class="this"/> <br><br><strong>🍌 Esse eo macaco supremo, fuma um banza, ri igual uma hiena e na larica, quase mata um, ele é um verdadeiro macaco 🙊<strong>')
    } else if (value == 3) {
      $('#valor').html('<img src="img/03.png" class="this"/> <br><strong>🍌 Esse é o macaco CALVO, ele vem de uma linhagem honrada, de macacos semi-carecas, só gosta de banana doce, fuma um banza 🦍</strong>')
    } else if (value == 4) {
      $('#valor').html('<img src="img/04.png" class="this"/> <br><strong>🦍 Esse é o macaco imperial fumante, seu nariz consegue absorver metade do oxigenio do ambiente, fuma um banza e cigarro, comedor de primas de macaco 🙊</strong>')
    }
  })