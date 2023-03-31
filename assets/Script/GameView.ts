import { _decorator, Component, Node, Label, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameView')
export class GameView extends Component {
    @property(Node)
    private startGame: Node;
    public get StartGame(){
        return this.startGame;
    }
    public set GameStart(v: Node){
        this.startGame = v;
    }
}
