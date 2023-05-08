System.register(["__unresolved_0", "cc", "@algorithm.ts/sudoku", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, Button, director, Prefab, instantiate, find, SudokuCreator, GameView, StoredPersistNode, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, GameController;

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
      Button = _cc.Button;
      director = _cc.director;
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
      }), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec(_class = (_class2 = class GameController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "gameView", _descriptor, this);

          _initializerDefineProperty(this, "numberLabels", _descriptor2, this);

          _initializerDefineProperty(this, "bgNodeValue", _descriptor3, this);

          _initializerDefineProperty(this, "frameNode", _descriptor4, this);

          _initializerDefineProperty(this, "frameNodeNum", _descriptor5, this);

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
          this.volumeSudokuArray = [];
          this.gameClient = void 0;
          this.matchId = void 0;
          this.currentPos = null;
        }

        start() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var _this = _this2;
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

            var volumeValue = JSON.parse(localStorage.getItem('volumeSudokuArray'));

            if (volumeValue.length == 0) {
              _this2.gameView.AudioBg.volume = 0.7;
              _this2.gameView.SelectNode.volume = 0.7;
              _this2.gameView.WinAudio.volume = 0.7;
              _this2.gameView.LoseAudio.volume = 0.7;
            } else {
              _this2.gameView.AudioBg.volume = volumeValue[volumeValue.length - 1];
              _this2.gameView.SelectNode.volume = volumeValue[volumeValue.length - 1];
              _this2.gameView.WinAudio.volume = volumeValue[volumeValue.length - 1];
              _this2.gameView.LoseAudio.volume = volumeValue[volumeValue.length - 1];
            }

            if (_this2.gameView.AudioBg.volume == 0.7) {
              _this2.gameView.AudioMute.node.active = false;
              _this2.gameView.AudioUnmute.node.active = true;
            }

            if (_this2.gameView.AudioBg.volume == 0) {
              _this2.gameView.AudioMute.node.active = true;
              _this2.gameView.AudioUnmute.node.active = false;
            }

            _this2.gameView.AudioBg.play();
          })();
        }

        onLoad() {
          this.gameView.LevelPanel.active = true;
          this.gameView.BgBoardNode.active = true; //this.createPuzzleBoard();
        }

        updateTimer() {
          this.timeElapsed++;
          this.gameView.TimeLabel.string = "Th\u1EDDi gian : " + this.timeElapsed + " gi\xE2y";
        }

        rePlayGame() {
          director.loadScene("Menu");
        }

        displayLevelPanel() {
          this.gameView.LevelPanel.active = true;
        }

        update() {
          if (this.difficultyLevel == 0.2) {
            this.gameView.BestTimeLevel.string = 'Độ Khó: Dễ';
            this.gameView.BestTime.string = 'Thời gian nhanh nhất : ' + Math.min(...this.timeBestArr) + ' giây';
          } else if (this.difficultyLevel == 0.5) {
            this.gameView.BestTimeLevel.string = 'Độ Khó: Trung Bình';
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr1) + ' giây';
          } else if (this.difficultyLevel == 0.8) {
            this.gameView.BestTimeLevel.string = 'Độ Khó: Khó';
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' + Math.min(...this.timeBestArr2) + ' giây';
          }

          this.gameView.AudioMute.node.on(Button.EventType.CLICK, this.btnMute, this);
          this.gameView.AudioUnmute.node.on(Button.EventType.CLICK, this.btnUnmute, this);
        } //levelFunction


        easyLevelGame() {
          this.difficultyLevel = 0.2;
          this.createPuzzleBoard();
          this.gameView.LevelPanel.active = false;
          this.bgNodeValue.active = true;
          this.schedule(this.updateTimer, 1);
          this.gameView.LevelLabel.string = "Độ khó : Dễ";
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
          this.gameView.LevelLabel.string = "Độ khó : Trung Bình";
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
          this.gameView.LevelLabel.string = "Độ khó : Khó";
          this.gameView.NewGameBtn.node.active = true;
          this.gameView.PlayerFault.node.active = true;
          this.gameView.BgBoardNode.active = true;
        }

        createPuzzleBoard() {
          var _this3 = this;

          this.frameNodeArrayLength = 0;
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

                    for (var _i4 = 0; _i4 < 9; _i4++) {
                      if (_i4 !== row) {
                        var node = _this3.gameView.BoardNode.getChildByName("ValueGame" + (_i4 * 9 + j));

                        var nodePrefab = instantiate(_this3.frameNode);
                        nodePrefab.setPosition(node.position);
                        node.parent.addChild(nodePrefab);

                        _this3.frameNodeArray.push(nodePrefab);

                        if (_this3.frameNodeArray.length > _this3.frameNodeArrayLength + 20) {
                          for (var _i5 = _this3.frameNodeArray.length - 20; _i5 < _this3.frameNodeArray.length; _i5++) {
                            _this3.frameNodeArrayLength++;

                            _this3.frameNodeArray[_i5 - 1].destroy();
                          }
                        }
                      }
                    }

                    var col = Math.floor(nodeSudoku.position.y / 55);

                    for (var _j2 = 0; _j2 < 9; _j2++) {
                      if (_j2 !== col) {
                        var _node = _this3.gameView.BoardNode.getChildByName("ValueGame" + (i * 9 + _j2));

                        var _nodePrefab = instantiate(_this3.frameNode);

                        _nodePrefab.setPosition(_node.position);

                        _node.parent.addChild(_nodePrefab);

                        _this3.frameNodeArray.push(_nodePrefab);

                        if (_this3.frameNodeArray.length > _this3.frameNodeArrayLength + 20) {
                          for (var _i6 = _this3.frameNodeArray.length - 20; _i6 < _this3.frameNodeArray.length; _i6++) {
                            _this3.frameNodeArrayLength++;

                            _this3.frameNodeArray[_i6 - 1].destroy();
                          }
                        }
                      }
                    }

                    var rowStart = Math.floor(row / 3) * 3;
                    var colStart = Math.floor(col / 3) * 3;

                    for (var _i7 = rowStart; _i7 < rowStart + 3; _i7++) {
                      for (var _j3 = colStart; _j3 < colStart + 3; _j3++) {
                        if (_i7 !== row && _j3 !== col) {
                          var _node2 = _this3.gameView.BoardNode.getChildByName("ValueGame" + (_i7 * 9 + _j3));

                          var _nodePrefab2 = instantiate(_this3.frameNode);

                          _nodePrefab2.setPosition(_node2.position);

                          _node2.parent.addChild(_nodePrefab2);

                          _this3.frameNodeArray.push(_nodePrefab2);

                          if (_this3.frameNodeArray.length > _this3.frameNodeArrayLength + 20) {
                            for (var _i8 = _this3.frameNodeArray.length - 20; _i8 < _this3.frameNodeArray.length; _i8++) {
                              _this3.frameNodeArrayLength++;

                              _this3.frameNodeArray[_i8 - 1].destroy();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              });
            };

            for (var j = 0; j < 9; j++) {
              _loop2(j);
            }

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
                  _this3.gameView.SelectNode.play();

                  var _i3 = Math.floor(_this3.selectedNode.position.x / 55);

                  var _j = Math.floor(_this3.selectedNode.position.y / 55);

                  var position = _i3 * 9 + _j;
                  var solutionValue = _this3.solutionGame[position];
                  var isCorrect = selectedValue === solutionValue;
                  console.log(isCorrect);

                  var labelBlockSelect = _this3.selectedNode.getComponent(Label);

                  console.log(nodeCheck[_i3][_j].filled);

                  if (!nodeCheck[_i3][_j].filled) {
                    if (isCorrect == true) {
                      labelBlockSelect.color = Color.BLUE;
                      emtyNode--;
                      nodeCheck[_i3][_j].filled = true;
                      console.log(emtyNode);

                      if (emtyNode === 0) {
                        _this3.unschedule(_this3.updateTimer);

                        _this3.gameView.TimeFinish.string = "Bạn đã hoàn thành trong màn chơi trong " + _this3.timeElapsed.toString() + " giây";

                        _this3.gameView.AudioBg.pause();

                        _this3.gameView.WinAudio.play();

                        _this3.gameView.SelectNode.volume = 0; // this.gameView.BgMain.getComponent(AudioSource).pause();      

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
                    } else if (isCorrect == false) {
                      console.log(emtyNode);
                      labelBlockSelect.color = Color.RED;
                      _this3.redNumber++;
                      _this3.gameView.PlayerFault.string = "L\u1ED7i: " + _this3.redNumber + "/3";
                      _this3.gameView.PlayerFault.node.active = true;

                      if (_this3.redNumber == 4) {
                        _this3.gameView.BoardNode.active = false;
                        _this3.gameView.GameOver.active = true;
                        _this3.gameView.PlayerFault.string = "B\u1EA1n \u0111\xE3 sai qu\xE1 3 l\u1EA7n!";
                        _this3.gameView.NewGameBtn.node.active = false;

                        _this3.unschedule(_this3.updateTimer);

                        _this3.gameView.AudioBg.pause();

                        _this3.gameView.LoseAudio.play();

                        _this3.gameView.SelectNode.volume = 0; // this.gameView.BgMain.getComponent(AudioSource).pause();

                        _this3.gameClient.match.completeMatch(_this3.matchId, {
                          score: _this3.timeElapsed
                        }).then(data => {}).catch(error => console.log(error));
                      }

                      if (_this3.redNumber == 5) {
                        _this3.redNumber--;
                        _this3.gameView.BoardNode.active = false;
                        _this3.gameView.PlayerFault.string = "B\u1EA1n \u0111\xE3 sai qu\xE1 3 l\u1EA7n!";
                        _this3.gameView.NewGameBtn.node.active = false;

                        _this3.unschedule(_this3.updateTimer);
                      }
                    }
                  } else if (nodeCheck[_i3][_j].filled && isCorrect == false) {
                    console.log(isCorrect);
                    nodeCheck[_i3][_j].filled = false;
                    emtyNode++;
                    console.log(emtyNode);
                    labelBlockSelect.color = Color.RED;
                    _this3.redNumber++;
                    _this3.gameView.PlayerFault.string = "L\u1ED7i: " + _this3.redNumber + "/3";
                    _this3.gameView.PlayerFault.node.active = true;

                    if (_this3.redNumber == 4) {
                      _this3.gameView.GameOver.active = true;
                      _this3.gameView.BoardNode.active = false;
                      _this3.gameView.PlayerFault.string = "B\u1EA1n \u0111\xE3 sai qu\xE1 3 l\u1EA7n!";

                      _this3.gameView.LoseAudio.play();

                      _this3.gameView.AudioBg.pause();

                      _this3.gameView.SelectNode.volume = 0;

                      _this3.unschedule(_this3.updateTimer); // this.gameView.BgMain.getComponent(AudioSource).pause();


                      _this3.gameView.NewGameBtn.node.active = false;

                      _this3.gameClient.match.completeMatch(_this3.matchId, {
                        score: _this3.timeElapsed
                      }).then(data => {}).catch(error => console.log(error));
                    }

                    if (_this3.redNumber == 5) {
                      _this3.redNumber--;
                      _this3.gameView.BoardNode.active = false;
                      _this3.gameView.PlayerFault.string = "B\u1EA1n \u0111\xE3 sai qu\xE1 3 l\u1EA7n!";
                      _this3.gameView.NewGameBtn.node.active = false;

                      _this3.unschedule(_this3.updateTimer);
                    }
                  } else if (nodeCheck[_i3][_j].filled && isCorrect == true) {
                    labelBlockSelect.color = Color.BLUE;
                    nodeCheck[_i3][_j].filled = true;
                  }

                  labelBlockSelect.string = selectedValue.toString();
                }
              }
            });
          };

          for (var _i2 = 0; _i2 < 9; _i2++) {
            _loop(_i2);
          }
        }

        btnMute(AudioMute) {
          this.gameView.AudioMute.node.active = false;
          this.gameView.AudioUnmute.node.active = true;
          this.gameView.AudioBg.volume = 0.7;
          this.gameView.SelectNode.volume = 0.7;
          this.gameView.WinAudio.volume = 0.7;
          this.gameView.LoseAudio.volume = 0.7;
          this.volumeSudokuArray.push(this.gameView.AudioBg.volume);
          localStorage.setItem('volumeSudokuArray', JSON.stringify(this.volumeSudokuArray));
        }

        btnUnmute(AudioMute) {
          this.gameView.AudioMute.node.active = true;
          this.gameView.AudioUnmute.node.active = false;
          this.gameView.AudioBg.volume = 0;
          this.gameView.SelectNode.volume = 0;
          this.gameView.WinAudio.volume = 0;
          this.gameView.LoseAudio.volume = 0;
          this.volumeSudokuArray.push(this.gameView.AudioBg.volume);
          localStorage.setItem('volumeSudokuArray', JSON.stringify(this.volumeSudokuArray));
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "frameNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frameNodeNum", [_dec6], {
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
//# sourceMappingURL=fd3bb535eae577457ae9d987287d9ed9cc28b779.js.map