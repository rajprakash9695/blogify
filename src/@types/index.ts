export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IBlog {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  user: IUser;
  createdAt: string;
  updatedAt: string;
}

export interface IUsers {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
