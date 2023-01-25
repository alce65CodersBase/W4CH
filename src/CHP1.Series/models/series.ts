export type HasId = {
  id: number;
};

export type ProtoSeries = {
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export type Series = HasId & ProtoSeries;
