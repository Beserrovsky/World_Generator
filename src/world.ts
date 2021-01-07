import { all_terrains, terrains, base_terrains} from './terrains';

export class World {

    private map : terrains.Terrain[][];

    private base_terrain : typeof terrains.Terrain;

    constructor(public name: string, private map_width: number, private map_height: number, base_terrain: typeof terrains.Terrain | null = null){
        this.map = Array(this.map_height);

        if(base_terrain===null){
            base_terrain = this.getRandomTerrain(['base']);
        }

        this.base_terrain = base_terrain;

        this.createWorld();
    }

    private getRandomTerrain(flags : string[]): typeof terrains.Terrain{

        let available_terrains: typeof terrains.Terrain[] = [];

        let selected_terrain: typeof terrains.Terrain;

        if(flags.length > 0){
            flags.forEach(flag_name => {
                switch (flag_name){
                    case 'base':
                        base_terrains.forEach(terrain =>{
                            available_terrains.push(terrain);
                        }); // PERFORMACE ISSUE, CHANGE TO COMBINE AFTER
                    break;
                }
            });
        }else{ // No flags, add all terrains
            available_terrains = all_terrains;
        }

        return available_terrains[Math.floor(Math.random() * available_terrains.length)];
    }

    private createWorld(){
        console.log(this.base_terrain);
        for(let i = 0; i < this.map_height; i++){
            this.map[i] = new Array(this.map_width).fill(new this.base_terrain);
        }
    }

    public show(): void{
        let map_str: string = "";

        for(let i = 0; i < this.map_height; i++){
            for(let is = 0; is < this.map_width; is++){
                map_str+= ' '+ this.map[i][is].char; 
            }
            map_str+= '\n';
        }
        console.log(`${this.name}:\n${map_str}\n`);
    }

    public drawn(terrain: terrains.Terrain, x: number, y: number){
        if(x < this.map_width && y < this.map_height){
            this.map[x][y] = terrain;
        }else{
            console.log(`Erro em cordenadas passadas para desenhar um ${terrain.name} em ${x}:${y}`);
        }
    }

}
