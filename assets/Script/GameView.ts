import { _decorator, Component, Node, Label, Button, Sprite, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameView')
export class GameView extends Component {
    // @property(Node)
    // private startGame: Node;

    // public get StartGame(){
    //     return this.startGame;
    // }
    // public set GameStart(v: Node){
    //     this.startGame = v;
    // }

    @property({type:Node})
    private bgBoardNode: Node;

    @property({type:Node})
    private boardNode: Node;

    @property({type:Node})
    private gameOver: Node;

    @property({type:Node})
    private levelPanel: Node;

    @property({type:Button})
    private easyLevel: Button;

    @property({type:Button})
    private mediumLevel: Button;

    @property({type:Button})
    private hardLevel: Button;

    @property({type:Button})
    private playAgainBtn: Button;

    @property({type:Button})
    private newGameBtn: Button;

    @property({type:Label})
    private playerFault: Label;

    @property({type:Sprite})
    private bgMain: Sprite;

    @property({type:Label})
    private timeLabel: Label = null;

    @property({type:Label})
    private levelLabel: Label = null;

    @property({type:Node})
    private winGame: Node;

    @property({type:Label})
    private timeFinish: Label = null;

    @property({type:Label})
    private bestTime: Label;

    @property({type:Label})
    private bestTimeLevel: Label;

    @property({type:Button})
    private audioMute: Button

    @property({type:Button})
    private audioUnmute: Button

    @property({type:AudioSource})
    private audioBg: AudioSource;

    @property({type:AudioSource})
    private selectNode: AudioSource;

    @property({type:AudioSource})
    private loseAudio: AudioSource;

    @property({type:AudioSource})
    private winAudio: AudioSource;

    @property({type:AudioSource})
    private startAudio: AudioSource;

    public get BgBoardNode() : Node {
        return this.bgBoardNode
    }

    public set BgBoardNode(bgBoardNode : Node) {
        this.bgBoardNode = bgBoardNode;
    }
    
    public get BoardNode() : Node {
        return this.boardNode
    }

    public set BoardNode(boardNode : Node) {
        this.boardNode = boardNode;
    }
    
    public get GameOver() : Node {
        return this.gameOver
    }

    public set GameOver(gameOver : Node) {
        this.gameOver = gameOver;
    }

    public get LevelPanel() : Node {
        return this.levelPanel
    }

    public set LevelPanel(levelPanel : Node) {
        this.levelPanel = levelPanel;
    }

    public get EasyLevel() : Button {
        return this.easyLevel
    }

    public set EasyLevel(easyLevel : Button) {
        this.easyLevel = easyLevel;
    }

    public get MediumLevel() : Button {
        return this.mediumLevel
    }

    public set MediumLevel(mediumLevel : Button) {
        this.mediumLevel = mediumLevel;
    }

    public get HardLevel() : Button {
        return this.hardLevel
    }

    public set HardLevel(hardLevel : Button) {
        this.hardLevel = hardLevel;
    }

    public get PlayAgainBtn() : Button {
        return this.playAgainBtn
    }

    public set PlayAgainBtn(playAgainBtn : Button) {
        this.playAgainBtn = playAgainBtn;
    }

    public get NewGameBtn() : Button {
        return this.newGameBtn
    }

    public set NewGameBtn(newGameBtn : Button) {
        this.newGameBtn = newGameBtn;
    }

    public get PlayerFault() : Label {
        return this.playerFault
    }

    public set PlayerFault(playerFault : Label) {
        this.playerFault = playerFault;
    }

    public get BgMain() : Sprite {
        return this.bgMain
    }

    public set BgMain(bgMain : Sprite) {
        this.bgMain = bgMain;
    }

    public get TimeLabel() : Label {
        return this.timeLabel
    }

    public set TimeLabel(timeLabel : Label) {
        this.timeLabel = timeLabel;
    }

    public get LevelLabel() : Label {
        return this.levelLabel
    }

    public set LevelLabel(levelLabel : Label) {
        this.levelLabel = levelLabel;
    }

    public get WinGame() : Node {
        return this.winGame
    }

    public set WinGame(winGame : Node) {
        this.winGame = winGame;
    }

    public get TimeFinish() : Label {
        return this.timeFinish
    }

    public set TimeFinish(timeFinish : Label) {
        this.timeFinish = timeFinish;
    }

    public get BestTime() : Label {
        return this.bestTime
    }

    public set BestTime(bestTime : Label) {
        this.bestTime = bestTime;
    }

    public get BestTimeLevel() : Label {
        return this.bestTimeLevel
    }

    public set BestTimeLevel(bestTimeLevel : Label) {
        this.bestTimeLevel = bestTimeLevel;
    }

    public get AudioMute() : Button {
        return this.audioMute
    }

    public set AudioMute(audioMute : Button) {
        this.audioMute = audioMute;
    }

    public get AudioUnmute() : Button {
        return this.audioUnmute
    }

    public set AudioUnmute(audioUnmute : Button) {
        this.audioUnmute = audioUnmute;
    }

    public get AudioBg() : AudioSource {
        return this.audioBg
    }

    public set AudioBg(audioBg : AudioSource) {
        this.audioBg = audioBg;
    }

    public get SelectNode() : AudioSource {
        return this.selectNode
    }

    public set SelectNode(selectNode : AudioSource) {
        this.selectNode = selectNode;
    }

    public get LoseAudio() : AudioSource {
        return this.loseAudio
    }

    public set LoseAudio(loseAudio : AudioSource) {
        this.loseAudio = loseAudio;
    }

    public get WinAudio() : AudioSource {
        return this.winAudio
    }

    public set WinAudio(winAudio : AudioSource) {
        this.winAudio = winAudio;
    }

    public get StartAudio() : AudioSource {
        return this.startAudio
    }

    public set StartAudio(startAudio : AudioSource) {
        this.startAudio = startAudio;
    }
}
