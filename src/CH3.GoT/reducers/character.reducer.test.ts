import { CharacterState, characterReducer } from './character.reducer';
import * as ac from './action.creator';
import { MOCK_KING } from '../mocks/characters';

describe('Given the reducer "characterReducer"', () => {
  let action: ac.CharacterAction;
  let initialState: CharacterState;
  describe('When the action is "Load"', () => {
    action = ac.loadCharacterAction([MOCK_KING]);
    initialState = {
      characters: [],
      whoIsTalking: null,
    };
    const r = characterReducer(initialState, action);
    test('Then the new state should de returned', () => {
      expect(r.characters).toEqual([MOCK_KING]);
    });
  });

  describe('When the action is "dead"', () => {
    action = ac.deadCharacterAction(MOCK_KING);
    initialState = {
      characters: [MOCK_KING, { ...MOCK_KING, name: 'Pumba' }],
      whoIsTalking: null,
    };
    const r = characterReducer(initialState, action);
    test('Then the new state should de returned', () => {
      expect(r.characters[0]).toHaveProperty('isAlive', false);
    });
  });

  describe('When the action is "startTalk"', () => {
    action = ac.startTalkCharacterAction(MOCK_KING);
    initialState = {
      characters: [MOCK_KING],
      whoIsTalking: null,
    };
    const r = characterReducer(initialState, action);
    test('Then the new state should de returned', () => {
      expect(r.whoIsTalking).toEqual(MOCK_KING);
    });
  });
  describe('When the action is "endTalk"', () => {
    action = ac.endTalkCharacterAction();
    initialState = {
      characters: [MOCK_KING],
      whoIsTalking: MOCK_KING,
    };
    const r = characterReducer(initialState, action);
    test('Then the new state should de returned', () => {
      expect(r.whoIsTalking).toBe(null);
    });
  });

  describe('When the action is invalid', () => {
    action = { type: 'any' };
    initialState = {
      characters: [MOCK_KING],
      whoIsTalking: null,
    };
    const r = characterReducer(initialState, action);
    test('Then the same state should de returned', () => {
      expect(r.characters).toEqual([MOCK_KING]);
      expect(r.whoIsTalking).toBe(null);
    });
  });
});
