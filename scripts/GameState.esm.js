import { Block } from "./Block.esm.js";
import { gameLevels } from "./gameLevels.esm.js";

export class GameState {
   constructor(level) {
      const correctLevel = Number(level) - 1;
      let _gameBoard = gameLevels[correctLevel]
         .board
         .map(({ x, y, kind }) => new Block(x, y, kind));
      this._isGamePaused = false;
      this._level = level;

      this.getGameBoard = () => _gameBoard;
   };

   get level() {
      return this._level;
   };

   set isGamePaused(newValue) {
      this._isGamePaused = newValue;
   };

   get isGamePaused() {
      return this._isGamePaused;
   };
};