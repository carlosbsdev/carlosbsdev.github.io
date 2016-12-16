---
layout: post
title: Una forma sencilla de detectar si el visitante tiene Adblock activado en tu página web.
---

Con este pequeño "truco" hecho en Javascript puro, podremos detectar en cualquier página si el navegador está bloqueando los anuncios. Esto significa que el cliente tiene instalado algún tipo de plugin o extensión bloqueadora de anuncios, como el famoso AdbBlock Plus, Ublock o similares.

Solo hay que añadir 

```js
<script>advertisement.js</script>
```
antes de la etiqueta de cierre del body. 

Y el script (está en el repositorio) que simplemente chequea si existe un elemento. Dependiendo de si existe o no sabremos si se han bloqueado nuestros anuncios o no, y llevar a cabo las acciones que deseemos, como mostrar un mensaje en el lugar donde tendrian que estar nuestros anuncios, o cualquier otra acción.

Este script se puede modificar completamente a gusto de cada desarrollador e implementarlo en tantas páginas queramos.

[AdBlockerDetector](https://github.com/charlybs/AdBlockerDetector) en GitHub.
