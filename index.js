/*
  (c) TCMB Project
  CC0 1.0 Universal
  https://creativecommons.org/publicdomain/zero/1.0/
*/

import { world, system } from "@minecraft/server";
import * as manifest from "./manifest";

let overworld = world.getDimension('overworld');
let scriptevent_recevie = system.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id == 'tcmb_minecart_engine:initalized') {
    overworld.runCommandAsync('scriptevent tcmb_minecart_engine:regist_tcmanifest ' + JSON.stringify(manifest.default));
    system.afterEvents.scriptEventReceive.unsubscribe(scriptevent_recevie);
  }
}, { namespaces: ['tcmb_minecart_engine'] });
