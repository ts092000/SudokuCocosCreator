System.register(["__unresolved_0", "cc", "@dattenlagiday/oc_gamecenter_sdk_pkg"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GameClient, _dec, _class, _crd, ccclass, property, StoredPersistNode;

  function _reportPossibleCrUseOfGameClient(extras) {
    _reporterNs.report("GameClient", "@dattenlagiday/oc_gamecenter_sdk_pkg", _context.meta, extras);
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
    }, function (_dattenlagidayOc_gamecenter_sdk_pkg) {
      GameClient = _dattenlagidayOc_gamecenter_sdk_pkg.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8ecfpzT+hDw51a4irUqFWS", "StoredPersistNode", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StoredPersistNode", StoredPersistNode = (_dec = ccclass('StoredPersistNode'), _dec(_class = class StoredPersistNode extends Component {
        constructor(...args) {
          super(...args);
          this.gameClient = void 0;
          this.AudioBg = void 0;
          this.AudioMute = void 0;
          this.AudioUnMute = void 0;
        }

        async start() {
          console.log(this.gameClient);

          if (this.gameClient === undefined) {
            this.gameClient = new (_crd && GameClient === void 0 ? (_reportPossibleCrUseOfGameClient({
              error: Error()
            }), GameClient) : GameClient)("643fc5fe0a3bf6132391328d", "568a590d-f9d1-4a10-b59d-ea6e0d9e9786");
            await this.gameClient.initAsync().then(() => {}).catch(err => console.log(err));
          } // this.gameClient = new GameClient("643fc5fe0a3bf6132391328d", "568a590d-f9d1-4a10-b59d-ea6e0d9e9786");

        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e55afbce9aa22c5432ba973a288c7fd7ed56e7c.js.map