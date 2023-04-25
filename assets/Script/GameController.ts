import { _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, Sprite, Button, director, AudioClip, AudioSource, Slider, Prefab, instantiate, Vec2, find} from 'cc';
const { ccclass, property } = _decorator;
import { SudokuCreator } from '@algorithm.ts/sudoku';
import { GameView } from './GameView';
import GameClient from '@dattenlagiday/oc_gamecenter_sdk_pkg';
import { StoredPersistNode } from './StoredPersistNode';

@ccclass('GameController')
export class GameController extends Component {

    // @property(Node)
    // startGame: Node;
    
    @property({type:GameView})
    gameView: GameView;

    @property({type:Label})
    numberLabels: Label[] = [];

    //LevelPanel

    @property({type:Node})
    bgNodeValue: Node;
    
    //Audio Game

    @property(Prefab)
    frameNode: Prefab;

    @property(Prefab)
    frameNodeNum: Prefab;

    selectedNode: Node = null;
    puzzleGame: number[] = [];
    solutionGame: number[] = [];
    redNumber: number = 0;
    difficultyLevel: number;
    timeElapsed: number = 0; 
    timeBestArr: number[] = [];
    timeBestArr1: number[] = [];
    timeBestArr2: number[] = [];
    volumeBg: number[] = [];
    volumeEffect: number[] = [];

    nodePositionArray: Vec3[] = [];
    frameNodeNumArray: Node[] = [];

    frameNodePositionArray: Vec3[] = [];
    frameNodeArray: Node[] = [];
    frameNodeArrayLength: number;

    private volumeSudokuArray: number[] = [];
    public gameClient;
    matchId:string

    public async start():Promise<void> {
        let _this = this;
        let parameters = find("GameClient");
        let gameClientParams = parameters.getComponent(StoredPersistNode);
            
        this.gameClient = gameClientParams.gameClient;
        
        await gameClientParams.gameClient.match
            .startMatch()
            .then((data) => {_this.matchId=data.matchId})
            .catch((error) => console.log(error));

        let bestscore=localStorage.getItem('bestTime'); 
        if(bestscore){
            this.timeBestArr=JSON.parse(bestscore);
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' +(Math.min(...this.timeBestArr))
        }

        let bestscore1=localStorage.getItem('bestTime1');
        if(bestscore1){
            this.timeBestArr1=JSON.parse(bestscore1);
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' +(Math.min(...this.timeBestArr1))
        }

        let bestscore2=localStorage.getItem('bestTime2');
        if(bestscore2){
            this.timeBestArr2=JSON.parse(bestscore2);
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' +(Math.min(...this.timeBestArr2))
        }

        let volumeValue = JSON.parse(localStorage.getItem('volumeSudokuArray'));

        if (volumeValue.length == 0) {
            this.gameView.AudioBg.volume = 0.7;
            this.gameView.SelectNode.volume = 0.7;
            this.gameView.WinAudio.volume = 0.7;
            this.gameView.LoseAudio.volume = 0.7;
        }
        else {
            this.gameView.AudioBg.volume = volumeValue[ volumeValue.length - 1];
            this.gameView.SelectNode.volume = volumeValue[ volumeValue.length - 1];
            this.gameView.WinAudio.volume = volumeValue[ volumeValue.length - 1];
            this.gameView.LoseAudio.volume = volumeValue[ volumeValue.length - 1];
        }

        if (this.gameView.AudioBg.volume == 0.7) {
            this.gameView.AudioMute.node.active = false;
            this.gameView.AudioUnmute.node.active = true;
        }
        
        if (this.gameView.AudioBg.volume == 0) {
            this.gameView.AudioMute.node.active = true;
            this.gameView.AudioUnmute.node.active = false;
        }
        this.gameView.AudioBg.play();
    }

    onLoad() {
        this.gameView.LevelPanel.active = true;
        this.gameView.BgBoardNode.active = true;
        //this.createPuzzleBoard();
    }

    updateTimer() {
        this.timeElapsed++;
        this.gameView.TimeLabel.string = `Thời gian : ${this.timeElapsed} giây`;
    }

    rePlayGame(){
        director.loadScene("Menu");
    }

    displayLevelPanel(){
        this.gameView.LevelPanel.active = true;
    }
    
