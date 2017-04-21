---
layout: post
title: Script en bash para automatizar la creación de virtualhost en Apache2 con HTTPS y LetsEncrypt
---

Útil script en bash el cual permite automatizar crear o eliminar virtualhost en Apache2. Probado en ubuntu. 
Permite la opción de crear el virtualhost con https y un certificado self-signed, pudiendo añadirle más tarde un certificado firmado por LetsEncrypt.
Con la opción https, el script fuerza al dominio siempre a https y elimina las www. y https://www. a su correspondiente dirección sin ellas, algo que personalmente se agradece.

Como dato, si usamos LetsEncrypt para obtener un certificado firmado por una entidad oficial, deberemos generar el certificado para www.dominio.com y dominio.com.
Ya que eso permite una correcta redirección de htpps://www.dominio.com a https://dominio.com. Esto se consigue una vez con el virtualhost creado ejecutar un simple comando:
```bash

$ letsencrypt -d www.domino.com -d dominio.com

```

Si no queremos eliminar las www. del dominio deberemos modificar algunas reglas dentro del <virtualhost> en www.dominio.com.conf, aunque no lo recomiendo.
Realmente ahorra tiempo en configuraciones de virtualhost, aunque siempre puedes retocar más tarde pequeños detalles para que se adapte a ti.


[virtualhost Script](https://github.com/charlybs/virtualhost) en GitHub.
