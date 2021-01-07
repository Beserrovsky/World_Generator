import { World } from './world';
import { terrains } from './terrains';

let worlds: World[] = [];

function logWorlds(): void{
    console.clear();
    for(let i =0; i < worlds.length; i++){
        worlds[i].show();
    }
}

worlds.push(new World('Lua', 2, 2 , terrains.Moon_Stone));

worlds.push(new World('Terra', 5, 5));

worlds.push(new World('Felps', 2, 3, terrains.Void));

worlds.push(new World('Grama', 5, 5));

logWorlds();
