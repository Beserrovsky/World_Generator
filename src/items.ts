export namespace items{

  export class Item{
    public char = '0';
    constructor(){}
  }

  export class Ground extends Item{
    public char = 'o';
  }

  export class Water extends Item{
    public char = '~';
  }
}
