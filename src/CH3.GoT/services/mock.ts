import { King } from '../models/king';

export const MOCK_KING = new King('Simba', 'Leon', 33, 2);

export const MOCK_DATA = [
  {
    name: 'Simba',
    family: 'Leon',
    age: 33,
    category: 'king',
    kingdomYears: 2,
  },
];

export const MOCK_DATA_JSON = [
  {
    name: 'Joffrey',
    family: 'Baratheon',
    age: 33,
    category: 'king',
    _isAlive: true,
    message: 'Vais a morir todos',
    kingdomYears: 2,
  },
  {
    name: 'Jaime',
    family: 'Lannister',
    age: 33,
    category: 'fighter',
    _isAlive: true,
    message: 'Primero pego y luego pregunto',
    weapon: 'espada',
    skill: 8,
  },
  {
    name: 'Daenerys',
    family: 'Targaryen',
    age: 33,
    category: 'fighter',
    _isAlive: true,
    message: 'Primero pego y luego pregunto',
    weapon: 'dragones',
    skill: 9,
  },
  {
    name: 'Tyrion',
    family: 'Lannister',
    age: 33,
    category: 'counselor',
    _isAlive: true,
    message: 'No se por qué, pero creo que voy a morir pronto',
    chief: {
      name: 'Daenerys',
      family: 'Targaryen',
      age: 33,
      category: 'fighter',
      _isAlive: true,
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
    _isAlive: true,
    message: 'Soy un looser',
    submission: 5,
    master: {
      name: 'Jaime',
      family: 'Lannister',
      age: 33,
      category: 'fighter',
      _isAlive: true,
      message: 'Primero pego y luego pregunto',
      weapon: 'espada',
      skill: 8,
    },
  },
];
