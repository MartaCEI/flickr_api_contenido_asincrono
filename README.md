# URL de las imágenes de fotos
Puedes crear el URL de una foto fuente una vez que tengas la información sobre su ID, ID del servidor y el secreto que se envía a través de muchos métodos API de recopilación.

La URL toma el siguiente formato:

#
# Uso típico
#

https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

#
# Formato de URL único para el tamaño de 500px
#

https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg

#
# Las originales pueden tener una extensión diferente de formato del archivo
#

https://live.staticflickr.com/{server-id}/{id}_{o-secret}_o.{o-format}

#
# Ejemplo
#   server-id: 7372
#   photo-id: 12502775644
#   secret: acfd415fa7
#   size: w
#

https://live.staticflickr.com/7372/12502775644_acfd415fa7_w.jpg

Sufijos de tamaño
La variedad de tamaños que ofrece Flickr tienen sufijos con las siguientes letras:

Sufijo	Clase	Borde más grande (en px)	Notas
s	miniatura	75	cuadrado recortado
q	miniatura	150	cuadrado recortado
t	miniatura	100	
m	pequeño	240	
n	pequeño	320	
w	pequeño	400	
(none)	mediano	500	
z	mediano	640	
c	mediano	800	
b	grande	1024	
h	grande	1600	tiene un secreto único; el propietario de la foto la puede restringir
k	grande	2048	tiene un secreto único; el propietario de la foto la puede restringir
3k	extra grande	3072	tiene un secreto único; el propietario de la foto la puede restringir
4k	extra grande	4096	tiene un secreto único; el propietario de la foto la puede restringir
f	extra grande	4096	tiene un secreto único; el propietario de la foto la puede restringir; existe únicamente para fotos con relación de aspecto de 2:1
5k	extra grande	5120	tiene un secreto único; el propietario de la foto la puede restringir
6k	extra grande	6144	tiene un secreto único; el propietario de la foto la puede restringir
o	original	arbitrario	tiene un secreto único; el propietario de la foto la puede restringir; los archivos tienes datos EXIF completos; los archivos no se pueden rotar; los archivos pueden utilizar una extensión de archivo arbitraria
Secretos
Todos los URL de las imágenes de fotos usan un valor secreto que proporcionan los métodos de recopilación de API. Todos los tamaños menores a H (1600) usan un secreto compartido. Todos los tamaños, incluyendo H (1600), usan un secreto único individual para cada una. El tamaño original siempre usa su propio secreto, sin importar el tamaño.
