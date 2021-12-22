export interface IBasicPost {
  title: string;
  text: string;
}

export interface IPost extends IBasicPost{
  id: number;
}

export type FilterType = keyof IBasicPost;
