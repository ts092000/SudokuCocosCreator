System.register(["__unresolved_0", "cc", "@algorithm.ts/sudoku"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, Sprite, Button, director, SudokuCreator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, GameController;

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
    }, function (_algorithmTsSudoku) {
      SudokuCreator = _algorithmTsSudoku.SudokuCreator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71825sbmsRJJLmlOznizpuZ", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'VerticalTextAlignment', 'Label', 'Vec3', 'Color', 'Sprite', 'Button', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Button), _dec10 = property(Label), _dec11 = property(Sprite), _dec(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "boardNode", _descriptor, this);

          _initializerDefineProperty(this, "numberLabels", _descriptor2, this);

          _initializerDefineProperty(this, "gameOver", _descriptor3, this);

          _initializerDefineProperty(this, "levelPanel", _descriptor4, this);

          _initializerDefineProperty(this, "rePlay", _descriptor5, this);

          _initializerDefineProperty(this, "easyLevel", _descriptor6, this);

          _initializerDefineProperty(this, "mediumLevel", _descriptor7, this);

          _initializerDefineProperty(this, "hardLevel", _descriptor8, this);

          _initializerDefineProperty(this, "playerFault", _descriptor9, this);

          _initializerDefineProperty(this, "bgNodeValue", _descriptor10, this);

          this.selectedNode = null;
          this.puzzleGame = [];
          this.solutionGame = [];
          this.redNumber = 0;
          this.difficultyLevel = void 0;
        }

        onLoad() {
          this.levelPanel.active = true; //this.createPuzzleBoard();

          console.log(this.puzzleGame);
          console.log(this.solutionGame);
        }

        rePlayGame() {
          director.loadScene("MainGame");
        }

        displayLevelPanel() {
          this.levelPanel.active = true;
        } //levelFunction


        easyLevelGame() {
          this.difficultyLevel = 0.1;
          this.createPuzzleBoard();
          this.levelPanel.active = false;
          this.bgNodeValue.node.active = true;
        }

        mediumLevelGame() {
          this.difficultyLevel = 0.2;
          this.createPuzzleBoard();
          this.levelPanel.active = false;
          this.bgNodeValue.node.active = true;
        }

        hardLevelGame() {
          this.difficultyLevel = 0.3;
          this.createPuzzleBoard();
          this.levelPanel.active = false;
          this.bgNodeValue.node.active = true;
        }

        beginGame() {
          director.loadScene("MainGame");
        }

        createPuzzleBoard() {
          //this.playerFault.color = Color.RED;
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

          for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
              const value = this.puzzleGame[i * 9 + j];
              const nodeSudoku = new Node("ValueGame");
              nodeSudoku.setPosition(i * 55, j * 55);
              this.boardNode.addChild(nodeSudoku);
              const labelBlock = nodeSudoku.addComponent(Label);
              labelBlock.string = value === 0 ? "    " : value.toString();
              nodeSudoku.on(Node.EventType.TOUCH_END, () => {
                this.selectedNode = nodeSudoku;
                labelBlock.string = "-";
              });
            }

            const nodeNum = new Node("NumberValueLabel");
            const label = nodeNum.addComponent(Label);
            label.string = ` ${i + 1} `;
            label.verticalAlign = VerticalTextAlignment.CENTER;
            nodeNum.parent = this.node;
            nodeNum.position = new Vec3(i % 3 * 100 + 180, Math.floor(i / 3) * -60, 0);
            this.numberLabels.push(label);
            nodeNum.on(Node.EventType.TOUCH_END, () => {
              if (this.selectedNode) {
                const selectedValue = parseInt(label.string);

                if (!isNaN(selectedValue)) {
                  const i = Math.floor(this.selectedNode.position.x / 55);
                  const j = Math.floor(this.selectedNode.position.y / 55);
                  const position = i * 9 + j;
                  const solutionValue = this.solutionGame[position];
                  const isCorrect = selectedValue === solutionValue;
                  console.log(isCorrect);
                  const labelBlock = this.selectedNode.getComponent(Label);

                  if (!isCorrect) {
                    labelBlock.color = Color.RED;
                    this.redNumber++;
                    this.playerFault.string = `Lỗi: ${this.redNumber}/3`;
                    this.playerFault.node.active = true;

                    if (this.redNumber === 4) {
                      console.log("thua rồi nhé !!!");
                      this.gameOver.active = true;
                      this.playerFault.string = `Lỗi 3/3`;
                    }
                  } else {
                    labelBlock.color = Color.BLUE;
                  }

                  labelBlock.string = selectedValue.toString();
                }
              }
            });
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
        initializer: function () {
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "playerFault", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bgNodeValue", [_dec11], {
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
//# sourceMappingURL=7b64af28bbcff6bec646c55cb9404ee8d4512e83.js.map