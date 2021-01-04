import { World } from './world';
import { items } from './items';

let earth = new World('Terra', 5, items.Ground);

let moon = new World('Lua', 2, items.Ground);
moon.show();

earth.show();
