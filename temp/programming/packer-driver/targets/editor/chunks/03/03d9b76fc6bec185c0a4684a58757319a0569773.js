System.register(["__unresolved_0", "cc", "@algorithm.ts/sudoku", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, director, AudioClip, Prefab, instantiate, find, SudokuCreator, GameView, StoredPersistNode, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function runScene(arg0) {
    throw new Error('Function not implemented.');
  }

  function loadScene(arg0) {
    throw new Error('Function not implemented.');
  }

  function _reportPossibleCrUseOfSudokuCreator(extras) {
    _reporterNs.report("SudokuCreator", "@algorithm.ts/sudoku", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameView(extras) {
    _reporterNs.report("GameView", "./GameView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoredPersistNode(extras) {
    _reporterNs.report("StoredPersistNode", "./StoredPersistNode", _context.meta, extras);
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
      director = _cc.director;
      AudioClip = _cc.AudioClip;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      find = _cc.find;
    }, function (_algorithmTsSudoku) {
      SudokuCreator = _algorithmTsSudoku.SudokuCreator;
    }, function (_unresolved_2) {
      GameView = _unresolved_2.GameView;
    }, function (_unresolved_3) {
      StoredPersistNode = _unresolved_3.StoredPersistNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71825sbmsRJJLmlOznizpuZ", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'VerticalTextAlignment', 'Label', 'Vec3', 'Color', 'Sprite', 'Button', 'director', 'AudioClip', 'AudioSource', 'Slider', 'Prefab', 'instantiate', 'Vec2', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property({
        type: _crd && GameView === void 0 ? (_reportPossibleCrUseOfGameView({
          error: Error()
        }), GameView) : GameView
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Node
      }), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec8 = property(AudioClip), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameView", _descriptor, this);

          _initializerDefineProperty(this, "numberLabels", _descriptor2, this);

          _initializerDefineProperty(this, "bgNodeValue", _descriptor3, this);

          _initializerDefineProperty(this, "volumeStart", _descriptor4, this);

          _initializerDefineProperty(this, "volumeSelectNode", _descriptor5, this);

          _initializerDefineProperty(this, "volumeLose", _descriptor6, this);

          _initializerDefineProperty(this, "volumeWinGame", _descriptor7, this);

          _initializerDefineProperty(this, "frameNode", _descriptor8, this);

          _initializerDefineProperty(this, "frameNodeNum", _descriptor9, this);

          this.selectedNode = null;
          this.puzzleGame = [];
          this.solutionGame = [];
          this.redNumber = 0;
          this.difficultyLevel = void 0;
          this.timeElapsed = 0;
          this.timeBestArr = [];
          this.timeBestArr1 = [];
          this.timeBestArr2 = [];
          this.volumeBg = [];
          this.volumeEffect = [];
          this.nodePositionArray = [];
          this.frameNodeNumArray = [];
          this.frameNodePositionArray = [];
          this.frameNodeArray = [];
          this.frameNodeArrayLength = void 0;
          this.gameClient = void 0;
          this.AudioBg = void 0;
          this.matchId = void 0;
          this.currentPos = null;
        }

        async start() {
          let _this = this;

          console.log(this.gameView.BoardNode);
          console.log(this.gameClient);
          let parameters = find("GameClient");
          let gameClientParams = parameters.getComponent(_crd && StoredPersistNode === void 0 ? (_reportPossibleCrUseOfStoredPersistNode({
            error: Error()
          }), StoredPersistNode) : StoredPersistNode);
          this.gameClient = gameClientParams.gameClient;
          this.AudioBg = gameClientParams.AudioBg;
          console.log(this.AudioBg); // let audioParam = audioNode.getComponent(StoredPersistNode);
          // console.log(audioParam);
          // this.AudioBg = audioParam.AudioBg;
          // console.log(this.AudioBg);

          this.AudioBg.play();
          await gameClientParams.gameClient.match.startMatch().then(data => {
            _this.matchId = data.matchId;
          }).catch(error => console.log(error));
          let bestscore = localStorage.getItem('bestTime');

          if (bestscore) {
            this.timeBestArr = JSON.parse(bestscore);
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr);
          }

          let bestscore1 = localStorage.getItem('bestTime1');

          if (bestscore1) {
            this.timeBestArr1 = JSON.parse(bestscore1);
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr1);
          }

          let bestscore2 = localStorage.getItem('bestTime2');

          if (bestscore2) {
            this.timeBestArr2 = JSON.parse(bestscore2);
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr2);
          }
        }

        onLoad() {
          this.gameView.LevelPanel.active = true;
          this.gameView.BgBoardNode.active = true; //this.createPuzzleBoard();

          console.log(this.puzzleGame);
          console.log(this.solutionGame);
        }

        updateTimer() {
          this.timeElapsed++;
          this.gameView.TimeLabel.string = `Thời gian : ${this.timeElapsed} giây`;
        }

        rePlayGame() {
          director.loadScene("MainGame");
        }

        displayLevelPanel() {
          this.gameView.LevelPanel.active = true;
        }

        update() {
          if (this.difficultyLevel == 0.2) {
            this.gameView.BestTimeLevel.string = 'Độ Khó: DỄ';
            this.gameView.BestTime.string = 'Thời gian nhanh nhất : ' + Math.min(...this.timeBestArr);
          } else if (this.difficultyLevel == 0.5) {
            this.gameView.BestTimeLevel.string = 'Độ Khó: TRUNG BÌNH';
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr1);
          } else if (this.difficultyLevel == 0.8) {
            this.gameView.BestTimeLevel.string = 'Độ Khó: KHÓ';
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr2);
          }
        } //levelFunction


        easyLevelGame() {
          this.difficultyLevel = 0.2;
          this.createPuzzleBoard();
          this.gameView.LevelPanel.active = false;
          this.bgNodeValue.active = true;
          this.schedule(this.updateTimer, 1);
          this.gameView.LevelLabel.string = "Độ khó : DỄ";
          this.gameView.NewGameBtn.node.active = true;
          this.gameView.PlayerFault.node.active = true;
          this.gameView.BgBoardNode.active = true;
        }

        mediumLevelGame() {
          this.difficultyLevel = 0.5;
          this.createPuzzleBoard();
          this.gameView.LevelPanel.active = false;
          this.bgNodeValue.active = true;
          this.schedule(this.updateTimer, 1);
          this.gameView.LevelLabel.string = "Độ khó : TRUNG BÌNH";
          this.gameView.NewGameBtn.node.active = true;
          this.gameView.PlayerFault.node.active = true;
          this.gameView.BgBoardNode.active = true;
        }

        hardLevelGame() {
          this.difficultyLevel = 0.8;
          this.createPuzzleBoard();
          this.gameView.LevelPanel.active = false;
          this.bgNodeValue.active = true;
          this.schedule(this.updateTimer, 1);
          this.gameView.LevelLabel.string = "Độ khó : KHÓ";
          this.gameView.NewGameBtn.node.active = true;
          this.gameView.PlayerFault.node.active = true;
          this.gameView.BgBoardNode.active = true;
        }

        createPuzzleBoard() {
          this.frameNodeArrayLength = 0;
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
              const nodeSudoku = new Node(`ValueGame${i * 9 + j}`);
              nodeSudoku.setPosition(i * 55, j * 55);
              this.gameView.BoardNode.addChild(nodeSudoku);
              const labelBlock = nodeSudoku.addComponent(Label);
              labelBlock.string = value === 0 ? "    " : value.toString();
              labelBlock.color = Color.BLACK;

              if (value === 0) {
                emtyNode++;
              }

              const nodeState = {};
              nodeSudoku.on(Node.EventType.TOUCH_END, () => {
                if (value === 0) {
                  this.selectedNode = nodeSudoku;

                  if (!nodeState[nodeSudoku.name]) {
                    // nodeState[nodeSudoku.name] = true;
                    //Instantiate the prefab
                    const prefabInstance = instantiate(this.frameNodeNum);
                    prefabInstance.setPosition(nodeSudoku.position);
                    nodeSudoku.parent.addChild(prefabInstance);
                    this.nodePositionArray.push(prefabInstance.position);
                    this.frameNodeNumArray.push(prefabInstance);

                    if (this.nodePositionArray[this.nodePositionArray.length - 2] != prefabInstance.position) {
                      if (this.frameNodeNumArray.length > 1) {
                        this.frameNodeNumArray[this.frameNodeNumArray.length - 2].destroy();
                      }
                    }

                    const row = Math.floor(nodeSudoku.position.x / 55);

                    for (let i = 0; i < 9; i++) {
                      if (i !== row) {
                        const node = this.gameView.BoardNode.getChildByName(`ValueGame${i * 9 + j}`);
                        const nodePrefab = instantiate(this.frameNode);
                        nodePrefab.setPosition(node.position);
                        node.parent.addChild(nodePrefab);
                        this.frameNodeArray.push(nodePrefab);
                        console.log(this.frameNodeArray);

                        if (this.frameNodeArray.length > this.frameNodeArrayLength + 20) {
                          for (let i = this.frameNodeArray.length - 20; i < this.frameNodeArray.length; i++) {
                            this.frameNodeArrayLength++;
                            console.log(this.frameNodeArrayLength);
                            console.log(this.frameNodeArray.length);
                            this.frameNodeArray[i - 1].destroy();
                          }
                        }
                      }
                    }

                    const col = Math.floor(nodeSudoku.position.y / 55);

                    for (let j = 0; j < 9; j++) {
                      if (j !== col) {
                        const node = this.gameView.BoardNode.getChildByName(`ValueGame${i * 9 + j}`);
                        const nodePrefab = instantiate(this.frameNode);
                        nodePrefab.setPosition(node.position);
                        node.parent.addChild(nodePrefab);
                        this.frameNodeArray.push(nodePrefab);
                        console.log(this.frameNodeArray);

                        if (this.frameNodeArray.length > this.frameNodeArrayLength + 20) {
                          for (let i = this.frameNodeArray.length - 20; i < this.frameNodeArray.length; i++) {
                            this.frameNodeArrayLength++;
                            console.log(this.frameNodeArrayLength);
                            console.log(this.frameNodeArray.length);
                            this.frameNodeArray[i - 1].destroy();
                          }
                        }
                      }
                    }

                    const rowStart = Math.floor(row / 3) * 3;
                    const colStart = Math.floor(col / 3) * 3;

                    for (let i = rowStart; i < rowStart + 3; i++) {
                      for (let j = colStart; j < colStart + 3; j++) {
                        if (i !== row && j !== col) {
                          const node = this.gameView.BoardNode.getChildByName(`ValueGame${i * 9 + j}`);
                          const nodePrefab = instantiate(this.frameNode);
                          nodePrefab.setPosition(node.position);
                          node.parent.addChild(nodePrefab);
                          this.frameNodeArray.push(nodePrefab);
                          console.log(this.frameNodeArray);

                          if (this.frameNodeArray.length > this.frameNodeArrayLength + 20) {
                            for (let i = this.frameNodeArray.length - 20; i < this.frameNodeArray.length; i++) {
                              this.frameNodeArrayLength++;
                              console.log(this.frameNodeArrayLength);
                              console.log(this.frameNodeArray.length);
                              this.frameNodeArray[i - 1].destroy();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              });
            }

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
                  console.log(nodeCheck[i][j].filled);

                  if (!nodeCheck[i][j].filled) {
                    if (isCorrect == true) {
                      console.log(isCorrect);
                      labelBlockSelect.color = Color.BLUE;
                      emtyNode--;
                      nodeCheck[i][j].filled = true;
                      console.log(emtyNode);

                      if (emtyNode === 0) {
                        console.log("winner");
                        this.unschedule(this.updateTimer);
                        this.gameView.TimeFinish.string = this.timeElapsed.toString() + " giây";
                        this.volumeWinGame.play(); // this.gameView.BgMain.getComponent(AudioSource).pause();      

                        if (this.difficultyLevel == 0.2) {
                          this.timeBestArr.push(this.timeElapsed);
                          localStorage.setItem('bestTime', JSON.stringify(this.timeBestArr));
                        }

                        if (this.difficultyLevel == 0.5) {
                          this.timeBestArr1.push(this.timeElapsed);
                          localStorage.setItem('bestTime1', JSON.stringify(this.timeBestArr1));
                        }

                        if (this.difficultyLevel == 0.8) {
                          this.timeBestArr2.push(this.timeElapsed);
                          localStorage.setItem('bestTime2', JSON.stringify(this.timeBestArr2));
                        }

                        this.gameView.WinGame.active = true;
                        this.gameClient.match.completeMatch(this.matchId, {
                          score: this.timeElapsed
                        }).then(data => {}).catch(error => console.log(error));
                      }
                    } else if (isCorrect == false) {
                      console.log(isCorrect);
                      labelBlockSelect.color = Color.RED;
                      this.redNumber++;
                      this.gameView.PlayerFault.string = `Lỗi: ${this.redNumber}/3`;
                      this.gameView.PlayerFault.node.active = true;

                      if (this.redNumber == 4) {
                        console.log("thua rồi nhé !!!");
                        this.gameView.BgBoardNode.active = false;
                        this.gameView.BoardNode.active = false;
                        this.gameView.GameOver.active = true;
                        this.gameView.PlayerFault.string = `Bạn đã sai quá 3 lần!`;
                        this.gameView.NewGameBtn.node.active = false;
                        this.unschedule(this.updateTimer);
                        this.volumeLose.play(); // this.gameView.BgMain.getComponent(AudioSource).pause();

                        this.gameClient.match.completeMatch(this.matchId, {
                          score: this.timeElapsed
                        }).then(data => {}).catch(error => console.log(error));
                      }

                      if (this.redNumber == 5) {
                        this.redNumber--;
                        this.gameView.BgBoardNode.active = false;
                        this.gameView.BoardNode.active = false;
                        this.gameView.PlayerFault.string = `Bạn đã sai quá 3 lần!`;
                        this.gameView.NewGameBtn.node.active = false;
                        this.unschedule(this.updateTimer);
                      }
                    }
                  } else if (nodeCheck[i][j].filled && isCorrect == false) {
                    console.log(isCorrect);
                    labelBlockSelect.color = Color.RED;
                    this.redNumber++;
                    this.gameView.PlayerFault.string = `Lỗi: ${this.redNumber}/3`;
                    this.gameView.PlayerFault.node.active = true;

                    if (this.redNumber == 4) {
                      console.log("thua rồi nhé !!!");
                      this.gameView.GameOver.active = true;
                      this.gameView.BgBoardNode.active = false;
                      this.gameView.BoardNode.active = false;
                      this.gameView.PlayerFault.string = `Bạn đã sai quá 3 lần!`;
                      this.volumeLose.play();
                      this.unschedule(this.updateTimer); // this.gameView.BgMain.getComponent(AudioSource).pause();

                      this.gameView.NewGameBtn.node.active = false;
                      this.gameClient.match.completeMatch(this.matchId, {
                        score: this.timeElapsed
                      }).then(data => {}).catch(error => console.log(error));
                    }

                    if (this.redNumber == 5) {
                      this.redNumber--;
                      this.gameView.BgBoardNode.active = false;
                      this.gameView.BoardNode.active = false;
                      this.gameView.PlayerFault.string = `Bạn đã sai quá 3 lần!`;
                      this.gameView.NewGameBtn.node.active = false;
                      this.unschedule(this.updateTimer);
                    }
                  } else if (nodeCheck[i][j].filled && isCorrect == true) {
                    console.log(isCorrect);
                    labelBlockSelect.color = Color.BLUE;
                    nodeCheck[i][j].filled = true;
                    console.log(emtyNode);
                  }

                  labelBlockSelect.string = selectedValue.toString();
                }
              }
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "numberLabels", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgNodeValue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "volumeStart", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "volumeSelectNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "volumeLose", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "volumeWinGame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "frameNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "frameNodeNum", [_dec10], {
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
//# sourceMappingURL=03d9b76fc6bec185c0a4684a58757319a0569773.js.map