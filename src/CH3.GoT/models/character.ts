/* eslint-disable no-unused-vars */
export type Category = 'king' | 'fighter' | 'counselor' | 'squire';

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
  chief?: Character; // For Counselor
  submission?: number; // For Squire
  master?: Character; // ForSquire
};

class Character implements CharacterStructure {
  static series = 'GoT';
  public isAlive: boolean;
  public message: string;
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public category: Category
  ) {
    this.isAlive = true;
    this.message = '';
  }
}
