import { World } from './world';
import { items } from './items';

let worlds: World[] = [];

function logWorlds(): void{
    console.clear();
    for(let i =0; i < worlds.length; i++){
        worlds[i].show();
    }
}

worlds.push(new World('Lua', 2, 2 , new items.Ground));

worlds.push(new World('Terra', 10, 10, new items.Ground));

logWorlds();

setTimeout(()=>{
    worlds[0].drawn(new items.Moon_Stone, 0, 0);
    worlds[0].drawn(new items.Moon_Stone, 0, 1);
    worlds[0].drawn(new items.Moon_Stone, 1, 0);
    worlds[0].drawn(new items.Moon_Stone, 1, 1);
    logWorlds();
},2000);
