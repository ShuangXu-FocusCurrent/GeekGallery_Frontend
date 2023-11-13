export interface ListPosts{
  Id: number;
  title: string;
  author:string;
  content: string;
  createdAt: string;
};

export class InitPosts{
  list: ListPosts[]=[]
}