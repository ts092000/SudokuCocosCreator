System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/index.mjs",["./rollupPluginModLoBabelHelpers.js","./index2.mjs","./index3.mjs"],(function(i){"use strict";var t,r,a,o;return{setters:[function(i){t=i.createForOfIteratorHelperLoose},function(i){r=i.default,a=i.randomInt},function(i){o=i.DancingLinkX}],execute:function(){i({createMatrixCodeMap:h,createMatrixCoordinateMap:u});var e=i("SudokuSize",(function(i){this.BASE_1=void 0,this.BASE_2=void 0,this.BASE_3=void 0,this.BASE_4=void 0,this.MATRIX_RANK=void 0,this.MATRIX=void 0,this.BOARD=void 0;var t=i,r=t*t,a=r*t,o=a*t;this.MATRIX_RANK=this.BASE_1=t,this.MATRIX=this.BASE_2=r,this.BASE_3=a,this.BOARD=this.BASE_4=o})),s=i("createSudokuBoardData",(function(i){return new Array(i.BOARD)})),n=i("fillSudokuBoardData",(function(i,t,r){i.fill(t,0,r.BOARD)})),d=i("copySudokuBoardData",(function(i,t,r){for(var a=r.BOARD,o=0;o<a;++o)t[o]=i[o]}));function h(i){for(var t=i.BASE_1,r=i.BASE_3,a=i.MATRIX,o=i.BOARD,e=new Array(o),s=0,n=0;s<o;s+=r,n+=t)for(var d=s,h=s+r;d<h;d+=a)for(var u=d,v=d+a,l=n;u<v;u+=t)e.fill(l++,u,u+t);return e}function u(i){for(var t=i.BASE_1,r=i.BASE_3,a=i.MATRIX,o=i.BOARD,e=new Array(o),s=0,n=0;s<o;s+=r)for(var d=s,h=s+r;d<h;d+=a)for(var u=0;u<a;u+=t){var v=n+t;e.fill(s+u,n,v),n=v}return e}var v=i("SudokuSolver",function(){function i(i){this.size=void 0,this.DL_TOTAL_COLUMNS=void 0,this.dlx=void 0,this.matCodeMap=void 0,this.constraints=new Array(4);var t=i.childMatrixWidth,r=new e(t),a=4*r.BOARD,s=a*(r.BOARD*r.MATRIX)+r.MATRIX+1,n=new o({MAX_N:s});this.size=r,this.DL_TOTAL_COLUMNS=a,this.dlx=n,this.matCodeMap=h(r)}return i.prototype.solve=function(i,r){var a=this.size,o=this.DL_TOTAL_COLUMNS,e=this.constraints,s=this.matCodeMap,n=this.dlx,d=a.MATRIX,h=a.BOARD,u=function(i,t){return i*h+t+1};n.init(o);for(var v=0,l=0;v<d;++v)for(var f=0;f<d;++f,++l)for(var c=i[l],A=s[l],M=-1===c?d:c+1,B=-1===c?0:c;B<M;++B){e[0]=u(0,l),e[1]=u(1,v*d+B),e[2]=u(2,f*d+B),e[3]=u(3,A*d+B);var _=l*d+B+1;n.addRow(_,e)}var R=n.solve();if(null===R)return!1;if(null!==r)for(var S,D=t(R);!(S=D()).done;){var m=S.value-1,O=m%d;r[m/d>>0]=O}return!0},i}());i("SudokuCreator",function(){function i(i){this.size=void 0,this.solver=void 0,this.matCoordinateMap=void 0,this.gridCodes=void 0,this.candidates=void 0,this.availableNums=void 0,this.tmpBoard=void 0,this.difficulty=void 0;for(var t=i.childMatrixWidth,r=i.difficulty,a=void 0===r?.2:r,o=new e(t),n=new v({childMatrixWidth:t}),d=new Array(o.BOARD),h=0;h<o.BOARD;++h)d[h]=h;this.size=o,this.solver=n,this.matCoordinateMap=u(o),this.gridCodes=d,this.difficulty=this._resolveDifficulty(a),this.candidates=new Array(o.MATRIX),this.availableNums=new Array(o.MATRIX),this.tmpBoard=s(o)}var t=i.prototype;return t.createSudoku=function(i){null!=i&&(this.difficulty=this._resolveDifficulty(i));var t=this._createSolution();return{puzzle:this._createPuzzle(t),solution:t}},t._createSolution=function(){var i=this.size,t=this.candidates,o=this.gridCodes,e=this.solver,d=this.tmpBoard;n(d,-1,i),r(o);for(var h=Math.round((.3*Math.random()+.2)*i.BOARD),u=Math.max(i.BASE_3,Math.min(i.BOARD,h)),v=0;v<u;++v){var l=o[v],f=this._collectCandidates(d,l);if(!(f<1)){var c=t[a(f)];d[l]=c}}for(var A=s(i),M=0;M<u;++M){var B=o[M];if(-1!==B){if(e.solve(d,A))return A;d[B]=-1}}throw new Error("[createSolution] This is impossible!")},t._createPuzzle=function(i){var t=this.size,a=this.candidates,o=this.gridCodes,e=this.solver,n=this.difficulty,h=s(t);d(i,h,t),r(o);for(var u=Math.floor(t.BOARD*n),v=0;v<u;++v){for(var l=o[v],f=this._collectCandidates(h,l),c=0;c<f&&(h[l]=a[c],!e.solve(h,null));++c);h[l]=c<f?i[l]:-1}return h},t._collectCandidates=function(i,t){var r=this.size,a=this.matCoordinateMap,o=this.candidates,e=this.availableNums,s=r.MATRIX_RANK,n=r.MATRIX,d=r.BOARD,h=t%n,u=t-h,v=a[t];e.fill(!0);for(var l=u,f=u+n;l<f;++l){var c=i[l];-1!==c&&(e[c]=!1)}for(var A=h;A<d;A+=n){var M=i[A];-1!==M&&(e[M]=!1)}for(var B=v,_=0;_<s;++_,B+=n)for(var R=B,S=B+s;R<S;++R){var D=i[R];-1!==D&&(e[D]=!1)}for(var m=0,O=0;O<n;++O)e[O]&&(o[m++]=O);return m},t._resolveDifficulty=function(i){return.8*Math.max(0,Math.min(1,i))+.2},i}())}}}));

