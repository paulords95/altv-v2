import * as alt from "alt-server";
import * as chat from "chat";

const positions = {
  default: [-1062.4483642578125, -2985.73193359375, 13.17138671875],
  pallets: [824.2417602539062, -809.3406372070312, 26.5164794921875],
  praia_zancudo: [-2818.4833984375, 3603.6923828125, -0.4769287109375],
  aeroporto: [-1062.4483642578125, -2985.73193359375, 13.17138671875],
  altoagua: [4081.7802734375, -2030.3077392578125, 2431.27197265625],
  altocidade: [-774.7780151367188, -1226.123046875, 2511.56103515625],
  portaaviao: [3084.73, -4770.709, 15.26167],
  mazebank: [-75.8466, -826.9893, 243.3859],
};

const spawns = [
  { x: -695.1956176757812, y: 83.94725036621094, z: 55.85205078125 },
  { x: -527.6835327148438, y: -678.7252807617188, z: 33.6607666015625 },
  { x: 200.6637420654297, y: -935.2879028320312, z: 30.6783447265625 },
  { x: 897.7318725585938, y: -1054.6944580078125, z: 32.818359375 },
  { x: 363.1516418457031, y: -2123.156005859375, z: 16.052734375 },
  { x: -265.3582458496094, y: -1898.0703125, z: 27.7464599609375 },
];

const spawnModels = ["u_m_y_mani", "csb_mweather", "hc_driver", "mp_m_weapexp_01"];

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomListEntry(list) {
  return randomNumber(0, list.length - 1);
}


let globalCars = {};
let globalPlayerPos = {};

function registerPlayersBlips() {
  for (let p of alt.Player.all) {
    alt.emitClient(null, "createPlayerBlip", p.id, p.name, p.pos);
  }
}

function removePlayerBlips() {
  for (let p of alt.Player.all) {
    alt.emitClient(null, "deletePlayerBlip", p.id);
  }
}

alt.setInterval(() => {
  for (let p of alt.Player.all) {
    globalPlayerPos[p.socialId] = p.pos;
    alt.emitClient(null, "updatePlayerBlip", p.id, p.pos);
  }
}, 500);





alt.on("playerConnect", (player) => {
  if (player.name.includes("admin")) {
    player.kick();
    return;
  }

  player.model = spawnModels[getRandomListEntry(spawnModels)];
  player.setMeta("vehicles", []);
  const spawn = spawns[getRandomListEntry(spawns)];
  player.spawn(spawn.x, spawn.y, spawn.z, 0);
  alt.emitClient(player, "freeroam:spawned");
  alt.emitClient(player, "freeroam:Interiors");

  alt.log(`${player.name} connected`);

  registerPlayersBlips();
  alt.emitClient(player, "conectado");


  let connectTimeout = alt.setTimeout(() => {
    if (player && player.valid) {
      const playerCount = alt.Player.all.length;
      chat.broadcast(`{1cacd4}${player.name} {ffffff} {00ff00}entrou {ffffff}no armário..  (${playerCount} players dentro do armário)`);
      chat.send(player, "{80eb34}Digite {34dfeb}T {80eb34}e depois {34dfeb}/help {80eb34}para ver os comandos..");
    }
    alt.clearTimeout(connectTimeout);
  }, 1000);
});


alt.on("playerDisconnect", (player, reason) => {
  chat.broadcast(`${player.name} saiu do armário`);
  globalPlayerPos[player.socialId] = player.pos;

  if (globalCars[player.id] !== undefined) {
    for (let v of globalCars[player.id]) {
      v.destroy();
    }
    globalCars[player.id] = [];
  }

  removePlayerBlips();
});

chat.registerCmd("tpt", (player, args) => {
  if (args.length === 0) {
    alt.emitClient(player, "tpToWayPoint");
    return;
  }

  if (args.length === 1) {
    for (let p of alt.Player.all) {
      if (p.name.toLowerCase() === args[0].toLowerCase()) {
        player.spawn(p.pos.x, p.pos.y, p.pos.z);
        chat.broadcast(`{00FF00}${player.name}: /tp ${args[0]}`);
        return;
      }
    }

    for (let p in positions) {
      if (p.toLowerCase() === args[0].toLowerCase()) {
        player.spawn(positions[p][0], positions[p][1], positions[p][2], 1000);
        chat.broadcast(`${player.name}: /tp ${args[0]}`);
        return;
      }
    }

    chat.send(player, `Não foi possível encontrar a posição ou jogador`);
    return;
  }

  if (args.length === 2) {
    player.spawn(args[0], args[1], 100, 1000);
    chat.broadcast(`${player.name}: /tp ${args[0]} ${args[1]}`);
  }

  if (args.length === 3) {
    player.spawn(args[0], args[1], args[2], 1000);
    chat.broadcast(`${player.name}: /tp ${args[0]} ${args[1]} ${args[2]}`);
  }
});

chat.registerCmd("rmv", (player) => {
  if (globalCars[player.id] !== undefined) {
    for (let v of globalCars[player.id]) {
      v.destroy();
    }
    globalCars[player.id] = [];
  }

  chat.send(player, `Carros removidos`);
});

alt.onClient("rmv", (player) => {
  if (globalCars[player.id] !== undefined) {
    for (let v of globalCars[player.id]) {
      v.destroy();
    }
    globalCars[player.id] = [];
  }

  chat.send(player, `Carros removidos`);
});
