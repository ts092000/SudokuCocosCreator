import { _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, Sprite, Button, director, AudioClip, AudioSource, Slider, Prefab, instantiate} from 'cc';
const { ccclass, property } = _decorator;
import { SudokuCreator } from '@algorithm.ts/sudoku';
import { GameView } from './GameView';

@ccclass('GameController')
export class GameController extends Component {

    // @property(Node)
    // startGame: Node;
    
    @property(GameView)
    gameView: GameView;

    @property(Node)
    boardNode: Node;

    @property(Node)
    boardEffectNode: Node;

    @property(Label)
    numberLabels: Label[] = [];

    @property(Node)
    gameOver: Node;

    @property(Node)
    levelPanel: Node;

    @property(Button)
    rePlay: Button;

    //LevelPanel
    @property(Button)
    easyLevel: Button;

    @property(Button)
    mediumLevel: Button;

    @property(Button)
    hardLevel: Button;

    @property(Label)
    playerFault: Label;

    @property(Sprite)
    bgNodeValue: Sprite;
    
    //Audio Game

    @property(AudioClip)
    volumeStart: AudioClip;

    @property(AudioClip)
    volumeSelectNode: AudioClip;

    @property(AudioClip)
    volumeLose: AudioClip;

    @property(AudioClip)
    volumeWinGame: AudioClip;

    @property(Sprite)
    bgMain: Sprite;

    @property(Button)
    settingVolumeAll: Slider;

    @property(Node)
    settingNode: Node;

    @property(Slider)
    settingVolumeBg: Slider;

    @property(Slider)
    settingVolumeEffect: Slider;

    @property(Label)
    timerLabel: Label = null;

    @property(Label)
    levelLabel: Label = null;

    @property(Node)
    winGame: Node;

    @property(Label)
    bestTime: Label;

    @property(Label)
    bestTimeLevle: Label;

    @property(Prefab)
    frameNode: Prefab;

    selectedNode: Node = null;
    puzzleGame: number[] = [];
    solutionGame: number[] = [];
    redNumber: number = 0;
    difficultyLevel: number;
    timeElapsed: number = 0; 
    timeBestArr: number[] = [];
    timeBestArr1: number[] = [];
    timeBestArr2: number[] = [];
    start() {

            let bestscore=localStorage.getItem('bestTime');
            if(bestscore){
                this.timeBestArr=JSON.parse(bestscore);
                this.bestTime.string = 'Thời gian nhanh nhất: ' +(Math.min(...this.timeBestArr))
            }
            let bestscore1=localStorage.getItem('bestTime1');
            if(bestscore1){
                this.timeBestArr1=JSON.parse(bestscore1);
                this.bestTime.string = 'Thời gian nhanh nhất: ' +(Math.min(...this.timeBestArr1))
            }
            let bestscore2=localStorage.getItem('bestTime2');
            if(bestscore2){
                this.timeBestArr2=JSON.parse(bestscore2);
                this.bestTime.string = 'Thời gian nhanh nhất: ' +(Math.min(...this.timeBestArr2))
            }
    }
    onLoad() {
        this.levelPanel.active = true;
        //this.createPuzzleBoard();
        console.log(this.puzzleGame)
        console.log(this.solutionGame)
    }
    startGamePlayer(){
        this.gameView.StartGame.active = false;
        this.volumeStart.play();
    }
    updateTimer() {
        this.timeElapsed++;
        this.timerLabel.string = `Thời gian : ${this.timeElapsed} giây`;
    }
    volumeGameSetting(){
        this.bgMain.getComponent(AudioSource).volume = this.settingVolumeBg.progress;
    }
    displayVolumeSetting(){
        this.settingNode.active = true;
        director.pause();
    }
    volumeGameEffect(){
        this.volumeLose.getVolume();
        this.volumeLose.setVolume(this.settingVolumeEffect.progress);
        this.volumeWinGame.getVolume();
        this.volumeWinGame.setVolume(this.settingVolumeEffect.progress);
        this.volumeSelectNode.getVolume();
        this.volumeSelectNode.setVolume(this.settingVolumeEffect.progress);
    }
    rePlayGame(){
        director.loadScene("MainGame");
    }
    continueGame(){
        director.resume();
        this.settingNode.active = false;
    }
    displayLevelPanel(){
        this.levelPanel.active = true;
    }
    