    update(){
        if(this.difficultyLevel == 0.2){
            this.gameView.BestTimeLevel.string = 'Độ Khó: DỄ'
            this.gameView.BestTime.string = 'Thời gian nhanh nhất : ' +(Math.min(...this.timeBestArr));
        } else if(this.difficultyLevel == 0.5){
            this.gameView.BestTimeLevel.string = 'Độ Khó: TRUNG BÌNH'
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' +(Math.min(...this.timeBestArr1));
        } else if(this.difficultyLevel == 0.8){
            this.gameView.BestTimeLevel.string = 'Độ Khó: KHÓ'
            this.gameView.BestTime.string = 'Thời gian nhanh nhất: ' +(Math.min(...this.timeBestArr2));
        }

        this.gameView.AudioMute.node.on(Button.EventType.CLICK, this.btnMute, this);
        this.gameView.AudioUnmute.node.on(Button.EventType.CLICK, this.btnUnmute, this);
    }

    //levelFunction
    easyLevelGame() {
        this.difficultyLevel = 0.2;
        this.createPuzzleBoard();
        this.gameView.LevelPanel.active = false;
        this.bgNodeValue.active = true;
        this.schedule(this.updateTimer, 1);
        this.gameView.LevelLabel.string = "Độ khó : DỄ"
        this.gameView.NewGameBtn.node.active = true;
        this.gameView.PlayerFault.node.active = true;
        this.gameView.BgBoardNode.active = true;
    }

    mediumLevelGame() {
        this.difficultyLevel = 0.5;
        this.createPuzzleBoard();
        this.gameView.LevelPanel.active = false;
        this.bgNodeValue.active = true;
        this.schedule(this.updateTimer, 1);
        this.gameView.LevelLabel.string = "Độ khó : TRUNG BÌNH"
        this.gameView.NewGameBtn.node.active = true;
        this.gameView.PlayerFault.node.active = true;
        this.gameView.BgBoardNode.active = true;
    }

    hardLevelGame() {
        this.difficultyLevel = 0.8;
        this.createPuzzleBoard();
        this.gameView.LevelPanel.active = false;
        this.bgNodeValue.active = true;
        this.schedule(this.updateTimer, 1); 
        this.gameView.LevelLabel.string = "Độ khó : KHÓ"
        this.gameView.NewGameBtn.node.active = true;
        this.gameView.PlayerFault.node.active = true;
        this.gameView.BgBoardNode.active = true;
    }

