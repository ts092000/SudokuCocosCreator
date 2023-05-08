import { _decorator, Component, Node ,Button, director, find, AudioSource} from 'cc';
import { MenuModel } from './MenuModel';
import { MenuView } from './MenuView';
import { StoredPersistNode } from './StoredPersistNode';
import GameClient from '@dattenlagiday/oc_gamecenter_sdk_pkg';
const { ccclass, property } = _decorator;

@ccclass('MenuController')
export class MenuController extends Component {
    @property({type:MenuModel})
    Model: MenuModel

    @property({type:MenuView})
    View: MenuView

    private volumeSudokuArray: number[] = [];
    public gameClient;

    public async start() : Promise<void>{
        // console.log(audioParam);
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
        }
        else {
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

    public onLoad() {
        this.View.PlayGameBtn.node.on(Button.EventType.CLICK, this.playGameBtn, this);
    }

    public update(deltaTime: number) {
        this.View.AudioMute.node.on(Button.EventType.CLICK, this.btnMute, this);
        this.View.AudioUnmute.node.on(Button.EventType.CLICK, this.btnUnmute, this);
    }

    private playGameBtn(PlayGameBtn: Button) {
        director.loadScene("MainGame");
    }

    private btnMute(AudioMute: Button) {
        this.View.AudioMute.node.active = false;
        this.View.AudioUnmute.node.active = true;
        this.View.AudioBg.volume = 0.7;
        this.volumeSudokuArray.push(this.View.AudioBg.volume);
        localStorage.setItem('volumeSudokuArray', JSON.stringify(this.volumeSudokuArray));
    }

    private btnUnmute(AudioMute: Button) {
        this.View.AudioMute.node.active = true;
        this.View.AudioUnmute.node.active = false;
        this.View.AudioBg.volume = 0;
        this.volumeSudokuArray.push(this.View.AudioBg.volume);
        localStorage.setItem('volumeSudokuArray', JSON.stringify(this.volumeSudokuArray));
    }
}