    update(){
        if(this.difficultyLevel == 0.1){
            this.bestTimeLevle.string = 'Độ Khó: DỄ'
            this.bestTime.string = 'Thời gian nhanh nhất : ' +(Math.min(...this.timeBestArr));
        } else if(this.difficultyLevel == 0.2){
            this.bestTimeLevle.string = 'Độ Khó: TRUNG BÌNH'
            this.bestTime.string = 'Thời gian nhanh nhất: ' +(Math.min(...this.timeBestArr1));
        } else if(this.difficultyLevel == 0.3){
            this.bestTimeLevle.string = 'Độ Khó: KHÓ'
            this.bestTime.string = 'Thời gian nhanh nhất: ' +(Math.min(...this.timeBestArr2));

        }
    }

    //levelFunction
    easyLevelGame() {
        this.difficultyLevel = 0.1;
        this.createPuzzleBoard();
        this.levelPanel.active = false;
        this.bgNodeValue.node.active = true;
        this.schedule(this.updateTimer, 1);
        this.levelLabel.string = "Độ khó : DỄ"
    }
    mediumLevelGame() {
        this.difficultyLevel = 0.2;
        this.createPuzzleBoard();
        this.levelPanel.active = false;
        this.bgNodeValue.node.active = true;
        this.schedule(this.updateTimer, 1);
        this.levelLabel.string = "Độ khó : TRUNG BÌNH"
    }
    hardLevelGame() {
        this.difficultyLevel = 0.3;
        this.createPuzzleBoard();
        this.levelPanel.active = false;
        this.bgNodeValue.node.active = true;
        this.schedule(this.updateTimer, 1); 
        this.levelLabel.string = "Độ khó : KHÓ"
    }
    createPuzzleBoard(){

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
                const nodeSudoku = new Node("ValueGame");

                nodeSudoku.setPosition(i * 55, j * 55);
                this.boardNode.addChild(nodeSudoku);

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
                            nodeState[nodeSudoku.name] = true;
                            const prefabInstance = instantiate(this.frameNode);
                            prefabInstance.setPosition(nodeSudoku.position);
                            nodeSudoku.parent.addChild(prefabInstance);
                        }
                    }
                });

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
                            this.volumeSelectNode.play();
                            const i = Math.floor(this.selectedNode.position.x / 55);
                            const j = Math.floor(this.selectedNode.position.y / 55);
                            const position = i * 9 + j;
                            const solutionValue = this.solutionGame[position];
                            const isCorrect = selectedValue === solutionValue;
                            console.log(isCorrect);
                        
                            const labelBlockSelect = this.selectedNode.getComponent(Label);

                            if (!nodeCheck[i][j].filled) {
                                if (isCorrect) {
                                    labelBlockSelect.color = Color.BLUE;
                                    emtyNode--;
                                    nodeCheck[i][j].filled = true;
                                    console.log(emtyNode);
                                
                                    if (emtyNode === 0){
                                        console.log("winner");
                                        this.volumeWinGame.play();
                                        if(this.difficultyLevel == 0.1){
                                            this.timeBestArr.push(this.timeElapsed);
                                            localStorage.setItem('bestTime', JSON.stringify(this.timeBestArr));
                                        }
                                        if(this.difficultyLevel == 0.2){
                                            this.timeBestArr1.push(this.timeElapsed);
                                            localStorage.setItem('bestTime1', JSON.stringify(this.timeBestArr1));
                                        }   
                                        if(this.difficultyLevel == 0.3){
                                            this.timeBestArr2.push(this.timeElapsed);
                                            localStorage.setItem('bestTime2', JSON.stringify(this.timeBestArr2));
                                        }
                                        this.winGame.active = true;                   
                                    }         
                                } else {
                                    labelBlockSelect.color = Color.RED;
                                    this.redNumber++;
                                    this.playerFault.string = `Lỗi: ${this.redNumber}/3`
                                    this.playerFault.node.active = true;
                                    if (this.redNumber == 4) {
                                        console.log("thua rồi nhé !!!");
                                        this.gameOver.active = true;
                                        this.playerFault.string = `Lỗi 3/3`;
                                        this.volumeLose.play();       
                                    }
                                }
                            }

                            labelBlockSelect.string = selectedValue.toString();
                        }
                    }
                });

            }

        }
    }   
}


