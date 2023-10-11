export interface ICard {
  character: ICharacter;
}

export interface ICharacter {
  id: string;
  image: string;
  name: string;
}

export interface IControllers {
  page: number;
  pages: number[];
  prevPage: React.MouseEventHandler<HTMLButtonElement>;
  nextPage: React.MouseEventHandler<HTMLButtonElement>;
  allPages: number[];
}
