System.register(["__unresolved_0", "cc", "@algorithm.ts/sudoku", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, Sprite, director, AudioClip, AudioSource, Prefab, instantiate, find, SudokuCreator, GameView, StoredPersistNode, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, GameController;

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
      Sprite = _cc.Sprite;
      director = _cc.director;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
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
      }), _dec4 = property(Sprite), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec8 = property(AudioClip), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec(_class = (_class2 = class GameController extends Component {
        constructor() {
          super(...arguments);

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
          this.gameClient = void 0;
          this.matchId = void 0;
          this.currentPos = null;
        }

        start() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _this = _this2;
            console.log(_this2.gameView.BoardNode);
            console.log(_this2.gameClient);
            var parameters = find("GameClient");
            var gameClientParams = parameters.getComponent(_crd && StoredPersistNode === void 0 ? (_reportPossibleCrUseOfStoredPersistNode({
              error: Error()
            }), StoredPersistNode) : StoredPersistNode);
            _this2.gameClient = gameClientParams.gameClient;
            yield gameClientParams.gameClient.match.startMatch().then(data => {
              _this.matchId = data.matchId;
            }).catch(error => console.log(error));
            var bestscore = localStorage.getItem('bestTime');

            if (bestscore) {
              _this2.timeBestArr = JSON.parse(bestscore);
              _this2.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(..._this2.timeBestArr);
            }

            var bestscore1 = localStorage.getItem('bestTime1');

            if (bestscore1) {
              _this2.timeBestArr1 = JSON.parse(bestscore1);
              _this2.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(..._this2.timeBestArr1);
            }

            var bestscore2 = localStorage.getItem('bestTime2');

            if (bestscore2) {
              _this2.timeBestArr2 = JSON.parse(bestscore2);
              _this2.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(..._this2.timeBestArr2);
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
          var _this3 = this;

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
              var value = _this3.puzzleGame[i * 9 + j];
              var nodeSudoku = new Node("ValueGame" + (i * 9 + j));
              nodeSudoku.setPosition(i * 55, j * 55);

              _this3.gameView.BoardNode.addChild(nodeSudoku);

              var labelBlock = nodeSudoku.addComponent(Label);
              labelBlock.string = value === 0 ? "    " : value.toString();
              labelBlock.color = Color.BLACK;

              if (value === 0) {
                emtyNode++;
              }

              var nodeState = {};
              nodeSudoku.on(Node.EventType.TOUCH_END, () => {
                if (value === 0) {
                  _this3.selectedNode = nodeSudoku;

                  if (!nodeState[nodeSudoku.name]) {
                    // nodeState[nodeSudoku.name] = true;
                    //Instantiate the prefab
                    var prefabInstance = instantiate(_this3.frameNodeNum);
                    prefabInstance.setPosition(nodeSudoku.position);
                    nodeSudoku.parent.addChild(prefabInstance);

                    _this3.nodePositionArray.push(prefabInstance.position);

                    _this3.frameNodeNumArray.push(prefabInstance);

                    if (_this3.nodePositionArray[_this3.nodePositionArray.length - 2] != prefabInstance.position) {
                      if (_this3.frameNodeNumArray.length > 1) {
                        _this3.frameNodeNumArray[_this3.frameNodeNumArray.length - 2].destroy();
                      }
                    }

                    var row = Math.floor(nodeSudoku.position.x / 55);

                    for (var _i3 = 0; _i3 < 9; _i3++) {
                      if (_i3 !== row) {
                        var node = _this3.gameView.BoardNode.getChildByName("ValueGame" + (_i3 * 9 + j));

                        var nodePrefab = instantiate(_this3.frameNode);
                        nodePrefab.setPosition(node.position);
                        node.parent.addChild(nodePrefab);

                        _this3.frameNodeArray.push(nodePrefab);

                        console.log(_this3.frameNodeArray);

                        if (_this3.frameNodeArray.length > 20) {
                          for (var _i4 = 1; _i4 <= 20; _i4++) {
                            _this3.frameNodeArray[_i4 - 1].destroy();
                          }
                        } // if (this.frameNodeArray.length > 20) {
                        //     // this.frameNodeArray.length = 0;                           
                        // }


                        if (_this3.frameNodeArray.length > 20) {
                          _this3.frameNodeArray.splice(-20);
                        }
                      }
                    }

                    var col = Math.floor(nodeSudoku.position.y / 55);

                    for (var _j = 0; _j < 9; _j++) {
                      if (_j !== col) {
                        var _node = _this3.gameView.BoardNode.getChildByName("ValueGame" + (i * 9 + _j));

                        var _nodePrefab = instantiate(_this3.frameNode);

                        _nodePrefab.setPosition(_node.position);

                        _node.parent.addChild(_nodePrefab);

                        _this3.frameNodeArray.push(_nodePrefab);

                        console.log(_this3.frameNodeArray);

                        if (_this3.frameNodeArray.length > 20) {
                          for (var _i5 = 1; _i5 <= 20; _i5++) {
                            _this3.frameNodeArray[_i5 - 1].destroy();
                          }
                        } // if (this.frameNodeArray.length > 20) {
                        // }
                        // this.frameNodeArray = [];                                 


                        if (_this3.frameNodeArray.length > 20) {
                          _this3.frameNodeArray.splice(-20);
                        }
                      }
                    }

                    var rowStart = Math.floor(row / 3) * 3;
                    var colStart = Math.floor(col / 3) * 3;

                    for (var _i6 = rowStart; _i6 < rowStart + 3; _i6++) {
                      for (var _j2 = colStart; _j2 < colStart + 3; _j2++) {
                        if (_i6 !== row && _j2 !== col) {
                          var _node2 = _this3.gameView.BoardNode.getChildByName("ValueGame" + (_i6 * 9 + _j2));

                          var _nodePrefab2 = instantiate(_this3.frameNode);

                          _nodePrefab2.setPosition(_node2.position);

                          _node2.parent.addChild(_nodePrefab2);

                          _this3.frameNodeArray.push(_nodePrefab2);

                          console.log(_this3.frameNodeArray);

                          if (_this3.frameNodeArray.length > 20) {
                            for (var _i7 = 1; _i7 <= 20; _i7++) {
                              _this3.frameNodeArray[_i7 - 1].destroy();
                            }
                          } // if (this.frameNodeArray.length > 20) {
                          //     // this.frameNodeArray.length = 0;   
                          // }


                          if (_this3.frameNodeArray.length > 20) {
                            _this3.frameNodeArray.splice(-20);
                          } // this.frameNodeArray = [];

                        }
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
              nodeNum.parent = _this3.node;
              nodeNum.position = new Vec3(i % 3 * 70 + 210, Math.floor(i / 3) * -60, 0);

              _this3.numberLabels.push(labelValue);

              nodeNum.on(Node.EventType.TOUCH_END, () => {
                if (_this3.selectedNode) {
                  var selectedValue = parseInt(labelValue.string);

                  if (!isNaN(selectedValue)) {
                    _this3.volumeSelectNode.play();

                    var _i8 = Math.floor(_this3.selectedNode.position.x / 55);

                    var _j3 = Math.floor(_this3.selectedNode.position.y / 55);

                    var position = _i8 * 9 + _j3;
                    var solutionValue = _this3.solutionGame[position];
                    var isCorrect = selectedValue === solutionValue;
                    console.log(isCorrect);

                    var labelBlockSelect = _this3.selectedNode.getComponent(Label);

                    if (!nodeCheck[_i8][_j3].filled) {
                      if (isCorrect) {
                        labelBlockSelect.color = Color.BLUE;
                        emtyNode--;
                        nodeCheck[_i8][_j3].filled = true;
                        console.log(emtyNode);

                        if (emtyNode === 0) {
                          console.log("winner");

                          _this3.unschedule(_this3.updateTimer);

                          _this3.gameView.TimeFinish.string = _this3.timeElapsed.toString() + " giây";

                          _this3.volumeWinGame.play();

                          _this3.gameView.BgMain.getComponent(AudioSource).pause();

                          if (_this3.difficultyLevel == 0.2) {
                            _this3.timeBestArr.push(_this3.timeElapsed);

                            localStorage.setItem('bestTime', JSON.stringify(_this3.timeBestArr));
                          }

                          if (_this3.difficultyLevel == 0.5) {
                            _this3.timeBestArr1.push(_this3.timeElapsed);

                            localStorage.setItem('bestTime1', JSON.stringify(_this3.timeBestArr1));
                          }

                          if (_this3.difficultyLevel == 0.8) {
                            _this3.timeBestArr2.push(_this3.timeElapsed);

                            localStorage.setItem('bestTime2', JSON.stringify(_this3.timeBestArr2));
                          }

                          _this3.gameView.WinGame.active = true;

                          _this3.gameClient.match.completeMatch(_this3.matchId, {
                            score: _this3.timeElapsed
                          }).then(data => {}).catch(error => console.log(error));
                        }
                      } else {
                        labelBlockSelect.color = Color.RED;
                        _this3.redNumber++;
                        _this3.gameView.PlayerFault.string = "L\u1ED7i: " + _this3.redNumber + "/3";
                        _this3.gameView.PlayerFault.node.active = true;

                        if (_this3.redNumber == 4) {
                          console.log("thua rồi nhé !!!");
                          _this3.gameView.GameOver.active = true;
                          _this3.gameView.PlayerFault.string = "L\u1ED7i 3/3";

                          _this3.volumeLose.play();

                          _this3.gameView.BgMain.getComponent(AudioSource).pause();

                          _this3.gameClient.match.completeMatch(_this3.matchId, {
                            score: _this3.timeElapsed
                          }).then(data => {}).catch(error => console.log(error));
                        }

                        if (_this3.redNumber == 5) {
                          _this3.redNumber--;
                          _this3.gameView.PlayerFault.string = "L\u1ED7i 3/3";
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
//# sourceMappingURL=ee8f4fcde2845a873d7b999b84983c83b14e52e1.js.map