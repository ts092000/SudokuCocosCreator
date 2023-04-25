System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Button, director, find, AudioSource, MenuModel, MenuView, StoredPersistNode, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MenuController;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMenuModel(extras) {
    _reporterNs.report("MenuModel", "./MenuModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuView(extras) {
    _reporterNs.report("MenuView", "./MenuView", _context.meta, extras);
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
      Button = _cc.Button;
      director = _cc.director;
      find = _cc.find;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      MenuModel = _unresolved_2.MenuModel;
    }, function (_unresolved_3) {
      MenuView = _unresolved_3.MenuView;
    }, function (_unresolved_4) {
      StoredPersistNode = _unresolved_4.StoredPersistNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22ebc+AI0pHsazE6FqDdiqU", "MenuController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'director', 'find', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MenuController", MenuController = (_dec = ccclass('MenuController'), _dec2 = property({
        type: _crd && MenuModel === void 0 ? (_reportPossibleCrUseOfMenuModel({
          error: Error()
        }), MenuModel) : MenuModel
      }), _dec3 = property({
        type: _crd && MenuView === void 0 ? (_reportPossibleCrUseOfMenuView({
          error: Error()
        }), MenuView) : MenuView
      }), _dec(_class = (_class2 = class MenuController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Model", _descriptor, this);

          _initializerDefineProperty(this, "View", _descriptor2, this);

          this.gameClient = void 0;
        }

        start() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var parameters = find("GameClient");
            console.log(_this.gameClient);

            if (parameters === null) {
              console.log('null');

              var _parameters = new Node("GameClient");

              var gameClientParams = _parameters.addComponent(_crd && StoredPersistNode === void 0 ? (_reportPossibleCrUseOfStoredPersistNode({
                error: Error()
              }), StoredPersistNode) : StoredPersistNode);

              gameClientParams.gameClient = _this.gameClient;
              director.addPersistRootNode(_parameters);
            } // let audioNode = find("BackgroundAudio");
            // console.log(audioNode);


            var audioParam = _this.View.AudioBg.getComponent(AudioSource);

            console.log(audioParam);
            audioParam = _this.View.AudioBg;
            director.addPersistRootNode(audioParam.node);
            console.log('gameClient: ', _this.gameClient);
            console.log(parameters); // console.log(audioParam);

            _this.View.AudioBg.play();

            _this.View.AudioMute.node.active = false;
            _this.View.AudioUnmute.node.active = true;
          })();
        }

        onLoad() {
          this.View.PlayGameBtn.node.on(Button.EventType.CLICK, this.playGameBtn, this);
        }

        update(deltaTime) {
          this.View.AudioMute.node.on(Button.EventType.CLICK, this.btnMute, this);
          this.View.AudioUnmute.node.on(Button.EventType.CLICK, this.btnUnmute, this);
        }

        playGameBtn(PlayGameBtn) {
          director.loadScene("MainGame");
        }

        btnMute(AudioMute) {
          this.View.AudioMute.node.active = false;
          this.View.AudioUnmute.node.active = true;
          this.View.AudioBg.volume = 0.7;
        }

        btnUnmute(AudioMute) {
          this.View.AudioMute.node.active = true;
          this.View.AudioUnmute.node.active = false;
          this.View.AudioBg.volume = 0;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Model", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "View", [_dec3], {
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
//# sourceMappingURL=5a6d0eb8978ec7e4eff741e3aeeecd52e5376c25.js.map