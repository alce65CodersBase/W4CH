# Week 4 - Challenge 3

## GoT DOM - React - Typescript

Crea un proyecto nuevo en React - TypeScrypt
Reproduce el challenge Week 3 - Challenge 1

- Utiliza el mismo modelo de datos

### Modelo de datos

En el Challenge 1 de la semana 3 se planteaba un modelo de datos basado en la herencia a partir de una clase abstracta.

En Juego de Tronos existen personajes. Todos esos personajes tienen la siguiente información:

- Nombre
- Familia a la que pertenece
- Edad
- Estado (vivo o muerto, aunque inicialmente todos están vivos)

Todos los personajes pueden realizar la acción de **comunicar**, pero cada tipo de personaje (no cada personaje) se comunica de un modo distinto. Nota: este método devuelve el string con la frase, no imprime por consola.

Todos los personajes pueden realizar la acción de **morir**, cambiándose su estado a muerto.

Todos los personajes pertenecen a la misma **serie**, "Juego de Tronos".

Cada uno de esos personajes puede ser un rey, un luchador, un asesor, o un escudero.

- Un rey, además de la información que tiene por ser personaje, tiene la siguiente información:
  - Años de reinado
  - Cuando se comunica dice: "Vais a morir todos"

- Un luchador, además de la información que tiene por ser personaje, tiene la siguiente información:
  - Arma que usa
  - Destreza (un valor entre 0 y 10)
  - Cuando se comunica dice: "Primero pego y luego pregunto"

- Un asesor, además de la información que tiene por ser personaje, tiene la siguiente información:
  - Personaje al que asesora (que puede ser rey, luchador, asesor o escudero)
  - Cuando se comunica dice: "No sé por qué, pero creo que voy a morir pronto"

- Un escudero, además de la información que tiene por ser personaje, tiene la siguiente información:
  - Personaje al que sirve (que sólo puede ser luchador)
  - Grado de servilismo (un valor entre 0 y 10)
  - Cuando se comunica dice: "Soy un loser"

En **este challenge** necesitaras un interface nuevo, que englobe todas las propiedades posibles de los diferentes tipos de personages (e.g. CharacterStructure)

```ts
export type CharacterStructure = {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  message: string;
  category: Category;
  kingdomYears?: number; // For King
  weapon?: string; // For Fighter
  skill?: number; // For Fighter
  chief?: CharacterStructure; // For Counselor
  submission?: number; // For Squire
  master?: CharacterStructure; // ForSquire
};
```

Los métodos comunicar y morir han dado paso a propiedades isAlive y message, y toda la funcionalidad corresponde a los componentes de React

### Datos

Crea un mock de datos con los siguientes personajes

- Joffrey Baratheon (rey),
- Jaime Lannister (luchador),
- Daenerys Targaryen (luchadora),
- Tyrion Lannister (asesor de Daenerys)
- Bronn (escudero de Jaime)

Añade un servicio **repository** que proporcione

### Interface

Utiliza la maqueta original (HTML/CSS) o los componentes que creaste para realizar los **componentes de React** necesarios para que funcione la aplicación

Haz que por cada personaje del array se muestre la ficha correspondiente en el navegador:

- En el elemento con clase `emoji` tiene que aparecer uno de estos emojis dependiendo del tipo de personaje:
  - 👑 🗡 🎓 🛡
- Si el personaje está muerto, su foto debe aparecer cabeza abajo (haz el CSS necesario);
- En la lista con clase `metadata`, haz que sólo aparezcan los `li` correspondientes al personaje.

1. Cuando el usuario haga clic en el botón "muere", tiene que cambiar el estado del personaje, y la interfaz debe reflejar el cambio.
2. Cuando el usuario haga clic en el botón "habla", el elemento con clase `comunicaciones` debe aparecer con el texto y la imagen correspondientes. Haz que este elemento `comunicaciones` tenga la clase `on` durante 2 segundos y luego se le quite.

### Testing

- Testea todos los elementos

### Evolución

Custom Hook + Context
FLUX + useReducer
