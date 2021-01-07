export namespace terrains{

  export class Terrain{
    public char = '§';
    public name = "Terreno_invalido";
    constructor(){}
  }

  export class Void implements Terrain{
    public char = ' ';
    public name = "Vazio";
  }

  export class Dirt implements Terrain{
    public char = 'o';
    public name = "Terra";
  }

  export class Grass implements Terrain{
    public char = '´';
    public name = "Grama";
  }

  export class Sand implements Terrain{
    public char = '∴';
    public name = "Areia";
  }

  export class Water implements Terrain{
    public char = '~';
    public name = "Água";
  }

  export class Moon_Stone implements Terrain{
    public char = 'w';
    public name = "Pedra Lunar";
  }
}

export const all_terrains: typeof terrains.Terrain[] = [
  terrains.Void,
  terrains.Dirt,
  terrains.Grass,
  terrains.Sand,
  terrains.Water,
  terrains.Moon_Stone
];

export const base_terrains: typeof terrains.Terrain[] = [
  terrains.Dirt,
  terrains.Grass,
  terrains.Sand,
  terrains.Water,
  terrains.Moon_Stone
];
