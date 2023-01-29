# Week 3 - Challenge 3 Refactoring

## Series

Aquí tienes una aplicación maquetada con HTML y CSS. Se trata de una aplicación que gestiona un listado de series, separándolas entre series vistas y no vistas.

Esta aplicación se alimentará de un objeto JS que tienes en el archivo `series.js`.

Tienes que mostrar un listado de series, separándolas entre vistas y no vistas. Cada serie tiene que mostrar toda la información que ves en la maqueta. Si la serie es no vista, sus estrellas tienen que estar a 0 y el usuario debería poder hacer clic para valorar la serie con las estrellas que crea necesario. Al hacer clic en una estrella, la aplicación debe modificar la valoración y la serie debe pasar de no vista a vista (no hay ninguna manera de pasar una serie de vista a no vista).

Si el usuario hace click en el icono de la x, la serie se debe eliminar.

## Challenge Refactoring: React

### Refactor 1

Se refactoriza completamente usando React

Componentes

- App -> renderiza Series.page
- Series (page)
  -> define los estados de la app: series / series + filtros
  -> define la lógica de modificación de los estados (handlers)
  -> recibe los datos del servicio getSeries y actualiza con ellos los estaos
  -> renderiza el componente **Header**
  -> renderiza dos instancias del componente **List** pasándole
    -> el estado filtrado y el nombre del filtro empleado
    -> las funciones de gestión del estado deleteSerie y updateScore

- Header -> renderiza el titulo

- List
  -> recibe el estado filtrado y el nombre del filtro empleado
  -> recibe las funciones de gestión del estado deleteSerie y updateScore
  -> itera sobre el estado filtrado
  -> renderiza las veces que corresponda el componente **SeriesCard** pasándole
    -> la serie correspondiente a la iteración
    -> las funciones de gestión del estado deleteSerie y updateScore
- SeriesCard
  -> recibe una serie
  -> recibe las funciones de gestión del estado deleteSerie y updateScore
  -> muestra la información de la serie
  -> renderiza un botón para borrar
    -> el evento click en el botón desencadena la función deleteSerie
  -> renderiza el componente **ScoreStars** pasándole
    -> la puntuación de la serie
    -> la función de gestión del estado updateScore
- ScoreStars
  -> recibe la puntuación de una serie
  -> recibe la función de gestión del estado updateScore
  -> muestra 5 estrellas cuyos colores dependen de la puntuación recibida
  -> si la puntuación es 0, las estrellas son un botón para el usuario
    -> el evento click en una estrella desencadena la función updateScore

### Refactor 2

Se crea un custom Hook que se encarga del estado y su lógica

- la lógica del estado (handlers)
  -> las funciones de gestión del estado deleteSerie y updateScore
- los estados
  -> define los estados de la app: series / series + filtros
-> recibe los datos del servicio getSeries y actualiza con ellos los estados

- Series (page)
  -> renderiza el componente **Header**
  -> renderiza dos instancias del componente **List** pasándole
    -> el estado filtrado y el nombre del filtro empleado
    -> las funciones de gestión del estado deleteSerie y updateScore

### Refactor 3

Se crea un contexto que almacena todos lo exportado por el custom hook

- estados de la app
  -> series / series + filtros
- la lógica del estado (handlers)
  -> las funciones de gestión del estado deleteSerie y updateScore
-> recibe los datos del servicio getSeries y actualiza con ellos los estados

Los estados y las funciones de lógica del estado las toman los componentes que las necesitan
directamente del contexto: no hay paso por props

### Refactor 4

No se necesitan estados independientes para los filtros:
  -> se limitan a funciones que devuelven los datos del estado ya filtrados

## Resultado

- useSeries (hook en el contexto)
  -> define los estados de la app: series
  -> define los filtros posibles para las series (funciones)
  -> define la lógica de modificación de los estados (handlers)
  -> recibe los datos del servicio getSeries y actualiza con ellos los estados (useEffect)

- App -> renderiza Series.page

- Series (page)
  -> renderiza el componente **Header**
  -> renderiza dos instancias del componente **List** pasándole
    -> el nombre del filtro empleado

- Header -> renderiza el titulo

- List
  -> recibe el nombre del filtro empleado
  -> toma del contexto la función de filtrado y el total de series
  -> itera sobre el estado filtrado
  -> renderiza las veces que corresponda el componente **SeriesCard** pasándole
    -> la serie correspondiente a la iteración

- SeriesCard
  -> recibe una serie
  -> toma del contexto la función de gestión del estado deleteSerie
  -> muestra la información de la serie
  -> renderiza un botón para borrar
    -> el evento click en el botón desencadena la función deleteSerie
  -> renderiza el componente **ScoreStars** pasándole
    -> la serie

- ScoreStars
  -> recibe la serie
  -> toma del contexto la función de gestión del estado updateScore
  -> muestra 5 estrellas cuyos colores dependen de la puntuación recibida
  -> si la puntuación es 0, las estrellas son un botón para el usuario
    -> el evento click en una estrella desencadena la función updateScore
