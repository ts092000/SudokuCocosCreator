System.register(["__unresolved_0", "cc", "@algorithm.ts/sudoku"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, VerticalTextAlignment, Label, SudokuCreator, _dec, _class, _crd, ccclass, property, GameController;

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
      VerticalTextAlignment = _cc.VerticalTextAlignment;
      Label = _cc.Label;
    }, function (_algorithmTsSudoku) {
      SudokuCreator = _algorithmTsSudoku.SudokuCreator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71825sbmsRJJLmlOznizpuZ", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'VerticalTextAlignment', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec(_class = class GameController extends Component {
        onLoad() {
          this.createPuzzleBoard();
        }

        update(deltaTime) {}

        createPuzzleBoard() {
          let sudokuCreator = new (_crd && SudokuCreator === void 0 ? (_reportPossibleCrUseOfSudokuCreator({
            error: Error()
          }), SudokuCreator) : SudokuCreator)({
            childMatrixWidth: 3
          });
          let boardData = sudokuCreator.createSudoku(0.2);
          let puzzleGame = boardData.puzzle;
          let solution = boardData.solution;
          console.log(puzzleGame);
          console.log(solution);
          const boardSize = 9;
          const board = [];

          for (let row = 0; row < boardSize; row++) {
            const rowValues = puzzleGame.slice(row * boardSize, (row + 1) * boardSize);
            const rowSprites = [];

            for (let col = 0; col < boardSize; col++) {
              const value = rowValues[col];
              const label = new Label();
              label.string = value === 0 ? '-' : value.toString();
              label.fontSize = 40;
              label.horizontalAlign = Label.HorizontalAlign.CENTER;
              label.verticalAlign = VerticalTextAlignment.CENTER;
              label.node.setPosition(0, 0, 0);
              this.node.addChild(label.node);
              rowSprites.push(label);
            }

            board.push(rowSprites);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c85f61583fcc1c54c6a5badde94c22870ab776bf.js.map