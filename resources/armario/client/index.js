import * as alt from "alt";

let myID = 0;
let blips = {};

alt.onServer("createPlayerBlip", (playerID, playerName, pos) => {
  if (myID == playerID) {
    return;
  }

  if (blips[playerID] !== undefined) {
    return;
  }

  blips[playerID] = new alt.PointBlip(pos.x, pos.y, pos.z);
  blips[playerID].sprite = 286;
  blips[playerID].color = 47;
  blips[playerID].name = playerName;
});

alt.onServer("deletePlayerBlip", (playerID) => {
  if (blips[playerID] !== undefined) {
    blips[playerID].destroy();
    delete blips[playerID];
  }
});

alt.onServer("updatePlayerBlip", (playerID, pos) => {
  if (blips[playerID] !== undefined) {
    blips[playerID].pos = pos;
  }
});
