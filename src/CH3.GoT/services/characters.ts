import { Counselor } from '../models/counselor';
import { Squire } from '../models/squire';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Character } from '../models/character';

export function createCharacters() {
  const data: Array<Character> = [
    new King('Joffrey', 'Baratheon', 33, 2),
    new Fighter('Jaime', 'Lannister', 33, 'espada', 8),
    new Fighter('Daenerys', 'Targaryen', 33, 'dragones', 9),
  ];
  data.push(new Counselor('Tyrion', 'Lannister', 33, data[2]));
  data.push(new Squire('Bronn', 'Aguas Negras', 33, 5, data[1] as Fighter));

  return data;
}
