import { StateStructure } from '../components/app/app';
import { AccountData, PersonalData } from '../models/user';

export const mockState: StateStructure = {
  personal: {} as PersonalData,
  account: {} as AccountData,
  step: 1,
} as StateStructure;

export const mockSetState = () => {
  // Mock for the state setter
};
