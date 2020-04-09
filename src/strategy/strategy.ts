import { GameState } from '../models/game-state.model';
import { PLAYER_COMMAND } from '../enums/player-command.enum';
import { Heuristics } from '../utils/heuristics';

export class Strategy {
  constructor(public gameState: GameState) {}

  public defaultStrategy(): PLAYER_COMMAND {
    return Heuristics.getBestMove(this.gameState);
  }
}