    currentPos: Vec2 = null;
    createPuzzleBoard(){
        this.frameNodeArrayLength = 0;
        let sudokuCreator = new SudokuCreator({childMatrixWidth: 3});
        let boardData = sudokuCreator.createSudoku(this.difficultyLevel);

        for (let i = 0; i < boardData.puzzle.length; i++) {
            this.puzzleGame.push(boardData.puzzle[i] + 1);
        }
        for (let i = 0; i < boardData.solution.length; i++) {
            this.solutionGame.push(boardData.solution[i] + 1);
        }

        let emtyNode = 0;
        const nodeCheck = [];

        for (let i = 0; i < 9; i++) {
            nodeCheck.push([]);
            for (let j = 0; j < 9; j++) {
                nodeCheck[i].push({ filled: false });
                let value = this.puzzleGame[i*9 + j];
                const nodeSudoku = new Node(`ValueGame${i*9+j}`);

                nodeSudoku.setPosition(i * 55, j * 55);
                this.gameView.BoardNode.addChild(nodeSudoku);

                const labelBlock = nodeSudoku.addComponent(Label);
                labelBlock.string = value === 0 ? "    " : value.toString();
                labelBlock.color = Color.BLACK;

                if (value === 0) {
                    emtyNode++;
                }

                const nodeState = {};
                nodeSudoku.on(Node.EventType.TOUCH_END, () => {
                    if (value === 0) {
                        this.selectedNode = nodeSudoku;
                        if (!nodeState[nodeSudoku.name]) {
                            // nodeState[nodeSudoku.name] = true;
                
                            //Instantiate the prefab
                            const prefabInstance = instantiate(this.frameNodeNum);
                            prefabInstance.setPosition(nodeSudoku.position);
                            nodeSudoku.parent.addChild(prefabInstance);
                            this.nodePositionArray.push(prefabInstance.position);
                            this.frameNodeNumArray.push(prefabInstance);
                            if(this.nodePositionArray[this.nodePositionArray.length - 2] != prefabInstance.position) {
                                if (this.frameNodeNumArray.length > 1) {
                                    this.frameNodeNumArray[this.frameNodeNumArray.length - 2].destroy();
                                }
                            }
                
                            const row = Math.floor(nodeSudoku.position.x / 55);
                            for (let i = 0; i < 9; i++) {
                                if (i !== row) {
                                    const node = this.gameView.BoardNode.getChildByName(`ValueGame${i*9 + j}`);
                                    const nodePrefab = instantiate(this.frameNode);
                                    nodePrefab.setPosition(node.position);
                                    node.parent.addChild(nodePrefab);
                                    
                                    this.frameNodeArray.push(nodePrefab);
                                    if (this.frameNodeArray.length > this.frameNodeArrayLength + 20)  {
                                        for (let i = this.frameNodeArray.length - 20; i < this.frameNodeArray.length; i++) {
                                            this.frameNodeArrayLength++;
                                            this.frameNodeArray[i - 1].destroy();
                                        }
                                    }
                                }
                            }
                
                            const col = Math.floor(nodeSudoku.position.y / 55);
                            for (let j = 0; j < 9; j++) {
                                if (j !== col) {
                                    const node = this.gameView.BoardNode.getChildByName(`ValueGame${i*9 + j}`);
                                    const nodePrefab = instantiate(this.frameNode);
                                    nodePrefab.setPosition(node.position);
                                    node.parent.addChild(nodePrefab);

                                    this.frameNodeArray.push(nodePrefab);
                                    if (this.frameNodeArray.length > this.frameNodeArrayLength + 20)  {
                                        for (let i = this.frameNodeArray.length - 20; i < this.frameNodeArray.length; i++) {
                                            this.frameNodeArrayLength++;
                                            this.frameNodeArray[i - 1].destroy();
                                        }
                                    }
                                }
                            }
                
                            const rowStart = Math.floor(row / 3) * 3;
                            const colStart = Math.floor(col / 3) * 3;
                            for (let i = rowStart; i < rowStart + 3; i++) {
                                for (let j = colStart; j < colStart + 3; j++) {
                                    if (i !== row && j !== col) {
                                        const node = this.gameView.BoardNode.getChildByName(`ValueGame${i*9 + j}`);
                                        const nodePrefab = instantiate(this.frameNode);
                                        nodePrefab.setPosition(node.position);
                                        node.parent.addChild(nodePrefab);

                                        this.frameNodeArray.push(nodePrefab);
                                        if (this.frameNodeArray.length > this.frameNodeArrayLength + 20)  {
                                            for (let i = this.frameNodeArray.length - 20; i < this.frameNodeArray.length; i++) {
                                                this.frameNodeArrayLength++;
                                                this.frameNodeArray[i - 1].destroy();
                                            }
                                        }
                                    }
                                }
                            }

                        }
                    }
                });
                
            }
            const nodeNum = new Node("NumberValueLabel");
            const labelValue = nodeNum.addComponent(Label);
            labelValue.string = `  ${i + 1}  `;
            labelValue.color = Color.BLACK;
            labelValue.verticalAlign = VerticalTextAlignment.CENTER;
            nodeNum.parent = this.node;
            nodeNum.position = new Vec3(i % 3 * 70 + 210, Math.floor(i / 3) * -60, 0);
            this.numberLabels.push(labelValue);
            nodeNum.on(Node.EventType.TOUCH_END, () => {
                if (this.selectedNode) {
                    const selectedValue = parseInt(labelValue.string);
                    if (!isNaN(selectedValue)) {
                        this.gameView.SelectNode.play();
                        const i = Math.floor(this.selectedNode.position.x / 55);
                        const j = Math.floor(this.selectedNode.position.y / 55);
                        const position = i * 9 + j;
                        const solutionValue = this.solutionGame[position];
                        const isCorrect = selectedValue === solutionValue;
                        console.log(isCorrect);
                    
                        const labelBlockSelect = this.selectedNode.getComponent(Label);

                        console.log(nodeCheck[i][j].filled);
                        if (!nodeCheck[i][j].filled) {
                            if (isCorrect == true) {
                                labelBlockSelect.color = Color.BLUE;
                                emtyNode--;
                                nodeCheck[i][j].filled = true;
                                console.log(emtyNode);
                            
                                if (emtyNode === 0){
                                    this.unschedule(this.updateTimer);
                                    this.gameView.TimeFinish.string = this.timeElapsed.toString() + " giây";
                                    this.gameView.AudioBg.pause();
                                    this.gameView.WinAudio.play();
                                    this.gameView.SelectNode.volume = 0;
                                    // this.gameView.BgMain.getComponent(AudioSource).pause();      
                                    if(this.difficultyLevel == 0.2){
                                        this.timeBestArr.push(this.timeElapsed);
                                        localStorage.setItem('bestTime', JSON.stringify(this.timeBestArr));
                                    }
                                    if(this.difficultyLevel == 0.5){
                                        this.timeBestArr1.push(this.timeElapsed);
                                        localStorage.setItem('bestTime1', JSON.stringify(this.timeBestArr1));
                                    }   
                                    if(this.difficultyLevel == 0.8){
                                        this.timeBestArr2.push(this.timeElapsed);
                                        localStorage.setItem('bestTime2', JSON.stringify(this.timeBestArr2));
                                    }
                                    this.gameView.WinGame.active = true;

                                    this.gameClient.match
                                    .completeMatch(this.matchId, { score:this.timeElapsed})
                                    .then((data) => {})
                                    .catch((error) => console.log(error));                   
                                }         
                            } 
                            else if (isCorrect == false) {
                                console.log(emtyNode);
                                labelBlockSelect.color = Color.RED;
                                this.redNumber++;
                                this.gameView.PlayerFault.string = `Lỗi: ${this.redNumber}/3`
                                this.gameView.PlayerFault.node.active = true;
                                if (this.redNumber == 4) {
                                    this.gameView.BoardNode.active = false;
                                    this.gameView.GameOver.active = true;
                                    this.gameView.PlayerFault.string = `Bạn đã sai quá 3 lần!`;
                                    this.gameView.NewGameBtn.node.active = false;
                                    this.unschedule(this.updateTimer);
                                    this.gameView.AudioBg.pause();
                                    this.gameView.LoseAudio.play();
                                    this.gameView.SelectNode.volume = 0;
                                    // this.gameView.BgMain.getComponent(AudioSource).pause();
                                    
                                    this.gameClient.match
                                    .completeMatch(this.matchId, { score:this.timeElapsed})
                                    .then((data) => {})
                                    .catch((error) => console.log(error));
                                }
                                if(this.redNumber == 5){
                                    this.redNumber--;
                                    this.gameView.BoardNode.active = false;
                                    this.gameView.PlayerFault.string = `Bạn đã sai quá 3 lần!`;
                                    this.gameView.NewGameBtn.node.active = false;
                                    this.unschedule(this.updateTimer);
                                }
                            }
                        }
                        else if (nodeCheck[i][j].filled && isCorrect == false) {
                            console.log(isCorrect);
                            nodeCheck[i][j].filled = false;
                            emtyNode++;
                            console.log(emtyNode);
                            labelBlockSelect.color = Color.RED;
                            this.redNumber++;
                            this.gameView.PlayerFault.string = `Lỗi: ${this.redNumber}/3`
                            this.gameView.PlayerFault.node.active = true;
                            if (this.redNumber == 4) {
                                this.gameView.GameOver.active = true;
                                this.gameView.BoardNode.active = false;
                                this.gameView.PlayerFault.string = `Bạn đã sai quá 3 lần!`;
                                this.gameView.LoseAudio.play();
                                this.gameView.AudioBg.pause();
                                this.gameView.SelectNode.volume = 0;

                                this.unschedule(this.updateTimer);
                                // this.gameView.BgMain.getComponent(AudioSource).pause();
                                this.gameView.NewGameBtn.node.active = false;
                                
                                this.gameClient.match
                                .completeMatch(this.matchId, { score:this.timeElapsed})
                                .then((data) => {})
                                .catch((error) => console.log(error));
                            }
                            if(this.redNumber == 5){
                                this.redNumber--;
                                this.gameView.BoardNode.active = false;
                                this.gameView.PlayerFault.string = `Bạn đã sai quá 3 lần!`;
                                this.gameView.NewGameBtn.node.active = false;
                                this.unschedule(this.updateTimer);
                            }
                        }

                        else if (nodeCheck[i][j].filled && isCorrect == true) {
                            labelBlockSelect.color = Color.BLUE;
                            nodeCheck[i][j].filled = true;
                        }

                        labelBlockSelect.string = selectedValue.toString();
                    }
                }
            });
        }
    }   

    private btnMute(AudioMute: Button) {
        this.gameView.AudioMute.node.active = false;
        this.gameView.AudioUnmute.node.active = true;
        this.gameView.AudioBg.volume = 0.7;
        this.gameView.SelectNode.volume = 0.7;
        this.gameView.WinAudio.volume = 0.7;
        this.gameView.LoseAudio.volume = 0.7;
        this.volumeSudokuArray.push(this.gameView.AudioBg.volume);
        localStorage.setItem('volumeSudokuArray', JSON.stringify(this.volumeSudokuArray));
    }

    private btnUnmute(AudioMute: Button) {
        this.gameView.AudioMute.node.active = true;
        this.gameView.AudioUnmute.node.active = false;
        this.gameView.AudioBg.volume = 0;
        this.gameView.SelectNode.volume = 0;
        this.gameView.WinAudio.volume = 0;
        this.gameView.LoseAudio.volume = 0;
        this.volumeSudokuArray.push(this.gameView.AudioBg.volume);
        localStorage.setItem('volumeSudokuArray', JSON.stringify(this.volumeSudokuArray));
    }
}


export function runScene(arg0: string) {
    throw new Error('Function not implemented.');
}


export function loadScene(arg0: string) {
    throw new Error('Function not implemented.');
}



