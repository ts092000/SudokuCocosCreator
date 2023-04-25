import { _decorator, Component, Node, Button, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MenuView')
export class MenuView extends Component {
    @property({type:Button})
    private playGameBtn: Button

    @property({type:Button})
    private audioMute: Button

    @property({type:Button})
    private audioUnmute: Button

    @property({type:AudioSource})
    private audioBg: AudioSource

    public get PlayGameBtn() : Button {
        return this.playGameBtn
    }

    public set PlayGameBtn(playGameBtn : Button) {
        this.playGameBtn = playGameBtn;
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

    start() {

    }

    update(deltaTime: number) {
        
    }
}

