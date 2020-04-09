'use strict';

import { GameState } from './models/game-state.model';
import { Strategy } from './strategy/strategy';

let fs = require('fs');
let readline = require('readline');
let stateFileName = 'state.json';

let stateFile: any;
let gameState: GameState;
// @ts-ignore
function executeRound(roundNumber) {
  // Read the current state and choose an action
  stateFile = fs.readFileSync(`./rounds/${roundNumber}/${stateFileName}`);
  stateFile = JSON.parse(stateFile);
  setupEntities();

  const strategy = new Strategy(gameState);
  const command = strategy.defaultStrategy();
  console.log(`C;${roundNumber};${command}`);
}

function setupEntities() {
  gameState = new GameState(stateFile);
}

/***
 * Runs the bot using standard in/out
 * The starter-pack will use this to initiate new rounds,
 * and in turn get a new command from the bot
 */
let consoleReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
consoleReader.on('line', (roundNumber: any) => {
  executeRound(roundNumber); // Read in the current round number
});

// executeRound(1);
