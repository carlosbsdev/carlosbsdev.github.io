---
layout: post
title: Cash, una alternativa ultra ligera de jQuery de menos de 4kB.
---

Cash es una pequeña librería diseñada pensando en los navegadores modernos que sigue la sintaxis del famoso jQuery para manipular el DOM.
Gracias a su diseño, que hace uso de las características de los navegadores modernos, consigue reducir drásticamente su peso (menos de 4kB).

Si utilizas jQuery en tu día a día, usar Cash te resultará casi idéntico, ya que implementa las funcionalidades que ya conoces en jQuery, pero con 
la ventaja de que Cash (~4kB) ocupa un tercio del peso de jQuery 3.0 (~34kB).

Un ejemplo de como empezar a usarlo:

```js
<script src="https://cdn.jsdelivr.net/cash/1.3.0/cash.min.js"></script>
<script>
$(function(){

  $('html').addClass('dom-loaded');

  $('<footer>Appended with cash</footer>').appendTo(document.body);

});
</script>
```
Si buscamos una alternativa a jQuery buena, bonita y barata (gratis, licencia MIT) y esta librería cumple tus necesidades, además de ser ultra ligera, lo que beneficia 
a la velocidad de carga de las webs, creo que es una de la mejores alternativas posibles actualmente.

[Cash](https://github.com/kenwheeler/cash) en GitHub.