export function runScene(arg0: string) {
    throw new Error('Function not implemented.');
}


export function loadScene(arg0: string) {
    throw new Error('Function not implemented.');
}

    // if (!isNaN(selectedValue)) {
                    //     this.volumeSelectNode.play();
                    //     const i = Math.floor(this.selectedNode.position.x / 55);
                    //     const j = Math.floor(this.selectedNode.position.y / 55);
                    //     const position = i * 9 + j;
                    //     const rowStart = Math.floor(i / 3) * 3;
                    //     const colStart = Math.floor(j / 3) * 3;
                    //     let isCorrect = true;
                    
                    //     // Check row
                    //     for (let k = 0; k < 9; k++) {
                    //         if (k !== j && selectedValue === this.puzzleGame[i*9 + k]) {
                    //             isCorrect = false;
                    //             break;
                    //         }
                    //     }
                    
                    //     // Check column
                    //     for (let k = 0; k < 9; k++) {
                    //         if (k !== i && selectedValue === this.puzzleGame[k*9 + j]) {
                    //             isCorrect = false;
                    //             break;
                    //         }
                    //     }
                    
                    //     // Check 3x3
                    //     for (let row = 0; row < 3; row++) {
                    //         for (let col = 0; col < 3; col++) {
                    //             const r = rowStart + row;
                    //             const c = colStart + col;
                    //             if ((r !== i || c !== j) && selectedValue === this.puzzleGame[r*9 + c]) {
                    //                 isCorrect = false;
                    //                 break;
                    //             }
                    //         }
                    //     }
                    
                    //     console.log(isCorrect);
                    
                    //     const labelBlock = this.selectedNode.getComponent(Label);
                    //     if (!isCorrect) {
                    //         labelBlock.color = Color.RED;
                    //         this.redNumber++;
                    //         this.playerFault.string = `Lỗi: ${this.redNumber}/3`
                    //         this.playerFault.node.active = true;
                    //         if (this.redNumber === 4) {
                    //             console.log("thua rồi nhé !!!");
                    //             this.gameOver.active = true;
                    //             this.playerFault.string = `Lỗi 3/3`;
                    //             this.volumeLose.play();
                    //         }
                    //         emtyNode++;
                    //     } else {
                    //         labelBlock.color = Color.BLUE;
                    //         emtyNode--;
                    //         console.log(emtyNode);
                    //         if (emtyNode === 0){
                    //             console.log("winner");
                    //             this.timeBestArr.push(this.timeElapsed);
                    //             localStorage.setItem('scores', JSON.stringify(this.timeBestArr));
                    //             let bestTime = Math.max(...this.timeBestArr);
                    //             console.log(bestTime);
                    //         }                        }
                    //     labelBlock.string = selectedValue.toString();

                    // }



     // if (!isCorrect) {
                            //     labelBlockSelect.color = Color.RED;
                            //     this.redNumber++;
                            //     this.playerFault.string = `Lỗi: ${this.redNumber}/3`
                            //     this.playerFault.node.active = true;
                            //     if (this.redNumber == 4) {
                            //         console.log("thua rồi nhé !!!");
                            //         this.gameOver.active = true;
                            //         this.playerFault.string = `Lỗi 3/3`;
                            //         this.volumeLose.play();             
                            //     }
                            // } else {
                            //     labelBlockSelect.color = Color.BLUE;
                            //     emtyNode -= 1;
                            //     console.log(emtyNode);
                                
                            //     if (emtyNode === 0){
                            //         console.log("winner");
                            //         this.volumeWinGame.play();
                            //         if(this.difficultyLevel == 0.1){
                            //             this.timeBestArr.push(this.timeElapsed);
                            //             localStorage.setItem('bestTime', JSON.stringify(this.timeBestArr));
                            //         }
                            //         if(this.difficultyLevel == 0.2){
                            //             this.timeBestArr1.push(this.timeElapsed);
                            //             localStorage.setItem('bestTime1', JSON.stringify(this.timeBestArr1));
                            //         }   
                            //         if(this.difficultyLevel == 0.3){
                            //             this.timeBestArr2.push(this.timeElapsed);
                            //             localStorage.setItem('bestTime2', JSON.stringify(this.timeBestArr2));
                            //         }
                            //         this.winGame.active = true;                   
                            //     }                      
                            // }


