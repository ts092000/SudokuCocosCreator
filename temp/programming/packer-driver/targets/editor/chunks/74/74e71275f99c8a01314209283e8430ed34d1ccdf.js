System.register(["@algorithm.ts/shuffle", "@algorithm.ts/dlx"], function (_export, _context) {
  "use strict";

  var knuthShuffle, randomInt, DancingLinkX, SudokuSize, SudokuSolver, SudokuCreator, createSudokuBoardData, fillSudokuBoardData, copySudokuBoardData, toMatrixStyleBoardData;

  function createMatrixCodeMap(size) {
    const {
      BASE_1,
      BASE_3,
      MATRIX,
      BOARD
    } = size;
    const matCodeMap = new Array(BOARD);

    for (let r0 = 0, code0 = 0; r0 < BOARD; r0 += BASE_3, code0 += BASE_1) {
      for (let r = r0, R = r0 + BASE_3; r < R; r += MATRIX) {
        for (let i = r, I = r + MATRIX, code = code0; i < I; i += BASE_1) {
          matCodeMap.fill(code++, i, i + BASE_1);
        }
      }
    }

    return matCodeMap;
  }

  function createMatrixCoordinateMap(size) {
    const {
      BASE_1,
      BASE_3,
      MATRIX,
      BOARD
    } = size;
    const matCoordinateMap = new Array(BOARD);

    for (let r0 = 0, idx = 0; r0 < BOARD; r0 += BASE_3) {
      for (let r = r0, R = r0 + BASE_3; r < R; r += MATRIX) {
        for (let c0 = 0; c0 < MATRIX; c0 += BASE_1) {
          const nextIdx = idx + BASE_1;
          matCoordinateMap.fill(r0 + c0, idx, nextIdx);
          idx = nextIdx;
        }
      }
    }

    return matCoordinateMap;
  }

  function verifySolution(solution, size) {
    const {
      BASE_1,
      BASE_3,
      MATRIX,
      BOARD
    } = size;

    for (let i = 0; i < BOARD; ++i) {
      if (solution[i] === -1) return false;
    }

    const visited = new Array(MATRIX).fill(0);
    let visitedFlag = 1;

    for (let r0 = 0; r0 < BOARD; r0 += MATRIX, ++visitedFlag) {
      for (let i = r0, I = r0 + MATRIX; i < I; ++i) {
        const w = solution[i];
        if (visited[w] === visitedFlag) return false;
        visited[w] = visitedFlag;
      }
    }

    for (let c0 = 0; c0 < MATRIX; ++c0, ++visitedFlag) {
      for (let i = c0; i < BOARD; i += MATRIX) {
        const w = solution[i];
        if (visited[w] === visitedFlag) return false;
        visited[w] = visitedFlag;
      }
    }

    for (let r0 = 0; r0 < BOARD; r0 += BASE_3) {
      for (let c0 = 0; c0 < MATRIX; c0 += BASE_1, ++visitedFlag) {
        for (let r = r0, R = r0 + BASE_3; r < R; r += MATRIX) {
          for (let i = r + c0, I = i + BASE_1; i < I; ++i) {
            const w = solution[i];
            if (visited[w] === visitedFlag) return false;
            visited[w] = visitedFlag;
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
          const BASE_1 = SUDOKU_CHILD_MATRIX_WIDTH;
          const BASE_2 = BASE_1 * BASE_1;
          const BASE_3 = BASE_2 * BASE_1;
          const BASE_4 = BASE_3 * BASE_1;
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
        const {
          BOARD
        } = size;

        for (let i = 0; i < BOARD; ++i) dstBoard[i] = srcBoard[i];
      });

      _export("toMatrixStyleBoardData", toMatrixStyleBoardData = (board, size) => {
        const results = [];
        const {
          MATRIX
        } = size;

        for (let r = 0, id = 0; r < MATRIX; ++r) {
          const row = [];
          results[r] = row;

          for (let c = 0; c < MATRIX; ++c, ++id) row[c] = board[id];
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
          const {
            childMatrixWidth
          } = options;
          const size = new SudokuSize(childMatrixWidth);
          const DL_TOTAL_COLUMNS = size.BOARD * 4;
          const DL_MAX_ROWS = size.BOARD * size.MATRIX;
          const DL_MAX_NODES = DL_TOTAL_COLUMNS * DL_MAX_ROWS + size.MATRIX + 1;
          const dlx = new DancingLinkX({
            MAX_N: DL_MAX_NODES
          });
          this.size = size;
          this.DL_TOTAL_COLUMNS = DL_TOTAL_COLUMNS;
          this.dlx = dlx;
          this.matCodeMap = createMatrixCodeMap(size);
        }

        solve(puzzle, solution) {
          const {
            size,
            DL_TOTAL_COLUMNS: SUDOKU_NODES,
            constraints,
            matCodeMap,
            dlx
          } = this;
          const {
            MATRIX,
            BOARD
          } = size;

          const encode = (constraint, code) => constraint * BOARD + code + 1;

          dlx.init(SUDOKU_NODES);

          for (let r = 0, id = 0; r < MATRIX; ++r) {
            for (let c = 0; c < MATRIX; ++c, ++id) {
              const w = puzzle[id];
              const matCode = matCodeMap[id];
              const lv = w === -1 ? 0 : w;
              const rv = w === -1 ? MATRIX : w + 1;

              for (let v = lv; v < rv; ++v) {
                constraints[0] = encode(0, id);
                constraints[1] = encode(1, r * MATRIX + v);
                constraints[2] = encode(2, c * MATRIX + v);
                constraints[3] = encode(3, matCode * MATRIX + v);
                const rowNum = id * MATRIX + v + 1;
                dlx.addRow(rowNum, constraints);
              }
            }
          }

          const answer = dlx.solve();
          if (answer === null) return false;

          if (solution !== null) {
            for (const _code of answer) {
              const code = _code - 1;
              const v = code % MATRIX;
              const id = code / MATRIX >> 0;
              solution[id] = v;
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
          const {
            childMatrixWidth,
            difficulty = 0.2
          } = options;
          const size = new SudokuSize(childMatrixWidth);
          const solver = new SudokuSolver({
            childMatrixWidth
          });
          const gridCodes = new Array(size.BOARD);

          for (let i = 0; i < size.BOARD; ++i) gridCodes[i] = i;

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

          const solution = this._createSolution();

          const puzzle = this._createPuzzle(solution);

          return {
            puzzle,
            solution: solution
          };
        }

        _createSolution() {
          const {
            size,
            candidates,
            gridCodes,
            solver,
            tmpBoard: radicalPuzzle
          } = this;
          fillSudokuBoardData(radicalPuzzle, -1, size);
          knuthShuffle(gridCodes);
          const filledCount = Math.round((Math.random() * 0.3 + 0.2) * size.BOARD);

          const _end = Math.max(size.BASE_3, Math.min(size.BOARD, filledCount));

          for (let i = 0; i < _end; ++i) {
            const p = gridCodes[i];

            const candidatesSize = this._collectCandidates(radicalPuzzle, p);

            if (candidatesSize < 1) continue;
            const x = randomInt(candidatesSize);
            const v = candidates[x];
            radicalPuzzle[p] = v;
          }

          const solution = createSudokuBoardData(size);

          for (let i = 0; i < _end; ++i) {
            const p = gridCodes[i];
            if (p === -1) continue;
            if (solver.solve(radicalPuzzle, solution)) return solution;
            radicalPuzzle[p] = -1;
          }

          throw new Error('[createSolution] This is impossible!');
        }

        _createPuzzle(solution) {
          const {
            size,
            candidates,
            gridCodes,
            solver,
            difficulty
          } = this;
          const puzzle = createSudokuBoardData(size);
          copySudokuBoardData(solution, puzzle, size);
          knuthShuffle(gridCodes);

          const _end = Math.floor(size.BOARD * difficulty);

          for (let i = 0; i < _end; ++i) {
            const p = gridCodes[i];

            const candidatesSize = this._collectCandidates(puzzle, p);

            let j = 0;

            for (; j < candidatesSize; ++j) {
              puzzle[p] = candidates[j];
              if (solver.solve(puzzle, null)) break;
            }

            puzzle[p] = j < candidatesSize ? solution[p] : -1;
          }

          return puzzle;
        }

        _collectCandidates(board, p) {
          const {
            size,
            matCoordinateMap,
            candidates,
            availableNums
          } = this;
          const {
            MATRIX_RANK,
            MATRIX,
            BOARD
          } = size;
          const c0 = p % MATRIX;
          const r0 = p - c0;
          const p0 = matCoordinateMap[p];
          availableNums.fill(true);

          for (let i = r0, I = r0 + MATRIX; i < I; ++i) {
            const v = board[i];
            if (v !== -1) availableNums[v] = false;
          }

          for (let i = c0; i < BOARD; i += MATRIX) {
            const v = board[i];
            if (v !== -1) availableNums[v] = false;
          }

          for (let i0 = p0, ri = 0; ri < MATRIX_RANK; ++ri, i0 += MATRIX) {
            for (let i = i0, I = i0 + MATRIX_RANK; i < I; ++i) {
              const v = board[i];
              if (v !== -1) availableNums[v] = false;
            }
          }

          let tot = 0;

          for (let v = 0; v < MATRIX; ++v) {
            if (availableNums[v]) candidates[tot++] = v;
          }

          return tot;
        }

        _resolveDifficulty(_difficulty) {
          const difficulty = Math.max(0, Math.min(1, _difficulty)) * 0.8 + 0.2;
          return difficulty;
        }

      });
    }
  };
});
//# sourceMappingURL=74e71275f99c8a01314209283e8430ed34d1ccdf.js.map