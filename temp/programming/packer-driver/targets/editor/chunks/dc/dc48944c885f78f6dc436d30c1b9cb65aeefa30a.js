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
          const {
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
          const {
            _L,
            _R,
            _U,
            _D,
            _count
          } = this;

          const _sz = columnCount + 1;

          for (let i = 0; i < _sz; ++i) {
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
          const {
            _count,
            _row,
            _col,
            _L,
            _R,
            _U,
            _D
          } = this;
          let {
            _sz
          } = this;
          const first = _sz;

          for (let i = 0; i < columns.length; ++i, ++_sz) {
            const c = columns[i];
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
          const selectedRowNos = [];
          return this._algorithmX(0, selectedRowNos) ? selectedRowNos : null;
        }

        _algorithmX(dep, selectedRowNos) {
          const {
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

          let c = _R[0];

          for (let i = _R[0]; i !== 0; i = _R[i]) {
            if (_count[i] < _count[c]) c = i;
          }

          this._removeColumn(c);

          for (let i = _D[c]; i !== c; i = _D[i]) {
            selectedRowNos[dep] = _row[i];

            for (let j = _R[i]; j !== i; j = _R[j]) this._removeColumn(_col[j]);

            if (this._algorithmX(dep + 1, selectedRowNos)) return true;

            for (let j = _L[i]; j !== i; j = _L[j]) this._restoreColumn(_col[j]);
          }

          this._restoreColumn(c);

          return false;
        }

        _removeColumn(c) {
          const {
            _count,
            _col,
            _L,
            _R,
            _U,
            _D
          } = this;
          _L[_R[c]] = _L[c];
          _R[_L[c]] = _R[c];

          for (let i = _D[c]; i !== c; i = _D[i]) {
            for (let j = _R[i]; j !== i; j = _R[j]) {
              _U[_D[j]] = _U[j];
              _D[_U[j]] = _D[j];
              _count[_col[j]] -= 1;
            }
          }
        }

        _restoreColumn(c) {
          const {
            _count,
            _col,
            _L,
            _R,
            _U,
            _D
          } = this;

          for (let i = _U[c]; i !== c; i = _U[i]) {
            for (let j = _L[i]; j !== i; j = _L[j]) {
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
//# sourceMappingURL=dc48944c885f78f6dc436d30c1b9cb65aeefa30a.js.map