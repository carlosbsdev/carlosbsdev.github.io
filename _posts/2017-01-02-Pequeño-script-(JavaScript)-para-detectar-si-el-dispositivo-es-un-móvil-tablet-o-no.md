---
layout: post
title: Pequeño script (JavaScript) para detectar si el dispositivo es un móvil/tablet o no.
---

Con este sencillo código en javascript podemos saber que tipo de dispositivo está ejecutando el mismo. Ya sea un smartphone (móvil), tablet o laptop/pc.


Solo hay que añadir en el head:

```js
<script src="main.js"></script>
```

# Como se usa

```js
if(isDesktop()){
    //Desktop and others
}else{
    //Smartphones (Android, Iphone, BlackBerry) and Tablets
}

```

Esto puede resultar útil para según sea el dispositivo un smartphone o un pc aplicar diferentes acciones, como por ejemplo, insertar determinados 
archivos *.css, *.js o en temas de anuncios/publicidad o para utilizar y aprovechar las funciones según el dispositivo.


[isDesktop()](https://github.com/charlybs/isDesktop) en GitHub.