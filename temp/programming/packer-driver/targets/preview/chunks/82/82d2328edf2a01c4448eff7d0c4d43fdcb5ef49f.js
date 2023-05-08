System.register(["__unresolved_0", "cc", "@dattenlagiday/oc_gamecenter_sdk_pkg", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, director, GameClient, StoredPersistNode, _dec, _class, _crd, ccclass, property, EntryController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfGameClient(extras) {
    _reporterNs.report("GameClient", "@dattenlagiday/oc_gamecenter_sdk_pkg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoredPersistNode(extras) {
    _reporterNs.report("StoredPersistNode", "./StoredPersistNode", _context.meta, extras);
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
      find = _cc.find;
      director = _cc.director;
    }, function (_dattenlagidayOc_gamecenter_sdk_pkg) {
      GameClient = _dattenlagidayOc_gamecenter_sdk_pkg.default;
    }, function (_unresolved_2) {
      StoredPersistNode = _unresolved_2.StoredPersistNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8072FFLlhDMKxVFj8UoFUE", "EntryController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EntryController", EntryController = (_dec = ccclass('EntryController'), _dec(_class = class EntryController extends Component {
        constructor() {
          super(...arguments);
          this.gameClient = void 0;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var parameters = find("GameClient");

            if (parameters === null) {
              var _parameters = new Node("GameClient");

              if (_this.gameClient === undefined) {
                _this.gameClient = new (_crd && GameClient === void 0 ? (_reportPossibleCrUseOfGameClient({
                  error: Error()
                }), GameClient) : GameClient)("643fce940a3bf613239132bc", "057e6bb4-e80d-40f2-ae0a-2940ac94ee15");
                yield _this.gameClient.initAsync().then(() => {}).catch(err => console.log(err));
              }

              var gameClientParams = _parameters.addComponent(_crd && StoredPersistNode === void 0 ? (_reportPossibleCrUseOfStoredPersistNode({
                error: Error()
              }), StoredPersistNode) : StoredPersistNode);

              gameClientParams.gameClient = _this.gameClient;
              director.addPersistRootNode(_parameters);
            }

            director.loadScene("Menu");
          })();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82d2328edf2a01c4448eff7d0c4d43fdcb5ef49f.js.map