System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, Button, Sprite, AudioSource, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _crd, ccclass, property, GameView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b0c4GCCFJBRrlINHLza3Pw", "GameView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Button', 'Sprite', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameView", GameView = (_dec = ccclass('GameView'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Button
      }), _dec7 = property({
        type: Button
      }), _dec8 = property({
        type: Button
      }), _dec9 = property({
        type: Button
      }), _dec10 = property({
        type: Button
      }), _dec11 = property({
        type: Label
      }), _dec12 = property({
        type: Sprite
      }), _dec13 = property({
        type: Label
      }), _dec14 = property({
        type: Label
      }), _dec15 = property({
        type: Node
      }), _dec16 = property({
        type: Label
      }), _dec17 = property({
        type: Label
      }), _dec18 = property({
        type: Label
      }), _dec19 = property({
        type: Button
      }), _dec20 = property({
        type: Button
      }), _dec21 = property({
        type: AudioSource
      }), _dec22 = property({
        type: AudioSource
      }), _dec23 = property({
        type: AudioSource
      }), _dec24 = property({
        type: AudioSource
      }), _dec25 = property({
        type: AudioSource
      }), _dec(_class = (_class2 = class GameView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bgBoardNode", _descriptor, this);

          _initializerDefineProperty(this, "boardNode", _descriptor2, this);

          _initializerDefineProperty(this, "gameOver", _descriptor3, this);

          _initializerDefineProperty(this, "levelPanel", _descriptor4, this);

          _initializerDefineProperty(this, "easyLevel", _descriptor5, this);

          _initializerDefineProperty(this, "mediumLevel", _descriptor6, this);

          _initializerDefineProperty(this, "hardLevel", _descriptor7, this);

          _initializerDefineProperty(this, "playAgainBtn", _descriptor8, this);

          _initializerDefineProperty(this, "newGameBtn", _descriptor9, this);

          _initializerDefineProperty(this, "playerFault", _descriptor10, this);

          _initializerDefineProperty(this, "bgMain", _descriptor11, this);

          _initializerDefineProperty(this, "timeLabel", _descriptor12, this);

          _initializerDefineProperty(this, "levelLabel", _descriptor13, this);

          _initializerDefineProperty(this, "winGame", _descriptor14, this);

          _initializerDefineProperty(this, "timeFinish", _descriptor15, this);

          _initializerDefineProperty(this, "bestTime", _descriptor16, this);

          _initializerDefineProperty(this, "bestTimeLevel", _descriptor17, this);

          _initializerDefineProperty(this, "audioMute", _descriptor18, this);

          _initializerDefineProperty(this, "audioUnmute", _descriptor19, this);

          _initializerDefineProperty(this, "audioBg", _descriptor20, this);

          _initializerDefineProperty(this, "selectNode", _descriptor21, this);

          _initializerDefineProperty(this, "loseAudio", _descriptor22, this);

          _initializerDefineProperty(this, "winAudio", _descriptor23, this);

          _initializerDefineProperty(this, "startAudio", _descriptor24, this);
        }

        get BgBoardNode() {
          return this.bgBoardNode;
        }

        set BgBoardNode(bgBoardNode) {
          this.bgBoardNode = bgBoardNode;
        }

        get BoardNode() {
          return this.boardNode;
        }

        set BoardNode(boardNode) {
          this.boardNode = boardNode;
        }

        get GameOver() {
          return this.gameOver;
        }

        set GameOver(gameOver) {
          this.gameOver = gameOver;
        }

        get LevelPanel() {
          return this.levelPanel;
        }

        set LevelPanel(levelPanel) {
          this.levelPanel = levelPanel;
        }

        get EasyLevel() {
          return this.easyLevel;
        }

        set EasyLevel(easyLevel) {
          this.easyLevel = easyLevel;
        }

        get MediumLevel() {
          return this.mediumLevel;
        }

        set MediumLevel(mediumLevel) {
          this.mediumLevel = mediumLevel;
        }

        get HardLevel() {
          return this.hardLevel;
        }

        set HardLevel(hardLevel) {
          this.hardLevel = hardLevel;
        }

        get PlayAgainBtn() {
          return this.playAgainBtn;
        }

        set PlayAgainBtn(playAgainBtn) {
          this.playAgainBtn = playAgainBtn;
        }

        get NewGameBtn() {
          return this.newGameBtn;
        }

        set NewGameBtn(newGameBtn) {
          this.newGameBtn = newGameBtn;
        }

        get PlayerFault() {
          return this.playerFault;
        }

        set PlayerFault(playerFault) {
          this.playerFault = playerFault;
        }

        get BgMain() {
          return this.bgMain;
        }

        set BgMain(bgMain) {
          this.bgMain = bgMain;
        }

        get TimeLabel() {
          return this.timeLabel;
        }

        set TimeLabel(timeLabel) {
          this.timeLabel = timeLabel;
        }

        get LevelLabel() {
          return this.levelLabel;
        }

        set LevelLabel(levelLabel) {
          this.levelLabel = levelLabel;
        }

        get WinGame() {
          return this.winGame;
        }

        set WinGame(winGame) {
          this.winGame = winGame;
        }

        get TimeFinish() {
          return this.timeFinish;
        }

        set TimeFinish(timeFinish) {
          this.timeFinish = timeFinish;
        }

        get BestTime() {
          return this.bestTime;
        }

        set BestTime(bestTime) {
          this.bestTime = bestTime;
        }

        get BestTimeLevel() {
          return this.bestTimeLevel;
        }

        set BestTimeLevel(bestTimeLevel) {
          this.bestTimeLevel = bestTimeLevel;
        }

        get AudioMute() {
          return this.audioMute;
        }

        set AudioMute(audioMute) {
          this.audioMute = audioMute;
        }

        get AudioUnmute() {
          return this.audioUnmute;
        }

        set AudioUnmute(audioUnmute) {
          this.audioUnmute = audioUnmute;
        }

        get AudioBg() {
          return this.audioBg;
        }

        set AudioBg(audioBg) {
          this.audioBg = audioBg;
        }

        get SelectNode() {
          return this.selectNode;
        }

        set SelectNode(selectNode) {
          this.selectNode = selectNode;
        }

        get LoseAudio() {
          return this.loseAudio;
        }

        set LoseAudio(loseAudio) {
          this.loseAudio = loseAudio;
        }

        get WinAudio() {
          return this.winAudio;
        }

        set WinAudio(winAudio) {
          this.winAudio = winAudio;
        }

        get StartAudio() {
          return this.startAudio;
        }

        set StartAudio(startAudio) {
          this.startAudio = startAudio;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgBoardNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "boardNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gameOver", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "levelPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "easyLevel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mediumLevel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "hardLevel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "playAgainBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "newGameBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "playerFault", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bgMain", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "winGame", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "timeFinish", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bestTime", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "bestTimeLevel", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "audioMute", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "audioUnmute", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "audioBg", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "loseAudio", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "winAudio", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "startAudio", [_dec25], {
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
//# sourceMappingURL=7a00a0d81b2c56a76729ea8c59ce4d93616f3cc4.js.map