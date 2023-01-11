export type Gender = 'male' | 'female' | 'other' | 'prefer not to mention';
export type Account = 'personal' | 'pro' | 'business';

type hasId = {
  id: string;
};

export type PersonalData = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: Gender;
  email: string;
  hasNewsletter: boolean;
};

export type AccountData = {
  username: string;
  password: string;
  account: Account;
};
export type UserStructure = PersonalData & AccountData;

export type IdUserStructure = hasId & UserStructure;
