import { items } from './items';

export class World {

    private map : items.Item[][];

    constructor(public name: string, private map_size: number, private base_item: any){
        this.map = Array(this.map_size);
        this.createWorld();
    }

    private createWorld(){
        for(let i = 0; i < this.map_size; i++){
            this.map[i] = new Array(this.map_size).fill(new this.base_item);
        }
    }

    public show(): void{
        let map_str: string = "";

        for(let i = 0; i < this.map_size; i++){
            for(let is = 0; is < this.map_size; is++){
                map_str+= ' '+ this.map[i][is].char; 
            }
            map_str+= '\n';
        }

        console.log(`${this.name} está mais ou menos assim:\n${map_str}`);
    }

}
