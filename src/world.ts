import { items } from './items';

export class World {

    private map : items.Item[][];

    constructor(public name: string, private map_width: number, private map_height: number, private base_item: items.Item){
        this.map = Array(this.map_height);
        this.createWorld();
    }

    private createWorld(){
        for(let i = 0; i < this.map_height; i++){
            this.map[i] = new Array(this.map_width).fill(this.base_item);
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

    public drawn(item: items.Item, x: number, y: number){
        if(x < this.map_width && y < this.map_height){
            this.map[x][y] = item;
        }else{
            console.log(`Erro em cordenadas passadas para desenhar um ${item.name} em ${x}:${y}`);
        }
    }

}
