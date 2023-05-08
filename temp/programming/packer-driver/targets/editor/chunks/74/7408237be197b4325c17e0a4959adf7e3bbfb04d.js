System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Button, director, find, MenuModel, MenuView, StoredPersistNode, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MenuController;

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
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Model", _descriptor, this);

          _initializerDefineProperty(this, "View", _descriptor2, this);

          this.volumeSudokuArray = [];
          this.gameClient = void 0;
        }

        async start() {
          let parameters = find("GameClient");

          if (parameters === null) {
            let parameters = new Node("GameClient");
            let gameClientParams = parameters.addComponent(_crd && StoredPersistNode === void 0 ? (_reportPossibleCrUseOfStoredPersistNode({
              error: Error()
            }), StoredPersistNode) : StoredPersistNode);
            gameClientParams.gameClient = this.gameClient;
            gameClientParams.volumeAudio = this.View.AudioBg.volume;
            director.addPersistRootNode(parameters);
          } // console.log(audioParam);


          this.View.AudioBg.play();
          this.View.AudioMute.node.active = false;
          this.View.AudioUnmute.node.active = true;
          let volumeValue = localStorage.getItem('volumeSudokuArray');
          localStorage.setItem('volumeSudokuArray', JSON.stringify(this.volumeSudokuArray));

          if (volumeValue) {
            this.volumeSudokuArray = JSON.parse(volumeValue);
            localStorage.setItem('volumeSudokuArray', JSON.stringify(this.volumeSudokuArray));
          }

          if (this.volumeSudokuArray.length == 0) {
            this.View.AudioBg.volume = 0.7;
            this.volumeSudokuArray.push(this.View.AudioBg.volume);
          } else {
            this.View.AudioBg.volume = this.volumeSudokuArray[this.volumeSudokuArray.length - 1];
          }

          if (this.View.AudioBg.volume == 0.7) {
            this.View.AudioMute.node.active = false;
            this.View.AudioUnmute.node.active = true;
          }

          if (this.View.AudioBg.volume == 0) {
            this.View.AudioMute.node.active = true;
            this.View.AudioUnmute.node.active = false;
          }
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
          this.volumeSudokuArray.push(this.View.AudioBg.volume);
          localStorage.setItem('volumeSudokuArray', JSON.stringify(this.volumeSudokuArray));
        }

        btnUnmute(AudioMute) {
          this.View.AudioMute.node.active = true;
          this.View.AudioUnmute.node.active = false;
          this.View.AudioBg.volume = 0;
          this.volumeSudokuArray.push(this.View.AudioBg.volume);
          localStorage.setItem('volumeSudokuArray', JSON.stringify(this.volumeSudokuArray));
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
//# sourceMappingURL=7408237be197b4325c17e0a4959adf7e3bbfb04d.js.map