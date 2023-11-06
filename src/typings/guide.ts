export interface IGuidePreview {
  id         : string;
  title      : string;
  description: string;
  emoji      : string;
}

export interface IGuide {
  id         : string;
  title      : string;
  description: string;
  emoji      : string;
  image      : string;
  authorId   : string;
  author     : { username: string };
  isFavorite : boolean;
  likesCount : number;
  createdAt  : Date;
}
