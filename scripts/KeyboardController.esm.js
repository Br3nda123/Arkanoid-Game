export const KEY_CODE_LEFT = 37;
export const KEY_CODE_PAUSE = 80;
export const KEY_CODE_RIGHT = 39;

class KeyboardController{
   constructor() {
      this.clickedKey = null;
      window.addEventListener('keydown', event => this.clickedKey = event.keyCode);
   };
};

export const keyboardController = new KeyboardController();