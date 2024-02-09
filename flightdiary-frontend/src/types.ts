export interface Diaries {
  id: number;
  date: string;
  weather: string;
  visibility: string;
  comment: string;
}

// export Diary without id
export type Diary = Omit<Diaries, 'id'>;
