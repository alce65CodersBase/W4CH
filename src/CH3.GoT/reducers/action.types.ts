// Se puede utilizar un objeto o un enum
// export const actionTypes = {
//   load = 'character@load',
//   dead: 'characters@dead',
//   startTalk: 'characters@start_talk',
//   endTalk: 'characters@end_talk',
// };

export enum characterActionTypes {
  'load' = 'character@load',
  'dead' = 'characters@dead',
  'startTalk' = 'characters@start_talk',
  'endTalk' = 'characters@end_talk',
}
