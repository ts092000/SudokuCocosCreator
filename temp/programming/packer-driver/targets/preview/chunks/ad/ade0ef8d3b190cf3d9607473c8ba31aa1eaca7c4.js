System.register(["@algorithm.ts/shuffle", "@algorithm.ts/dlx"], function (_export, _context) {
  "use strict";

  var knuthShuffle, randomInt, DancingLinkX, SudokuSize, SudokuSolver, SudokuCreator, createSudokuBoardData, fillSudokuBoardData, copySudokuBoardData, toMatrixStyleBoardData;

  function createMatrixCodeMap(size) {
    var {
      BASE_1,
      BASE_3,
      MATRIX,
      BOARD
    } = size;
    var matCodeMap = new Array(BOARD);

    for (var r0 = 0, code0 = 0; r0 < BOARD; r0 += BASE_3, code0 += BASE_1) {
      for (var r = r0, R = r0 + BASE_3; r < R; r += MATRIX) {
        for (var i = r, I = r + MATRIX, code = code0; i < I; i += BASE_1) {
          matCodeMap.fill(code++, i, i + BASE_1);
        }
      }
    }

    return matCodeMap;
  }

  function createMatrixCoordinateMap(size) {
    var {
      BASE_1,
      BASE_3,
      MATRIX,
      BOARD
    } = size;
    var matCoordinateMap = new Array(BOARD);

    for (var r0 = 0, idx = 0; r0 < BOARD; r0 += BASE_3) {
      for (var r = r0, R = r0 + BASE_3; r < R; r += MATRIX) {
        for (var c0 = 0; c0 < MATRIX; c0 += BASE_1) {
          var nextIdx = idx + BASE_1;
          matCoordinateMap.fill(r0 + c0, idx, nextIdx);
          idx = nextIdx;
        }
      }
    }

    return matCoordinateMap;
  }

  function verifySolution(solution, size) {
    var {
      BASE_1,
      BASE_3,
      MATRIX,
      BOARD
    } = size;

    for (var i = 0; i < BOARD; ++i) {
      if (solution[i] === -1) return false;
    }

    var visited = new Array(MATRIX).fill(0);
    var visitedFlag = 1;

    for (var r0 = 0; r0 < BOARD; r0 += MATRIX, ++visitedFlag) {
      for (var _i = r0, I = r0 + MATRIX; _i < I; ++_i) {
        var w = solution[_i];
        if (visited[w] === visitedFlag) return false;
        visited[w] = visitedFlag;
      }
    }

    for (var c0 = 0; c0 < MATRIX; ++c0, ++visitedFlag) {
      for (var _i2 = c0; _i2 < BOARD; _i2 += MATRIX) {
        var _w = solution[_i2];
        if (visited[_w] === visitedFlag) return false;
        visited[_w] = visitedFlag;
      }
    }

    for (var _r = 0; _r < BOARD; _r += BASE_3) {
      for (var _c = 0; _c < MATRIX; _c += BASE_1, ++visitedFlag) {
        for (var r = _r, R = _r + BASE_3; r < R; r += MATRIX) {
          for (var _i3 = r + _c, _I = _i3 + BASE_1; _i3 < _I; ++_i3) {
            var _w2 = solution[_i3];
            if (visited[_w2] === visitedFlag) return false;
            visited[_w2] = visitedFlag;
          }
        }
      }
    }

    return true;
  }

  _export({
    createMatrixCodeMap: createMatrixCodeMap,
    createMatrixCoordinateMap: createMatrixCoordinateMap,
    verifySolution: verifySolution
  });

  return {
    setters: [function (_algorithmTsShuffle) {
      knuthShuffle = _algorithmTsShuffle.knuthShuffle;
      randomInt = _algorithmTsShuffle.randomInt;
    }, function (_algorithmTsDlx) {
      DancingLinkX = _algorithmTsDlx.DancingLinkX;
    }],
    execute: function () {
      _export("SudokuSize", SudokuSize = class SudokuSize {
        constructor(SUDOKU_CHILD_MATRIX_WIDTH) {
          this.BASE_1 = void 0;
          this.BASE_2 = void 0;
          this.BASE_3 = void 0;
          this.BASE_4 = void 0;
          this.MATRIX_RANK = void 0;
          this.MATRIX = void 0;
          this.BOARD = void 0;
          var BASE_1 = SUDOKU_CHILD_MATRIX_WIDTH;
          var BASE_2 = BASE_1 * BASE_1;
          var BASE_3 = BASE_2 * BASE_1;
          var BASE_4 = BASE_3 * BASE_1;
          this.MATRIX_RANK = this.BASE_1 = BASE_1;
          this.MATRIX = this.BASE_2 = BASE_2;
          this.BASE_3 = BASE_3;
          this.BOARD = this.BASE_4 = BASE_4;
        }

      });

      _export("createSudokuBoardData", createSudokuBoardData = size => new Array(size.BOARD));

      _export("fillSudokuBoardData", fillSudokuBoardData = (board, value, size) => {
        board.fill(value, 0, size.BOARD);
      });

      _export("copySudokuBoardData", copySudokuBoardData = (srcBoard, dstBoard, size) => {
        var {
          BOARD
        } = size;

        for (var i = 0; i < BOARD; ++i) dstBoard[i] = srcBoard[i];
      });

      _export("toMatrixStyleBoardData", toMatrixStyleBoardData = (board, size) => {
        var results = [];
        var {
          MATRIX
        } = size;

        for (var r = 0, id = 0; r < MATRIX; ++r) {
          var row = [];
          results[r] = row;

          for (var c = 0; c < MATRIX; ++c, ++id) row[c] = board[id];
        }

        return results;
      });

      _export("SudokuSolver", SudokuSolver = class SudokuSolver {
        constructor(options) {
          this.size = void 0;
          this.DL_TOTAL_COLUMNS = void 0;
          this.dlx = void 0;
          this.matCodeMap = void 0;
          this.constraints = new Array(4);
          var {
            childMatrixWidth
          } = options;
          var size = new SudokuSize(childMatrixWidth);
          var DL_TOTAL_COLUMNS = size.BOARD * 4;
          var DL_MAX_ROWS = size.BOARD * size.MATRIX;
          var DL_MAX_NODES = DL_TOTAL_COLUMNS * DL_MAX_ROWS + size.MATRIX + 1;
          var dlx = new DancingLinkX({
            MAX_N: DL_MAX_NODES
          });
          this.size = size;
          this.DL_TOTAL_COLUMNS = DL_TOTAL_COLUMNS;
          this.dlx = dlx;
          this.matCodeMap = createMatrixCodeMap(size);
        }

        solve(puzzle, solution) {
          var {
            size,
            DL_TOTAL_COLUMNS: SUDOKU_NODES,
            constraints,
            matCodeMap,
            dlx
          } = this;
          var {
            MATRIX,
            BOARD
          } = size;

          var encode = (constraint, code) => constraint * BOARD + code + 1;

          dlx.init(SUDOKU_NODES);

          for (var r = 0, id = 0; r < MATRIX; ++r) {
            for (var c = 0; c < MATRIX; ++c, ++id) {
              var w = puzzle[id];
              var matCode = matCodeMap[id];
              var lv = w === -1 ? 0 : w;
              var rv = w === -1 ? MATRIX : w + 1;

              for (var v = lv; v < rv; ++v) {
                constraints[0] = encode(0, id);
                constraints[1] = encode(1, r * MATRIX + v);
                constraints[2] = encode(2, c * MATRIX + v);
                constraints[3] = encode(3, matCode * MATRIX + v);
                var rowNum = id * MATRIX + v + 1;
                dlx.addRow(rowNum, constraints);
              }
            }
          }

          var answer = dlx.solve();
          if (answer === null) return false;

          if (solution !== null) {
            for (var _code of answer) {
              var code = _code - 1;

              var _v = code % MATRIX;

              var _id = code / MATRIX >> 0;

              solution[_id] = _v;
            }
          }

          return true;
        }

      });

      _export("SudokuCreator", SudokuCreator = class SudokuCreator {
        constructor(options) {
          this.size = void 0;
          this.solver = void 0;
          this.matCoordinateMap = void 0;
          this.gridCodes = void 0;
          this.candidates = void 0;
          this.availableNums = void 0;
          this.tmpBoard = void 0;
          this.difficulty = void 0;
          var {
            childMatrixWidth,
            difficulty = 0.2
          } = options;
          var size = new SudokuSize(childMatrixWidth);
          var solver = new SudokuSolver({
            childMatrixWidth
          });
          var gridCodes = new Array(size.BOARD);

          for (var i = 0; i < size.BOARD; ++i) gridCodes[i] = i;

          this.size = size;
          this.solver = solver;
          this.matCoordinateMap = createMatrixCoordinateMap(size);
          this.gridCodes = gridCodes;
          this.difficulty = this._resolveDifficulty(difficulty);
          this.candidates = new Array(size.MATRIX);
          this.availableNums = new Array(size.MATRIX);
          this.tmpBoard = createSudokuBoardData(size);
        }

        createSudoku(difficulty) {
          if (difficulty != null) this.difficulty = this._resolveDifficulty(difficulty);

          var solution = this._createSolution();

          var puzzle = this._createPuzzle(solution);

          return {
            puzzle,
            solution: solution
          };
        }

        _createSolution() {
          var {
            size,
            candidates,
            gridCodes,
            solver,
            tmpBoard: radicalPuzzle
          } = this;
          fillSudokuBoardData(radicalPuzzle, -1, size);
          knuthShuffle(gridCodes);
          var filledCount = Math.round((Math.random() * 0.3 + 0.2) * size.BOARD);

          var _end = Math.max(size.BASE_3, Math.min(size.BOARD, filledCount));

          for (var i = 0; i < _end; ++i) {
            var p = gridCodes[i];

            var candidatesSize = this._collectCandidates(radicalPuzzle, p);

            if (candidatesSize < 1) continue;
            var x = randomInt(candidatesSize);
            var v = candidates[x];
            radicalPuzzle[p] = v;
          }

          var solution = createSudokuBoardData(size);

          for (var _i4 = 0; _i4 < _end; ++_i4) {
            var _p = gridCodes[_i4];
            if (_p === -1) continue;
            if (solver.solve(radicalPuzzle, solution)) return solution;
            radicalPuzzle[_p] = -1;
          }

          throw new Error('[createSolution] This is impossible!');
        }

        _createPuzzle(solution) {
          var {
            size,
            candidates,
            gridCodes,
            solver,
            difficulty
          } = this;
          var puzzle = createSudokuBoardData(size);
          copySudokuBoardData(solution, puzzle, size);
          knuthShuffle(gridCodes);

          var _end = Math.floor(size.BOARD * difficulty);

          for (var i = 0; i < _end; ++i) {
            var p = gridCodes[i];

            var candidatesSize = this._collectCandidates(puzzle, p);

            var j = 0;

            for (; j < candidatesSize; ++j) {
              puzzle[p] = candidates[j];
              if (solver.solve(puzzle, null)) break;
            }

            puzzle[p] = j < candidatesSize ? solution[p] : -1;
          }

          return puzzle;
        }

        _collectCandidates(board, p) {
          var {
            size,
            matCoordinateMap,
            candidates,
            availableNums
          } = this;
          var {
            MATRIX_RANK,
            MATRIX,
            BOARD
          } = size;
          var c0 = p % MATRIX;
          var r0 = p - c0;
          var p0 = matCoordinateMap[p];
          availableNums.fill(true);

          for (var i = r0, I = r0 + MATRIX; i < I; ++i) {
            var v = board[i];
            if (v !== -1) availableNums[v] = false;
          }

          for (var _i5 = c0; _i5 < BOARD; _i5 += MATRIX) {
            var _v2 = board[_i5];
            if (_v2 !== -1) availableNums[_v2] = false;
          }

          for (var i0 = p0, ri = 0; ri < MATRIX_RANK; ++ri, i0 += MATRIX) {
            for (var _i6 = i0, _I2 = i0 + MATRIX_RANK; _i6 < _I2; ++_i6) {
              var _v3 = board[_i6];
              if (_v3 !== -1) availableNums[_v3] = false;
            }
          }

          var tot = 0;

          for (var _v4 = 0; _v4 < MATRIX; ++_v4) {
            if (availableNums[_v4]) candidates[tot++] = _v4;
          }

          return tot;
        }

        _resolveDifficulty(_difficulty) {
          var difficulty = Math.max(0, Math.min(1, _difficulty)) * 0.8 + 0.2;
          return difficulty;
        }

      });
    }
  };
});
//# sourceMappingURL=ade0ef8d3b190cf3d9607473c8ba31aa1eaca7c4.js.map