System.register("chunks:///_virtual/index2.mjs",[],(function(n){"use strict";return{execute:function(){function t(n){var t=Math.random()*n>>0;return t===n?n-1:t}function e(n,e,r){if(void 0===e&&(e=0),void 0===r&&(r=n.length),e<0&&(e=0),r>n.length&&(r=n.length),!(e+1>=r))for(var u=r-e-1,i=r-1;u>0;--u,--i){var f=t(u)+e,o=n[f];n[f]=n[i],n[i]=o}}n({default:e,knuthShuffle:e,randomInt:t})}}}));

System.register("chunks:///_virtual/index3.mjs",[],(function(t){"use strict";return{execute:function(){t("DancingLinkX",function(){function t(t){this._count=void 0,this._row=void 0,this._col=void 0,this._L=void 0,this._R=void 0,this._U=void 0,this._D=void 0,this._sz=void 0;var i=t.MAX_N;this._count=new Array(i),this._row=new Array(i),this._col=new Array(i),this._L=new Array(i),this._R=new Array(i),this._U=new Array(i),this._D=new Array(i),this._sz=0}var i=t.prototype;return i.destroy=function(){this._sz=0,this._count.length=0,this._row.length=0,this._col.length=0,this._L.length=0,this._R.length=0,this._U.length=0,this._D.length=0},i.init=function(t){for(var i=this._L,s=this._R,h=this._U,r=this._D,o=this._count,_=t+1,n=0;n<_;++n)i[n]=n-1,s[n]=n+1,h[n]=n,r[n]=n;s[t]=0,i[0]=t,o.fill(0,0,_),this._sz=_},i.addRow=function(t,i){for(var s=this._count,h=this._row,r=this._col,o=this._L,_=this._R,n=this._U,e=this._D,u=this._sz,l=u,c=0;c<i.length;++c,++u){var a=i[c];h[u]=t,r[u]=a,s[a]+=1,o[u]=u-1,_[u]=u+1,e[u]=a,e[n[a]]=u,n[u]=n[a],n[a]=u}_[u-1]=l,o[l]=u-1,this._sz=u},i.solve=function(){if(0===this._sz)return null;var t=[];return this._algorithmX(0,t)?t:null},i._algorithmX=function(t,i){var s=this._count,h=this._row,r=this._col,o=this._L,_=this._R,n=this._D;if(0===_[0])return i.length=t,!0;for(var e=_[0],u=_[0];0!==u;u=_[u])s[u]<s[e]&&(e=u);this._removeColumn(e);for(var l=n[e];l!==e;l=n[l]){i[t]=h[l];for(var c=_[l];c!==l;c=_[c])this._removeColumn(r[c]);if(this._algorithmX(t+1,i))return!0;for(var a=o[l];a!==l;a=o[a])this._restoreColumn(r[a])}return this._restoreColumn(e),!1},i._removeColumn=function(t){var i=this._count,s=this._col,h=this._L,r=this._R,o=this._U,_=this._D;h[r[t]]=h[t],r[h[t]]=r[t];for(var n=_[t];n!==t;n=_[n])for(var e=r[n];e!==n;e=r[e])o[_[e]]=o[e],_[o[e]]=_[e],i[s[e]]-=1},i._restoreColumn=function(t){for(var i=this._count,s=this._col,h=this._L,r=this._R,o=this._U,_=this._D,n=o[t];n!==t;n=o[n])for(var e=h[n];e!==n;e=h[e])i[s[e]]+=1,o[_[e]]=e,_[o[e]]=e;h[r[t]]=t,r[h[t]]=t},t}())}}}));

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js",[],(function(e){"use strict";return{execute:function(){function r(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,a(i.key),i)}}function t(r,i){return(t=e("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e}))(r,i)}function i(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}function o(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function a(e){var r=o(e,"string");return"symbol"==typeof r?r:String(r)}e({applyDecoratedDescriptor:function(e,r,t,i,n){var o={};Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=t.slice().reverse().reduce((function(t,i){return i(e,r,t)||t}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,r,o),o=null);return o},arrayLikeToArray:n,assertThisInitialized:function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},createClass:function(e,t,i){t&&r(e.prototype,t);i&&r(e,i);return Object.defineProperty(e,"prototype",{writable:!1}),e},createForOfIteratorHelperLoose:function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=i(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},inheritsLoose:function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,t(e,r)},initializerDefineProperty:function(e,r,t,i){if(!t)return;Object.defineProperty(e,r,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(i):void 0})},setPrototypeOf:t,toPrimitive:o,toPropertyKey:a,unsupportedIterableToArray:i})}}}));

} }; });