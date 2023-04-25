System.register(["__unresolved_0", "cc", "@algorithm.ts/sudoku"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, Prefab, Button, instantiate, SudokuCreator, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameController;

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
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
    }, function (_algorithmTsSudoku) {
      SudokuCreator = _algorithmTsSudoku.SudokuCreator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71825sbmsRJJLmlOznizpuZ", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'VerticalTextAlignment', 'Label', 'resources', 'Prefab', 'Button', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "boardNode", _descriptor, this);

          _initializerDefineProperty(this, "buttonMenuNode", _descriptor2, this);

          _initializerDefineProperty(this, "buttonPrefab", _descriptor3, this);
        }

        onLoad() {
          this.createPuzzleBoard();
          this.buttonMenuNode.active = false;
        }

        createPuzzleBoard() {
          let sudokuCreator = new (_crd && SudokuCreator === void 0 ? (_reportPossibleCrUseOfSudokuCreator({
            error: Error()
          }), SudokuCreator) : SudokuCreator)({
            childMatrixWidth: 3
          });
          let boardData = sudokuCreator.createSudoku(0.2);
          let solution = boardData.solution;
          let puzzleGame = [];
          let solutionGame = [];

          for (let i = 0; i < boardData.puzzle.length; i++) {
            puzzleGame.push(boardData.puzzle[i] + 1);
          }

          for (let i = 0; i < boardData.solution.length; i++) {
            solutionGame.push(boardData.solution[i] + 1);
          }

          console.log(puzzleGame);
          console.log(solutionGame);

          for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
              const value = puzzleGame[i * 9 + j];
              const node = new Node();
              node.setPosition(i * 55, j * 55);
              this.boardNode.addChild(node);
              const labelBlock = node.addComponent(Label);
              labelBlock.string = value === 0 ? "-" : value.toString();

              if (value === 0) {
                node.addComponent(Button);
                node.on(Node.EventType.TOUCH_END, () => {
                  // Xử lý sự kiện click vào ô có giá trị '-'
                  this.buttonMenuNode.active = true;
                  this.buttonMenuNode.setPosition(node.getPosition());
                });
              }
            }
          }

          for (let i = 1; i <= 9; i++) {
            const buttonNode = instantiate(this.buttonPrefab);
            buttonNode.getComponent(Label).string = i.toString();
            buttonNode.on(Node.EventType.TOUCH_END, () => {
              // Xử lý sự kiện click vào nút số
              const activeNode = this.buttonMenuNode.children.find(childNode => {
                return childNode.active;
              });

              if (activeNode) {
                const labelBlock = activeNode.getParent().getComponent(Label);
                labelBlock.string = i.toString();
                this.buttonMenuNode.active = false;
              }
            });
            this.buttonMenuNode.addChild(buttonNode);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boardNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonMenuNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buttonPrefab", [_dec4], {
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
//# sourceMappingURL=1c3c30807dcd06de4085ae9c79783efbb9f23a46.js.map