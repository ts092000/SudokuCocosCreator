System.register(["__unresolved_0", "cc", "@dattenlagiday/oc_gamecenter_sdk_pkg", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, director, GameClient, StoredPersistNode, _dec, _class, _crd, ccclass, property, EntryController;

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
        constructor(...args) {
          super(...args);
          this.gameClient = void 0;
        }

        async start() {
          let parameters = find("GameClient");

          if (parameters === null) {
            let parameters = new Node("GameClient");

            if (this.gameClient === undefined) {
              this.gameClient = new (_crd && GameClient === void 0 ? (_reportPossibleCrUseOfGameClient({
                error: Error()
              }), GameClient) : GameClient)("643fce940a3bf613239132bc", "057e6bb4-e80d-40f2-ae0a-2940ac94ee15");
              await this.gameClient.initAsync().then(() => {}).catch(err => console.log(err));
            }

            let gameClientParams = parameters.addComponent(_crd && StoredPersistNode === void 0 ? (_reportPossibleCrUseOfStoredPersistNode({
              error: Error()
            }), StoredPersistNode) : StoredPersistNode);
            gameClientParams.gameClient = this.gameClient;
            director.addPersistRootNode(parameters);
          }

          director.loadScene("Menu");
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86e15e06913599a3fe26ae6149e9e16ba91510b6.js.map