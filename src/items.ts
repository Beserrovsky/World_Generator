export namespace items{

  export class Item{
    public char = '§';
    public name = "None_Item";
    constructor(){}
  }

  export class Ground extends Item{
    public char = 'o';
    public name = "Terra";
  }

  export class Water extends Item{
    public char = '~';
    public name = "Água";
  }

  export class Moon_Stone extends Item{
    public char = 'w';
    public name = "Pedra Lunar";
  }
}
