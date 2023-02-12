import { CharacterStructure } from '../models/character';

export const MOCK_KING: CharacterStructure = {
  name: 'Simba',
  family: 'Leon',
  age: 33,
  category: 'king',
  isAlive: true,
  message: '',
  kingdomYears: 2,
};

export const MOCK_DATA = [MOCK_KING];

export const MOCK_DATA_JSON = [
  {
    name: 'Joffrey',
    family: 'Baratheon',
    age: 33,
    category: 'king',
    isAlive: true,
    message: 'Vais a morir todos',
    kingdomYears: 2,
  },
  {
    name: 'Jaime',
    family: 'Lannister',
    age: 33,
    category: 'fighter',
    isAlive: true,
    message: 'Primero pego y luego pregunto',
    weapon: 'espada',
    skill: 8,
  },
  {
    name: 'Daenerys',
    family: 'Targaryen',
    age: 33,
    category: 'fighter',
    isAlive: true,
    message: 'Primero pego y luego pregunto',
    weapon: 'dragones',
    skill: 9,
  },
  {
    name: 'Tyrion',
    family: 'Lannister',
    age: 33,
    category: 'counselor',
    isAlive: true,
    message: 'No se por qué, pero creo que voy a morir pronto',
    chief: {
      name: 'Daenerys',
      family: 'Targaryen',
      age: 33,
      category: 'fighter',
      isAlive: true,
      message: 'Primero pego y luego pregunto',
      weapon: 'dragones',
      skill: 9,
    },
  },
  {
    name: 'Bronn',
    family: 'Aguas Negras',
    age: 33,
    category: 'squire',
    isAlive: true,
    message: 'Soy un looser',
    submission: 5,
    master: {
      name: 'Jaime',
      family: 'Lannister',
      age: 33,
      category: 'fighter',
      isAlive: true,
      message: 'Primero pego y luego pregunto',
      weapon: 'espada',
      skill: 8,
    },
  },
];
