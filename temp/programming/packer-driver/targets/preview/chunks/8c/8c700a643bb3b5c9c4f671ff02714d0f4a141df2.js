System.register(["__unresolved_0", "cc", "@algorithm.ts/sudoku"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, Button, director, SudokuCreator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSudokuCreator(extras) {
    _reporterNs.report("SudokuCreator", "@algorithm.ts/sudoku", _context.meta, extras);
  }

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
    }, function (_algorithmTsSudoku) {
      SudokuCreator = _algorithmTsSudoku.SudokuCreator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71825sbmsRJJLmlOznizpuZ", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'VerticalTextAlignment', 'Label', 'Vec3', 'Color', 'Sprite', 'SpriteFrame', 'Button', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Button), _dec(_class = (_class2 = class GameController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "boardNode", _descriptor, this);

          _initializerDefineProperty(this, "numberLabels", _descriptor2, this);

          _initializerDefineProperty(this, "gameOver", _descriptor3, this);

          _initializerDefineProperty(this, "levelPanel", _descriptor4, this);

          _initializerDefineProperty(this, "rePlay", _descriptor5, this);

          _initializerDefineProperty(this, "easyLevel", _descriptor6, this);

          _initializerDefineProperty(this, "mediumLevel", _descriptor7, this);

          _initializerDefineProperty(this, "hardLevel", _descriptor8, this);

          _initializerDefineProperty(this, "cancelLevel", _descriptor9, this);

          this.selectedNode = null;
          this.puzzleGame = [];
          this.solutionGame = [];
          this.redNumber = 0;
          this.difficultyLevel = void 0;
        }

        onLoad() {
          this.createPuzzleBoard();
          console.log(this.puzzleGame);
          console.log(this.solutionGame);
        }

        rePlayGame() {
          director.loadScene("MainGame");
        }

        displayLevelPanel() {
          this.levelPanel.active = true;
        }

        cancelChooseLevelPanel() {
          this.levelPanel.active = false;
        } //levelFunction


        easyLevelGame() {
          director.loadScene("MainGame");
          this.difficultyLevel = 0.2;
          this.createPuzzleBoard();
        }

        mediumLevelGame() {
          director.loadScene("MainGame");
          this.difficultyLevel = 1;
          this.createPuzzleBoard();
        }

        hardLevelGame() {
          director.loadScene("MainGame");
          this.difficultyLevel = 2;
          this.createPuzzleBoard();
        }

        createPuzzleBoard() {
          var _this = this;

          var sudokuCreator = new (_crd && SudokuCreator === void 0 ? (_reportPossibleCrUseOfSudokuCreator({
            error: Error()
          }), SudokuCreator) : SudokuCreator)({
            childMatrixWidth: 3
          });
          var boardData = sudokuCreator.createSudoku(0.5);

          for (var i = 0; i < boardData.puzzle.length; i++) {
            this.puzzleGame.push(boardData.puzzle[i] + 1);
          }

          for (var _i = 0; _i < boardData.solution.length; _i++) {
            this.solutionGame.push(boardData.solution[_i] + 1);
          }

          var _loop = function _loop() {
            var _loop2 = function _loop2() {
              var value = _this.puzzleGame[_i2 * 9 + j];
              var nodeSudoku = new Node("ValueGame");
              nodeSudoku.setPosition(_i2 * 55, j * 55);

              _this.boardNode.addChild(nodeSudoku);

              var labelBlock = nodeSudoku.addComponent(Label);
              labelBlock.string = value === 0 ? "-" : value.toString();
              nodeSudoku.on(Node.EventType.TOUCH_END, () => {
                _this.selectedNode = nodeSudoku;
              });
            };

            for (var j = 0; j < 9; j++) {
              _loop2();
            }

            var nodeNum = new Node("NumberValueLabel");
            var label = nodeNum.addComponent(Label);
            label.string = "" + (_i2 + 1);
            label.verticalAlign = VerticalTextAlignment.CENTER;
            nodeNum.parent = _this.node;
            nodeNum.position = new Vec3(_i2 % 3 * 100 + 180, Math.floor(_i2 / 3) * -110, 0);

            _this.numberLabels.push(label);

            nodeNum.on(Node.EventType.TOUCH_END, () => {
              if (_this.selectedNode) {
                // const labelBlock = this.selectedNode.getComponent(Label);
                // labelBlock.string = label.string;
                // labelBlock.color = Color.BLACK;
                var selectedValue = parseInt(label.string);

                if (!isNaN(selectedValue)) {
                  var _i3 = Math.floor(_this.selectedNode.position.x / 55);

                  var _j = Math.floor(_this.selectedNode.position.y / 55);

                  var position = _i3 * 9 + _j;
                  var solutionValue = _this.solutionGame[position];
                  var isCorrect = selectedValue === solutionValue;
                  console.log(isCorrect);

                  var labelBlock = _this.selectedNode.getComponent(Label);

                  if (!isCorrect) {
                    labelBlock.color = Color.RED;
                    _this.redNumber++;

                    if (_this.redNumber === 3) {
                      console.log("thua òi nhé !!!");
                      _this.gameOver.active = true;
                    }
                  } else {
                    labelBlock.color = Color.BLUE;
                  }

                  labelBlock.string = selectedValue.toString();
                }
              }
            });
          };

          for (var _i2 = 0; _i2 < 9; _i2++) {
            _loop();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boardNode", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameOver", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "levelPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rePlay", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "easyLevel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "mediumLevel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "hardLevel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cancelLevel", [_dec10], {
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
//# sourceMappingURL=8c700a643bb3b5c9c4f671ff02714d0f4a141df2.js.map