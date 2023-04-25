System.register(["__unresolved_0", "cc", "@algorithm.ts/sudoku", "__unresolved_1", "@dattenlagiday/oc_gamecenter_sdk_pkg"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, Sprite, director, AudioClip, AudioSource, Prefab, instantiate, SudokuCreator, GameView, GameClient, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, GameController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfGameClient(extras) {
    _reporterNs.report("GameClient", "@dattenlagiday/oc_gamecenter_sdk_pkg", _context.meta, extras);
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
      director = _cc.director;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_algorithmTsSudoku) {
      SudokuCreator = _algorithmTsSudoku.SudokuCreator;
    }, function (_unresolved_2) {
      GameView = _unresolved_2.GameView;
    }, function (_dattenlagidayOc_gamecenter_sdk_pkg) {
      GameClient = _dattenlagidayOc_gamecenter_sdk_pkg.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71825sbmsRJJLmlOznizpuZ", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'VerticalTextAlignment', 'Label', 'Vec3', 'Color', 'Sprite', 'Button', 'director', 'AudioClip', 'AudioSource', 'Slider', 'Prefab', 'instantiate', 'Vec2']);

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
      }), _dec4 = property(Sprite), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec8 = property(AudioClip), _dec9 = property(Label), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec(_class = (_class2 = class GameController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "gameView", _descriptor, this);

          _initializerDefineProperty(this, "numberLabels", _descriptor2, this);

          _initializerDefineProperty(this, "bgNodeValue", _descriptor3, this);

          _initializerDefineProperty(this, "volumeStart", _descriptor4, this);

          _initializerDefineProperty(this, "volumeSelectNode", _descriptor5, this);

          _initializerDefineProperty(this, "volumeLose", _descriptor6, this);

          _initializerDefineProperty(this, "volumeWinGame", _descriptor7, this);

          _initializerDefineProperty(this, "bestTimeLevle", _descriptor8, this);

          _initializerDefineProperty(this, "frameNode", _descriptor9, this);

          _initializerDefineProperty(this, "frameNodeNum", _descriptor10, this);

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
          this.gameClient = void 0;
          this.matchId = void 0;
          this.currentPos = null;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            console.log(_this.gameView.BoardNode);
            console.log(_this.gameClient);

            if (_this.gameClient === undefined) {
              _this.gameClient = new (_crd && GameClient === void 0 ? (_reportPossibleCrUseOfGameClient({
                error: Error()
              }), GameClient) : GameClient)("643fce940a3bf613239132bc", "057e6bb4-e80d-40f2-ae0a-2940ac94ee15");
              yield _this.gameClient.initAsync().then(() => {}).catch(err => console.log(err));
            }

            yield _this.gameClient.match.startMatch().then(data => {
              _this.matchId = data.matchId;
            }).catch(error => console.log(error));
            var bestscore = localStorage.getItem('bestTime');

            if (bestscore) {
              _this.timeBestArr = JSON.parse(bestscore);
              _this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(..._this.timeBestArr);
            }

            var bestscore1 = localStorage.getItem('bestTime1');

            if (bestscore1) {
              _this.timeBestArr1 = JSON.parse(bestscore1);
              _this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(..._this.timeBestArr1);
            }

            var bestscore2 = localStorage.getItem('bestTime2');

            if (bestscore2) {
              _this.timeBestArr2 = JSON.parse(bestscore2);
              _this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(..._this.timeBestArr2);
            }
          })();
        }

        onLoad() {
          this.gameView.LevelPanel.active = true; //this.createPuzzleBoard();

          console.log(this.puzzleGame);
          console.log(this.solutionGame);
        }

        updateTimer() {
          this.timeElapsed++;
          this.gameView.TimeLabel.string = "Th\u1EDDi gian : " + this.timeElapsed + " gi\xE2y";
        }

        rePlayGame() {
          director.loadScene("MainGame");
        }

        displayLevelPanel() {
          this.gameView.LevelPanel.active = true;
        }

        update() {
          if (this.difficultyLevel == 0.2) {
            this.bestTimeLevle.string = 'Độ Khó: DỄ';
            this.gameView.BestTime.string = 'Thời gian nhanh nhất : ' + Math.min(...this.timeBestArr);
          } else if (this.difficultyLevel == 0.5) {
            this.bestTimeLevle.string = 'Độ Khó: TRUNG BÌNH';
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr1);
          } else if (this.difficultyLevel == 0.8) {
            this.bestTimeLevle.string = 'Độ Khó: KHÓ';
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr2);
          }
        } //levelFunction


        easyLevelGame() {
          this.difficultyLevel = 0.2;
          this.createPuzzleBoard();
          this.gameView.LevelPanel.active = false;
          this.bgNodeValue.node.active = true;
          this.schedule(this.updateTimer, 1);
          this.gameView.LevelLabel.string = "Độ khó : DỄ";
          this.gameView.NewGameBtn.node.active = true;
        }

        mediumLevelGame() {
          this.difficultyLevel = 0.5;
          this.createPuzzleBoard();
          this.gameView.LevelPanel.active = false;
          this.bgNodeValue.node.active = true;
          this.schedule(this.updateTimer, 1);
          this.gameView.LevelLabel.string = "Độ khó : TRUNG BÌNH";
          this.gameView.NewGameBtn.node.active = true;
        }

        hardLevelGame() {
          this.difficultyLevel = 0.8;
          this.createPuzzleBoard();
          this.gameView.LevelPanel.active = false;
          this.bgNodeValue.node.active = true;
          this.schedule(this.updateTimer, 1);
          this.gameView.LevelLabel.string = "Độ khó : KHÓ";
          this.gameView.NewGameBtn.node.active = true;
        }

        createPuzzleBoard() {
          var _this2 = this;

          var sudokuCreator = new (_crd && SudokuCreator === void 0 ? (_reportPossibleCrUseOfSudokuCreator({
            error: Error()
          }), SudokuCreator) : SudokuCreator)({
            childMatrixWidth: 3
          });
          var boardData = sudokuCreator.createSudoku(this.difficultyLevel);

          for (var i = 0; i < boardData.puzzle.length; i++) {
            this.puzzleGame.push(boardData.puzzle[i] + 1);
          }

          for (var _i = 0; _i < boardData.solution.length; _i++) {
            this.solutionGame.push(boardData.solution[_i] + 1);
          }

          var emtyNode = 0;
          var nodeCheck = [];

          var _loop = function _loop(i) {
            nodeCheck.push([]);

            var _loop2 = function _loop2(j) {
              nodeCheck[i].push({
                filled: false
              });
              var value = _this2.puzzleGame[i * 9 + j];
              var nodeSudoku = new Node("ValueGame" + (i * 9 + j));
              nodeSudoku.setPosition(i * 55, j * 55);

              _this2.gameView.BoardNode.addChild(nodeSudoku);

              var labelBlock = nodeSudoku.addComponent(Label);
              labelBlock.string = value === 0 ? "    " : value.toString();
              labelBlock.color = Color.BLACK;

              if (value === 0) {
                emtyNode++;
              }

              var nodeState = {};
              nodeSudoku.on(Node.EventType.TOUCH_END, () => {
                if (value === 0) {
                  _this2.selectedNode = nodeSudoku;

                  if (!nodeState[nodeSudoku.name]) {
                    nodeState[nodeSudoku.name] = true; //Instantiate the prefab

                    var prefabInstance = instantiate(_this2.frameNodeNum);
                    prefabInstance.setPosition(nodeSudoku.position);
                    nodeSudoku.parent.addChild(prefabInstance);
                    var row = Math.floor(nodeSudoku.position.x / 55);

                    var _loop3 = function _loop3() {
                      if (_i3 !== row) {
                        var node = _this2.gameView.BoardNode.getChildByName("ValueGame" + (_i3 * 9 + j));

                        var nodePrefab = instantiate(_this2.frameNode);
                        nodePrefab.setPosition(node.position);
                        node.parent.addChild(nodePrefab);
                        setTimeout(() => {
                          nodePrefab.destroy();
                        }, 1000);
                      }
                    };

                    for (var _i3 = 0; _i3 < 9; _i3++) {
                      _loop3();
                    }

                    var col = Math.floor(nodeSudoku.position.y / 55);

                    var _loop4 = function _loop4() {
                      if (_j !== col) {
                        var node = _this2.gameView.BoardNode.getChildByName("ValueGame" + (i * 9 + _j));

                        var nodePrefab = instantiate(_this2.frameNode);
                        nodePrefab.setPosition(node.position);
                        node.parent.addChild(nodePrefab);
                        setTimeout(() => {
                          nodePrefab.destroy();
                        }, 1000);
                      }
                    };

                    for (var _j = 0; _j < 9; _j++) {
                      _loop4();
                    }

                    var rowStart = Math.floor(row / 3) * 3;
                    var colStart = Math.floor(col / 3) * 3;

                    for (var _i4 = rowStart; _i4 < rowStart + 3; _i4++) {
                      var _loop5 = function _loop5() {
                        if (_i4 !== row && _j2 !== col) {
                          var node = _this2.gameView.BoardNode.getChildByName("ValueGame" + (_i4 * 9 + _j2));

                          var nodePrefab = instantiate(_this2.frameNode);
                          nodePrefab.setPosition(node.position);
                          node.parent.addChild(nodePrefab);
                          setTimeout(() => {
                            nodePrefab.destroy();
                          }, 1000);
                        }
                      };

                      for (var _j2 = colStart; _j2 < colStart + 3; _j2++) {
                        _loop5();
                      }
                    }
                  }
                }
              });
              var nodeNum = new Node("NumberValueLabel");
              var labelValue = nodeNum.addComponent(Label);
              labelValue.string = "  " + (i + 1) + "  ";
              labelValue.color = Color.BLACK;
              labelValue.verticalAlign = VerticalTextAlignment.CENTER;
              nodeNum.parent = _this2.node;
              nodeNum.position = new Vec3(i % 3 * 70 + 210, Math.floor(i / 3) * -60, 0);

              _this2.numberLabels.push(labelValue);

              nodeNum.on(Node.EventType.TOUCH_END, () => {
                if (_this2.selectedNode) {
                  var selectedValue = parseInt(labelValue.string);

                  if (!isNaN(selectedValue)) {
                    _this2.volumeSelectNode.play();

                    var _i5 = Math.floor(_this2.selectedNode.position.x / 55);

                    var _j3 = Math.floor(_this2.selectedNode.position.y / 55);

                    var position = _i5 * 9 + _j3;
                    var solutionValue = _this2.solutionGame[position];
                    var isCorrect = selectedValue === solutionValue;
                    console.log(isCorrect);

                    var labelBlockSelect = _this2.selectedNode.getComponent(Label);

                    if (!nodeCheck[_i5][_j3].filled) {
                      if (isCorrect) {
                        labelBlockSelect.color = Color.BLUE;
                        emtyNode--;
                        nodeCheck[_i5][_j3].filled = true;
                        console.log(emtyNode);

                        if (emtyNode === 0) {
                          console.log("winner");

                          _this2.unschedule(_this2.updateTimer);

                          _this2.gameView.TimeFinish.string = _this2.timeElapsed.toString() + " giây";

                          _this2.volumeWinGame.play();

                          _this2.gameView.BgMain.getComponent(AudioSource).pause();

                          if (_this2.difficultyLevel == 0.2) {
                            _this2.timeBestArr.push(_this2.timeElapsed);

                            localStorage.setItem('bestTime', JSON.stringify(_this2.timeBestArr));
                          }

                          if (_this2.difficultyLevel == 0.5) {
                            _this2.timeBestArr1.push(_this2.timeElapsed);

                            localStorage.setItem('bestTime1', JSON.stringify(_this2.timeBestArr1));
                          }

                          if (_this2.difficultyLevel == 0.8) {
                            _this2.timeBestArr2.push(_this2.timeElapsed);

                            localStorage.setItem('bestTime2', JSON.stringify(_this2.timeBestArr2));
                          }

                          _this2.gameView.WinGame.active = true;

                          _this2.gameClient.match.completeMatch(_this2.matchId, {
                            score: _this2.timeElapsed
                          }).then(data => {}).catch(error => console.log(error));
                        }
                      } else {
                        labelBlockSelect.color = Color.RED;
                        _this2.redNumber++;
                        _this2.gameView.PlayerFault.string = "L\u1ED7i: " + _this2.redNumber + "/3";
                        _this2.gameView.PlayerFault.node.active = true;

                        if (_this2.redNumber == 4) {
                          console.log("thua rồi nhé !!!");
                          _this2.gameView.GameOver.active = true;
                          _this2.gameView.PlayerFault.string = "L\u1ED7i 3/3";

                          _this2.volumeLose.play();

                          _this2.gameView.BgMain.getComponent(AudioSource).pause();

                          _this2.gameClient.match.completeMatch(_this2.matchId, {
                            score: _this2.timeElapsed
                          }).then(data => {}).catch(error => console.log(error));
                        }

                        if (_this2.redNumber == 5) {
                          _this2.redNumber--;
                          _this2.gameView.PlayerFault.string = "L\u1ED7i 3/3";
                        }
                      }
                    }

                    labelBlockSelect.string = selectedValue.toString();
                  }
                }
              });
            };

            for (var j = 0; j < 9; j++) {
              _loop2(j);
            }
          };

          for (var _i2 = 0; _i2 < 9; _i2++) {
            _loop(_i2);
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
        initializer: function initializer() {
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bestTimeLevle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "frameNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "frameNodeNum", [_dec11], {
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
//# sourceMappingURL=12c9f7bce78f9aa70b3f8050c3e68541f5682367.js.map