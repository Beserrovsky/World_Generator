import { World } from './world';
import { terrains } from './terrains';

let worlds: World[] = [];

function logWorlds(): void{
    console.clear(); // REMOVE FOR DEBUGING WORLD CREATION
    for(let i =0; i < worlds.length; i++){
        worlds[i].show();
    }
}

worlds.push(new World('Lua', 2, 2 , ['base'], terrains.Moon_Stone));

worlds.push(new World('Terra', 5, 5));

worlds.push(new World('Beach Park', 3, 3, ['water']));

worlds.push(new World('Grama', 5, 5));

logWorlds();
