System.register(["__unresolved_0", "cc", "@algorithm.ts/sudoku", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, Sprite, Button, director, AudioClip, AudioSource, Slider, Prefab, instantiate, SudokuCreator, GameView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function runScene(arg0) {
    throw new Error('Function not implemented.');
  }

  function loadScene(arg0) {
    throw new Error('Function not implemented.');
  } // if (!isNaN(selectedValue)) {
  //     this.volumeSelectNode.play();
  //     const i = Math.floor(this.selectedNode.position.x / 55);
  //     const j = Math.floor(this.selectedNode.position.y / 55);
  //     const position = i * 9 + j;
  //     const rowStart = Math.floor(i / 3) * 3;
  //     const colStart = Math.floor(j / 3) * 3;
  //     let isCorrect = true;
  //     // Check row
  //     for (let k = 0; k < 9; k++) {
  //         if (k !== j && selectedValue === this.puzzleGame[i*9 + k]) {
  //             isCorrect = false;
  //             break;
  //         }
  //     }
  //     // Check column
  //     for (let k = 0; k < 9; k++) {
  //         if (k !== i && selectedValue === this.puzzleGame[k*9 + j]) {
  //             isCorrect = false;
  //             break;
  //         }
  //     }
  //     // Check 3x3
  //     for (let row = 0; row < 3; row++) {
  //         for (let col = 0; col < 3; col++) {
  //             const r = rowStart + row;
  //             const c = colStart + col;
  //             if ((r !== i || c !== j) && selectedValue === this.puzzleGame[r*9 + c]) {
  //                 isCorrect = false;
  //                 break;
  //             }
  //         }
  //     }
  //     console.log(isCorrect);
  //     const labelBlock = this.selectedNode.getComponent(Label);
  //     if (!isCorrect) {
  //         labelBlock.color = Color.RED;
  //         this.redNumber++;
  //         this.playerFault.string = `Lỗi: ${this.redNumber}/3`
  //         this.playerFault.node.active = true;
  //         if (this.redNumber === 4) {
  //             console.log("thua rồi nhé !!!");
  //             this.gameOver.active = true;
  //             this.playerFault.string = `Lỗi 3/3`;
  //             this.volumeLose.play();
  //         }
  //         emtyNode++;
  //     } else {
  //         labelBlock.color = Color.BLUE;
  //         emtyNode--;
  //         console.log(emtyNode);
  //         if (emtyNode === 0){
  //             console.log("winner");
  //             this.timeBestArr.push(this.timeElapsed);
  //             localStorage.setItem('scores', JSON.stringify(this.timeBestArr));
  //             let bestTime = Math.max(...this.timeBestArr);
  //             console.log(bestTime);
  //         }                        }
  //     labelBlock.string = selectedValue.toString();
  // }
  // if (!isCorrect) {
  //     labelBlockSelect.color = Color.RED;
  //     this.redNumber++;
  //     this.playerFault.string = `Lỗi: ${this.redNumber}/3`
  //     this.playerFault.node.active = true;
  //     if (this.redNumber == 4) {
  //         console.log("thua rồi nhé !!!");
  //         this.gameOver.active = true;
  //         this.playerFault.string = `Lỗi 3/3`;
  //         this.volumeLose.play();             
  //     }
  // } else {
  //     labelBlockSelect.color = Color.BLUE;
  //     emtyNode -= 1;
  //     console.log(emtyNode);
  //     if (emtyNode === 0){
  //         console.log("winner");
  //         this.volumeWinGame.play();
  //         if(this.difficultyLevel == 0.1){
  //             this.timeBestArr.push(this.timeElapsed);
  //             localStorage.setItem('bestTime', JSON.stringify(this.timeBestArr));
  //         }
  //         if(this.difficultyLevel == 0.2){
  //             this.timeBestArr1.push(this.timeElapsed);
  //             localStorage.setItem('bestTime1', JSON.stringify(this.timeBestArr1));
  //         }   
  //         if(this.difficultyLevel == 0.3){
  //             this.timeBestArr2.push(this.timeElapsed);
  //             localStorage.setItem('bestTime2', JSON.stringify(this.timeBestArr2));
  //         }
  //         this.winGame.active = true;                   
  //     }                      
  // }


  function _reportPossibleCrUseOfSudokuCreator(extras) {
    _reporterNs.report("SudokuCreator", "@algorithm.ts/sudoku", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameView(extras) {
    _reporterNs.report("GameView", "./GameView", _context.meta, extras);
  }

  _export({
    runScene: runScene,
    loadScene: loadScene
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      VerticalTextAlignment = _cc.VerticalTextAlignment;
      Label = _cc.Label;
      Vec3 = _cc.Vec3;
      Color = _cc.Color;
      Sprite = _cc.Sprite;
      Button = _cc.Button;
      director = _cc.director;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Slider = _cc.Slider;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_algorithmTsSudoku) {
      SudokuCreator = _algorithmTsSudoku.SudokuCreator;
    }, function (_unresolved_2) {
      GameView = _unresolved_2.GameView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71825sbmsRJJLmlOznizpuZ", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'VerticalTextAlignment', 'Label', 'Vec3', 'Color', 'Sprite', 'Button', 'director', 'AudioClip', 'AudioSource', 'Slider', 'Prefab', 'instantiate', 'find', 'loader']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property(_crd && GameView === void 0 ? (_reportPossibleCrUseOfGameView({
        error: Error()
      }), GameView) : GameView), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Label), _dec13 = property(Sprite), _dec14 = property(AudioClip), _dec15 = property(AudioClip), _dec16 = property(AudioClip), _dec17 = property(AudioClip), _dec18 = property(Sprite), _dec19 = property(Button), _dec20 = property(Node), _dec21 = property(Slider), _dec22 = property(Slider), _dec23 = property(Label), _dec24 = property(Label), _dec25 = property(Node), _dec26 = property(Label), _dec27 = property(Label), _dec28 = property(Prefab), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameView", _descriptor, this);

          _initializerDefineProperty(this, "boardNode", _descriptor2, this);

          _initializerDefineProperty(this, "boardEffectNode", _descriptor3, this);

          _initializerDefineProperty(this, "numberLabels", _descriptor4, this);

          _initializerDefineProperty(this, "gameOver", _descriptor5, this);

          _initializerDefineProperty(this, "levelPanel", _descriptor6, this);

          _initializerDefineProperty(this, "rePlay", _descriptor7, this);

          _initializerDefineProperty(this, "easyLevel", _descriptor8, this);

          _initializerDefineProperty(this, "mediumLevel", _descriptor9, this);

          _initializerDefineProperty(this, "hardLevel", _descriptor10, this);

          _initializerDefineProperty(this, "playerFault", _descriptor11, this);

          _initializerDefineProperty(this, "bgNodeValue", _descriptor12, this);

          _initializerDefineProperty(this, "volumeStart", _descriptor13, this);

          _initializerDefineProperty(this, "volumeSelectNode", _descriptor14, this);

          _initializerDefineProperty(this, "volumeLose", _descriptor15, this);

          _initializerDefineProperty(this, "volumeWinGame", _descriptor16, this);

          _initializerDefineProperty(this, "bgMain", _descriptor17, this);

          _initializerDefineProperty(this, "settingVolumeAll", _descriptor18, this);

          _initializerDefineProperty(this, "settingNode", _descriptor19, this);

          _initializerDefineProperty(this, "settingVolumeBg", _descriptor20, this);

          _initializerDefineProperty(this, "settingVolumeEffect", _descriptor21, this);

          _initializerDefineProperty(this, "timerLabel", _descriptor22, this);

          _initializerDefineProperty(this, "levelLabel", _descriptor23, this);

          _initializerDefineProperty(this, "winGame", _descriptor24, this);

          _initializerDefineProperty(this, "bestTime", _descriptor25, this);

          _initializerDefineProperty(this, "bestTimeLevle", _descriptor26, this);

          _initializerDefineProperty(this, "frameNode", _descriptor27, this);

          this.selectedNode = null;
          this.puzzleGame = [];
          this.solutionGame = [];
          this.redNumber = 0;
          this.difficultyLevel = void 0;
          this.timeElapsed = 0;
          this.timeBestArr = [];
          this.timeBestArr1 = [];
          this.timeBestArr2 = [];
        }

        start() {
          let bestscore = localStorage.getItem('bestTime');

          if (bestscore) {
            this.timeBestArr = JSON.parse(bestscore);
            this.bestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr);
          }

          let bestscore1 = localStorage.getItem('bestTime1');

          if (bestscore1) {
            this.timeBestArr1 = JSON.parse(bestscore1);
            this.bestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr1);
          }

          let bestscore2 = localStorage.getItem('bestTime2');

          if (bestscore2) {
            this.timeBestArr2 = JSON.parse(bestscore2);
            this.bestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr2);
          }
        }

        onLoad() {
          this.levelPanel.active = true; //this.createPuzzleBoard();

          console.log(this.puzzleGame);
          console.log(this.solutionGame);
        }

        startGamePlayer() {
          this.gameView.StartGame.active = false;
          this.volumeStart.play();
        }

        updateTimer() {
          this.timeElapsed++;
          this.timerLabel.string = `Thời gian : ${this.timeElapsed} giây`;
        }

        volumeGameSetting() {
          this.bgMain.getComponent(AudioSource).volume = this.settingVolumeBg.progress;
        }

        displayVolumeSetting() {
          this.settingNode.active = true;
          director.pause();
        }

        volumeGameEffect() {
          this.volumeLose.getVolume();
          this.volumeLose.setVolume(this.settingVolumeEffect.progress);
          this.volumeWinGame.getVolume();
          this.volumeWinGame.setVolume(this.settingVolumeEffect.progress);
          this.volumeSelectNode.getVolume();
          this.volumeSelectNode.setVolume(this.settingVolumeEffect.progress);
        }

        rePlayGame() {
          director.loadScene("MainGame");
        }

        continueGame() {
          director.resume();
          this.settingNode.active = false;
        }

        displayLevelPanel() {
          this.levelPanel.active = true;
        }

        update() {
          if (this.difficultyLevel == 0.1) {
            this.bestTimeLevle.string = 'Độ Khó: DỄ';
            this.bestTime.string = 'Thời gian nhanh nhất : ' + Math.min(...this.timeBestArr);
          } else if (this.difficultyLevel == 0.2) {
            this.bestTimeLevle.string = 'Độ Khó: TRUNG BÌNH';
            this.bestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr1);
          } else if (this.difficultyLevel == 0.3) {
            this.bestTimeLevle.string = 'Độ Khó: KHÓ';
            this.bestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr2);
          }
        } //levelFunction


        easyLevelGame() {
          this.difficultyLevel = 0.1;
          this.createPuzzleBoard();
          this.levelPanel.active = false;
          this.bgNodeValue.node.active = true;
          this.schedule(this.updateTimer, 1);
          this.levelLabel.string = "Độ khó : DỄ";
        }

        mediumLevelGame() {
          this.difficultyLevel = 0.2;
          this.createPuzzleBoard();
          this.levelPanel.active = false;
          this.bgNodeValue.node.active = true;
          this.schedule(this.updateTimer, 1);
          this.levelLabel.string = "Độ khó : TRUNG BÌNH";
        }

        hardLevelGame() {
          this.difficultyLevel = 0.3;
          this.createPuzzleBoard();
          this.levelPanel.active = false;
          this.bgNodeValue.node.active = true;
          this.schedule(this.updateTimer, 1);
          this.levelLabel.string = "Độ khó : KHÓ";
        }

        createPuzzleBoard() {
          let sudokuCreator = new (_crd && SudokuCreator === void 0 ? (_reportPossibleCrUseOfSudokuCreator({
            error: Error()
          }), SudokuCreator) : SudokuCreator)({
            childMatrixWidth: 3
          });
          let boardData = sudokuCreator.createSudoku(this.difficultyLevel);

          for (let i = 0; i < boardData.puzzle.length; i++) {
            this.puzzleGame.push(boardData.puzzle[i] + 1);
          }

          for (let i = 0; i < boardData.solution.length; i++) {
            this.solutionGame.push(boardData.solution[i] + 1);
          }

          let emtyNode = 0;
          const nodeCheck = [];

          for (let i = 0; i < 9; i++) {
            nodeCheck.push([]);

            for (let j = 0; j < 9; j++) {
              nodeCheck[i].push({
                filled: false
              });
              let value = this.puzzleGame[i * 9 + j];
              const nodeSudoku = new Node("ValueGame");
              nodeSudoku.setPosition(i * 55, j * 55);
              this.boardNode.addChild(nodeSudoku);
              const labelBlock = nodeSudoku.addComponent(Label);
              labelBlock.string = value === 0 ? "    " : value.toString();
              labelBlock.color = Color.BLACK;

              if (value === 0) {
                emtyNode++;
              } // const nodeState = {};
              // nodeSudoku.on(Node.EventType.TOUCH_END, () => {
              //     if (value === 0) {
              //         this.selectedNode = nodeSudoku;
              //         if (!nodeState[nodeSudoku.name]) {
              //             nodeState[nodeSudoku.name] = true;
              //             const prefabInstance = instantiate(this.frameNode);
              //             prefabInstance.setPosition(nodeSudoku.position);
              //             nodeSudoku.parent.addChild(prefabInstance);
              //         }
              //     }
              // });


              const nodeState = {};
              nodeSudoku.on(Node.EventType.TOUCH_END, () => {
                if (value === 0) {
                  this.selectedNode = nodeSudoku;

                  if (!nodeState[nodeSudoku.name]) {
                    nodeState[nodeSudoku.name] = true;
                    const prefabInstance = instantiate(this.frameNode);
                    prefabInstance.setPosition(nodeSudoku.position);
                    nodeSudoku.parent.addChild(prefabInstance); // Move the prefab instance along with nodeSudoku

                    nodeSudoku.on(Node.EventType.TRANSFORM_CHANGED, () => {
                      prefabInstance.setPosition(nodeSudoku.position);
                    });
                  }
                }
              });
              const nodeNum = new Node("NumberValueLabel");
              const labelValue = nodeNum.addComponent(Label);
              labelValue.string = `  ${i + 1}  `;
              labelValue.color = Color.BLACK;
              labelValue.verticalAlign = VerticalTextAlignment.CENTER;
              nodeNum.parent = this.node;
              nodeNum.position = new Vec3(i % 3 * 70 + 210, Math.floor(i / 3) * -60, 0);
              this.numberLabels.push(labelValue);
              nodeNum.on(Node.EventType.TOUCH_END, () => {
                if (this.selectedNode) {
                  const selectedValue = parseInt(labelValue.string);

                  if (!isNaN(selectedValue)) {
                    this.volumeSelectNode.play();
                    const i = Math.floor(this.selectedNode.position.x / 55);
                    const j = Math.floor(this.selectedNode.position.y / 55);
                    const position = i * 9 + j;
                    const solutionValue = this.solutionGame[position];
                    const isCorrect = selectedValue === solutionValue;
                    console.log(isCorrect);
                    const labelBlockSelect = this.selectedNode.getComponent(Label);

                    if (!nodeCheck[i][j].filled) {
                      if (isCorrect) {
                        labelBlockSelect.color = Color.BLUE;
                        emtyNode--;
                        nodeCheck[i][j].filled = true;
                        console.log(emtyNode);

                        if (emtyNode === 0) {
                          console.log("winner");
                          this.volumeWinGame.play();

                          if (this.difficultyLevel == 0.1) {
                            this.timeBestArr.push(this.timeElapsed);
                            localStorage.setItem('bestTime', JSON.stringify(this.timeBestArr));
                          }

                          if (this.difficultyLevel == 0.2) {
                            this.timeBestArr1.push(this.timeElapsed);
                            localStorage.setItem('bestTime1', JSON.stringify(this.timeBestArr1));
                          }

                          if (this.difficultyLevel == 0.3) {
                            this.timeBestArr2.push(this.timeElapsed);
                            localStorage.setItem('bestTime2', JSON.stringify(this.timeBestArr2));
                          }

                          this.winGame.active = true;
                        }
                      } else {
                        labelBlockSelect.color = Color.RED;
                        this.redNumber++;
                        this.playerFault.string = `Lỗi: ${this.redNumber}/3`;
                        this.playerFault.node.active = true;

                        if (this.redNumber == 4) {
                          console.log("thua rồi nhé !!!");
                          this.gameOver.active = true;
                          this.playerFault.string = `Lỗi 3/3`;
                          this.volumeLose.play();
                        }
                      }
                    }

                    labelBlockSelect.string = selectedValue.toString();
                  }
                }
              });
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "boardNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boardEffectNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "numberLabels", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gameOver", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "levelPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rePlay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "easyLevel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "mediumLevel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "hardLevel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "playerFault", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bgNodeValue", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "volumeStart", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "volumeSelectNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "volumeLose", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "volumeWinGame", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bgMain", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "settingVolumeAll", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "settingNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "settingVolumeBg", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "settingVolumeEffect", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "timerLabel", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "winGame", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "bestTime", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "bestTimeLevle", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "frameNode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6f1b6c6a1181507b26408f59cd26c226fcfffc5d.js.map