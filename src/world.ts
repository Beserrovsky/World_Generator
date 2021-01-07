import { all_terrains, terrains, base_terrains} from './terrains';

export class World {

    private map : terrains.Terrain[][];

    private base_terrain : typeof terrains.Terrain;

    constructor(public name: string, private map_width: number, private map_height: number, private flags: string[] = ['base'] , base_terrain: typeof terrains.Terrain | null = null){
        if(base_terrain === null || base_terrain === terrains.Terrain){ // IF NOT BASE TERRAIN CALLED
            base_terrain = this.getRandomTerrain();
        }

        this.base_terrain = base_terrain;

        this.createWorld();
    }

    private getRandomTerrain(): typeof terrains.Terrain{

        let available_terrains: typeof terrains.Terrain[] = [];

        let selected_terrain: typeof terrains.Terrain;

        if(this.flags.length > 0){

            //IMPORTANT FLAGS FOR GETTING TERRAIN
            
            if(this.flags.some(flag=>{ return (flag === 'water') })){
                return terrains.Water;
            }

            //ADDABLE FLAGS FOR GETTING TERRAIN
            this.flags.forEach(flag_name => {
                switch (flag_name){
                    case 'base':
                        base_terrains.forEach(terrain =>{
                            available_terrains.push(terrain);
                        });
                    break;
                }
            });
        }else{ // No flags, add all terrains
            available_terrains = all_terrains;
        }

        return available_terrains[Math.floor(Math.random() * available_terrains.length)];
    }

    private createWorld(){
        console.log(`${this.name} flags are: ${this.flags}`);
        console.log(`${this.name} base terrain is: ${this.base_terrain}`);

        this.map = new Array(this.map_width);

        for(let x = 0; x < this.map_width; x++){

            this.map[x] = new Array(this.map_height);

            for(let y = 0; y < this.map_height; y++){

                this.drawn(x, y, this.base_terrain);
            }
        }
    }

    public show(): void{
        let map_str: string = "";

        for(let x = 0; x < this.map_width; x++){
            for(let y = 0; y < this.map_height; y++){

                map_str+= ' '+ this.map[x][y].char; 

            }
            map_str+= '\n';
        }
        console.log(`${this.name}:\n${map_str}\n`);
    }

    public drawn(x: number, y: number, terrain: typeof terrains.Terrain){
        if(x < this.map_width && y < this.map_height){
            this.map[x][y] = new terrain;
        }else{
            console.log(`Erro em cordenadas passadas para desenhar um ${terrain.name} em ${x}:${y}`);
        }
    }

}
