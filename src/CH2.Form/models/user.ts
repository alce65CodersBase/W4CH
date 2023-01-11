type Gender = 'male' | 'female' | 'other' | 'prefer not to mention';
type Account = 'personal' | 'pro' | 'business';

type hasId = {
  id: string;
};

export type UserStructure = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: Gender;
  email: string;
  hasNewsletter: boolean;
  username: string;
  password: string;
  account: Account;
};

export type IdUserStructure = hasId & UserStructure;
