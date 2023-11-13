export interface Post {
  Id: number;
  title: string;
  author: string;
  content: string;
  createdAt: string;
}

export class InitPosts{
  list: ListInt[]=[]
}