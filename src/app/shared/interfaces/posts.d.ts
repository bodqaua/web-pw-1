export interface IBasicPost {
  title: string;
  text: string;
}

export interface IPost extends IBasicPost{
  id: number;
}
