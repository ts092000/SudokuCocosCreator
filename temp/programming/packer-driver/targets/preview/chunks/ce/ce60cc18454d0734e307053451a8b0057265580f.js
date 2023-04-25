System.register(["__unresolved_0", "cc", "@algorithm.ts/sudoku"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, SudokuCreator, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameController;

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
    }, function (_algorithmTsSudoku) {
      SudokuCreator = _algorithmTsSudoku.SudokuCreator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71825sbmsRJJLmlOznizpuZ", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'VerticalTextAlignment', 'Label', 'Vec3', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = class GameController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "boardNode", _descriptor, this);

          _initializerDefineProperty(this, "numberLabels", _descriptor2, this);

          this.selectedNode = null;
        }

        onLoad() {
          this.createPuzzleBoard();
        }

        createPuzzleBoard() {
          var _this = this;

          var sudokuCreator = new (_crd && SudokuCreator === void 0 ? (_reportPossibleCrUseOfSudokuCreator({
            error: Error()
          }), SudokuCreator) : SudokuCreator)({
            childMatrixWidth: 3
          });
          var boardData = sudokuCreator.createSudoku(0.2);
          var solution = boardData.solution;
          var puzzleGame = [];
          var solutionGame = [];

          for (var i = 0; i < boardData.puzzle.length; i++) {
            puzzleGame.push(boardData.puzzle[i] + 1);
          }

          for (var _i = 0; _i < boardData.solution.length; _i++) {
            solutionGame.push(boardData.solution[_i] + 1);
          }

          console.log(puzzleGame);
          console.log(solutionGame);

          for (var _i2 = 0; _i2 < 9; _i2++) {
            var _loop = function _loop() {
              var value = puzzleGame[_i2 * 9 + j];
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
              _loop();
            }
          }

          var _loop2 = function _loop2() {
            var nodeNum = new Node("NumberValueLabel");
            var label = nodeNum.addComponent(Label);
            label.string = "" + (_i3 + 1);
            label.verticalAlign = VerticalTextAlignment.CENTER;
            nodeNum.parent = _this.node;
            nodeNum.position = new Vec3(_i3 % 3 * 100 + 180, Math.floor(_i3 / 3) * -110, 0);

            _this.numberLabels.push(label);

            nodeNum.on(Node.EventType.TOUCH_END, () => {
              console.log("Value " + label.string);
            });
            nodeNum.on(Node.EventType.TOUCH_END, () => {
              if (_this.selectedNode) {
                var labelBlock = _this.selectedNode.getComponent(Label);

                labelBlock.string = label.string;
                labelBlock.color = Color.RED;
              }
            });
          };

          for (var _i3 = 0; _i3 < 9; _i3++) {
            _loop2();
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce60cc18454d0734e307053451a8b0057265580f.js.map