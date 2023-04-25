System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b0c4GCCFJBRrlINHLza3Pw", "GameView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameView", GameView = (_dec = ccclass('GameView'), _dec2 = property(Node), _dec(_class = (_class2 = class GameView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "startGame", _descriptor, this);
        }

        get StartGame() {
          return this.startGame;
        }

        set GameStart(v) {
          this.startGame = v;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startGame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class)); // import { _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, Sprite, Button, director, AudioClip, AudioSource, Slider } from 'cc';
      // const { ccclass, property } = _decorator;
      // import { SudokuCreator } from '@algorithm.ts/sudoku';
      // import { GameView } from './GameView';
      // @ccclass('GameController')
      // export class GameController extends Component {
      //     // @property(Node)
      //     // startGame: Node;
      //     @property(GameView)
      //     gameView: GameView;
      //     @property(Node)
      //     boardNode: Node;
      //     @property(Label)
      //     numberLabels: Label[] = [];
      //     @property(Node)
      //     gameOver: Node;
      //     @property(Node)
      //     levelPanel: Node;
      //     @property(Button)
      //     rePlay: Button;
      //     //LevelPanel
      //     @property(Button)
      //     easyLevel: Button;
      //     @property(Button)
      //     mediumLevel: Button;
      //     @property(Button)
      //     hardLevel: Button;
      //     @property(Label)
      //     playerFault: Label;
      //     @property(Sprite)
      //     bgNodeValue: Sprite;
      //     //Audio Game
      //     @property(AudioClip)
      //     volumeStart: AudioClip;
      //     @property(AudioClip)
      //     volumeSelectNode: AudioClip;
      //     @property(AudioClip)
      //     volumeLose: AudioClip;
      //     @property(AudioClip)
      //     volumeWinGame: AudioClip;
      //     @property(Sprite)
      //     bgMain: Sprite;
      //     @property(Button)
      //     settingVolumeAll: Slider;
      //     @property(Node)
      //     settingNode: Node;
      //     @property(Slider)
      //     settingVolumeBg: Slider;
      //     @property(Slider)
      //     settingVolumeEffect: Slider;
      //     @property(Label)
      //     timerLabel: Label = null;
      //     @property(Label)
      //     levelLabel: Label = null;
      //     @property(Node)
      //     winGame: Node;
      //     @property(Label)
      //     bestTime: Label;
      //     selectedNode: Node = null;
      //     puzzleGame: number[] = [];
      //     solutionGame: number[] = [];
      //     redNumber: number = 0;
      //     difficultyLevel: number;
      //     timeElapsed: number = 0; 
      //     timeBestArr: number[] = [];    
      //     start() {
      //         let bestscore=localStorage.getItem('bestTime');
      //         if(bestscore){
      //            this.timeBestArr=JSON.parse(bestscore);
      //            this.bestTime.string='bestTime: ' +(Math.min(...this.timeBestArr))
      //         }
      //     }
      //     onLoad() {
      //         this.levelPanel.active = true;
      //         //this.createPuzzleBoard();
      //         console.log(this.puzzleGame)
      //         console.log(this.solutionGame)
      //     }
      //     startGamePlayer(){
      //         this.gameView.StartGame.active = false;
      //         this.volumeStart.play();
      //     }
      //     updateTimer() {
      //         this.timeElapsed++;
      //         // this.timerLabel.string = `Thời gian : ${this.timeElapsed} giây`;
      //     }
      //     volumeGameSetting(){
      //         this.bgMain.getComponent(AudioSource).volume = this.settingVolumeBg.progress;
      //     }
      //     displayVolumeSetting(){
      //         this.settingNode.active = true;
      //         director.pause();
      //     }
      //     volumeGameEffect(){
      //         this.volumeLose.getVolume();
      //         this.volumeLose.setVolume(this.settingVolumeEffect.progress);
      //         this.volumeWinGame.getVolume();
      //         this.volumeWinGame.setVolume(this.settingVolumeEffect.progress);
      //         this.volumeSelectNode.getVolume();
      //         this.volumeSelectNode.setVolume(this.settingVolumeEffect.progress);
      //     }
      //     rePlayGame(){
      //         director.loadScene("MainGame");
      //     }
      //     continueGame(){
      //         director.resume();
      //         this.settingNode.active = false;
      //     }
      //     displayLevelPanel(){
      //         this.levelPanel.active = true;
      //     }
      //     //levelFunction
      //     easyLevelGame() {
      //         this.difficultyLevel = 0.1;
      //         this.createPuzzleBoard();
      //         this.levelPanel.active = false;
      //         this.bgNodeValue.node.active = true;
      //         this.schedule(this.updateTimer, 1);
      //         this.levelLabel.string = "Độ khó : DỄ"
      //     }
      //     mediumLevelGame() {
      //         this.difficultyLevel = 0.2;
      //         this.createPuzzleBoard();
      //         this.levelPanel.active = false;
      //         this.bgNodeValue.node.active = true;
      //         this.schedule(this.updateTimer, 1);
      //         this.levelLabel.string = "Độ khó : TRUNG BÌNH"
      //     }
      //     hardLevelGame() {
      //         this.difficultyLevel = 0.3;
      //         this.createPuzzleBoard();
      //         this.levelPanel.active = false;
      //         this.bgNodeValue.node.active = true;
      //         this.schedule(this.updateTimer, 1); 
      //         this.levelLabel.string = "Độ khó : KHÓ"
      //     }
      //     createPuzzleBoard(){
      //         let sudokuCreator = new SudokuCreator({childMatrixWidth: 3});
      //         let boardData = sudokuCreator.createSudoku(this.difficultyLevel);
      //         for (let i = 0; i < boardData.puzzle.length; i++) {
      //             this.puzzleGame.push(boardData.puzzle[i] + 1);
      //         }
      //         for (let i = 0; i < boardData.solution.length; i++) {
      //             this.solutionGame.push(boardData.solution[i] + 1);
      //         }
      //         let emtyNode = 0;
      //         for (let i = 0; i < 9; i++) {
      //             for (let j = 0; j < 9; j++) {
      //                 const value = this.puzzleGame[i*9 + j];
      //                 const nodeSudoku = new Node("ValueGame");
      //                 nodeSudoku.setPosition(i * 55, j * 55);
      //                 this.boardNode.addChild(nodeSudoku);
      //                 const labelBlock = nodeSudoku.addComponent(Label);
      //                 labelBlock.string = value === 0 ? "    " : value.toString();
      //                 labelBlock.color = Color.BLACK;
      //                 if (value === 0) {
      //                     emtyNode++;
      //                 }
      //                 nodeSudoku.on(Node.EventType.TOUCH_END, () => {
      //                     if (value === 0) {
      //                       this.selectedNode = nodeSudoku;
      //                       labelBlock.string = "-";
      //                     }
      //                 });
      //             }
      //             const nodeNum = new Node("NumberValueLabel");
      //             const labelValue = nodeNum.addComponent(Label);
      //             labelValue.string = `  ${i + 1}  `;
      //             labelValue.color = Color.BLACK;
      //             labelValue.verticalAlign = VerticalTextAlignment.CENTER;
      //             nodeNum.parent = this.node;
      //             nodeNum.position = new Vec3(i % 3 * 100 + 180, Math.floor(i / 3) * -60, 0);
      //             this.numberLabels.push(labelValue);
      //             nodeNum.on(Node.EventType.TOUCH_END, () => {
      //                 if (this.selectedNode) {
      //                     const selectedValue = parseInt(labelValue.string);
      //                     if (!isNaN(selectedValue)) {
      //                         this.volumeSelectNode.play();
      //                         const i = Math.floor(this.selectedNode.position.x / 55);
      //                         const j = Math.floor(this.selectedNode.position.y / 55);
      //                         const position = i * 9 + j;
      //                         const solutionValue = this.solutionGame[position];
      //                         const isCorrect = selectedValue === solutionValue;
      //                         console.log(isCorrect);
      //                         const labelBlock = this.selectedNode.getComponent(Label);
      //                         if (!isCorrect) {
      //                             labelBlock.color = Color.RED;
      //                             this.redNumber++;
      //                             this.playerFault.string = `Lỗi: ${this.redNumber}/3`
      //                             this.playerFault.node.active = true;
      //                             if (this.redNumber === 4) {
      //                                 console.log("thua rồi nhé !!!");
      //                                 this.gameOver.active = true;
      //                                 this.playerFault.string = `Lỗi 3/3`;
      //                                 this.volumeLose.play();
      //                                 this.timeBestArr.push(this.timeElapsed);
      //                                 localStorage.setItem('bestTime', JSON.stringify(this.timeBestArr));
      //                                 this.winGame.active = true;  
      //                             }
      //                         } else {
      //                             labelBlock.color = Color.BLUE;
      //                             emtyNode -= 1;
      //                             console.log(emtyNode);
      //                             if (emtyNode === 0){
      //                                 console.log("winner");
      //                                 this.volumeWinGame.play();                            
      //                             }                      
      //                         }
      //                         labelBlock.string = selectedValue.toString();
      //                     }
      //                 }
      //             });
      //         }
      //     }   
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4c1182f30d73ee5ad16c918668a7620682f77b3.js.map