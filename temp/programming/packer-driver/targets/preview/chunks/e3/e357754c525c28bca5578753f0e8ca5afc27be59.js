System.register([], function (_export, _context) {
  "use strict";

  var DancingLinkX;
  return {
    setters: [],
    execute: function () {
      _export("DancingLinkX", DancingLinkX = class DancingLinkX {
        constructor(props) {
          this._count = void 0;
          this._row = void 0;
          this._col = void 0;
          this._L = void 0;
          this._R = void 0;
          this._U = void 0;
          this._D = void 0;
          this._sz = void 0;
          var {
            MAX_N
          } = props;
          this._count = new Array(MAX_N);
          this._row = new Array(MAX_N);
          this._col = new Array(MAX_N);
          this._L = new Array(MAX_N);
          this._R = new Array(MAX_N);
          this._U = new Array(MAX_N);
          this._D = new Array(MAX_N);
          this._sz = 0;
        }

        destroy() {
          this._sz = 0;
          this._count.length = 0;
          this._row.length = 0;
          this._col.length = 0;
          this._L.length = 0;
          this._R.length = 0;
          this._U.length = 0;
          this._D.length = 0;
        }

        init(columnCount) {
          var {
            _L,
            _R,
            _U,
            _D,
            _count
          } = this;

          var _sz = columnCount + 1;

          for (var i = 0; i < _sz; ++i) {
            _L[i] = i - 1;
            _R[i] = i + 1;
            _U[i] = i;
            _D[i] = i;
          }

          _R[columnCount] = 0;
          _L[0] = columnCount;

          _count.fill(0, 0, _sz);

          this._sz = _sz;
        }

        addRow(r, columns) {
          var {
            _count,
            _row,
            _col,
            _L,
            _R,
            _U,
            _D
          } = this;
          var {
            _sz
          } = this;
          var first = _sz;

          for (var i = 0; i < columns.length; ++i, ++_sz) {
            var c = columns[i];
            _row[_sz] = r;
            _col[_sz] = c;
            _count[c] += 1;
            _L[_sz] = _sz - 1;
            _R[_sz] = _sz + 1;
            _D[_sz] = c;
            _D[_U[c]] = _sz;
            _U[_sz] = _U[c];
            _U[c] = _sz;
          }

          _R[_sz - 1] = first;
          _L[first] = _sz - 1;
          this._sz = _sz;
        }

        solve() {
          if (this._sz === 0) return null;
          var selectedRowNos = [];
          return this._algorithmX(0, selectedRowNos) ? selectedRowNos : null;
        }

        _algorithmX(dep, selectedRowNos) {
          var {
            _count,
            _row,
            _col,
            _L,
            _R,
            _D
          } = this;

          if (_R[0] === 0) {
            selectedRowNos.length = dep;
            return true;
          }

          var c = _R[0];

          for (var i = _R[0]; i !== 0; i = _R[i]) {
            if (_count[i] < _count[c]) c = i;
          }

          this._removeColumn(c);

          for (var _i = _D[c]; _i !== c; _i = _D[_i]) {
            selectedRowNos[dep] = _row[_i];

            for (var j = _R[_i]; j !== _i; j = _R[j]) this._removeColumn(_col[j]);

            if (this._algorithmX(dep + 1, selectedRowNos)) return true;

            for (var _j = _L[_i]; _j !== _i; _j = _L[_j]) this._restoreColumn(_col[_j]);
          }

          this._restoreColumn(c);

          return false;
        }

        _removeColumn(c) {
          var {
            _count,
            _col,
            _L,
            _R,
            _U,
            _D
          } = this;
          _L[_R[c]] = _L[c];
          _R[_L[c]] = _R[c];

          for (var i = _D[c]; i !== c; i = _D[i]) {
            for (var j = _R[i]; j !== i; j = _R[j]) {
              _U[_D[j]] = _U[j];
              _D[_U[j]] = _D[j];
              _count[_col[j]] -= 1;
            }
          }
        }

        _restoreColumn(c) {
          var {
            _count,
            _col,
            _L,
            _R,
            _U,
            _D
          } = this;

          for (var i = _U[c]; i !== c; i = _U[i]) {
            for (var j = _L[i]; j !== i; j = _L[j]) {
              _count[_col[j]] += 1;
              _U[_D[j]] = j;
              _D[_U[j]] = j;
            }
          }

          _L[_R[c]] = c;
          _R[_L[c]] = c;
        }

      });
    }
  };
});
//# sourceMappingURL=e357754c525c28bca5578753f0e8ca5afc27be59.js.map