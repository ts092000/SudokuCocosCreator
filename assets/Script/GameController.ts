import { _decorator, Component, Node, VerticalTextAlignment, Label, Vec3, Color, Sprite, SpriteFrame, Button, director, Director } from 'cc';
const { ccclass, property } = _decorator;
import { SudokuCreator } from '@algorithm.ts/sudoku';
import { GameView } from './GameView';

@ccclass('GameController')
export class GameController extends Component {

    @property(Node)
    boardNode: Node;

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

    selectedNode: Node = null;
    puzzleGame: number[] = [];
    solutionGame: number[] = [];
    redNumber: number = 0;
    difficultyLevel: number;    
    onLoad() {
        this.levelPanel.active = true;
        //this.createPuzzleBoard();
        console.log(this.puzzleGame)
        console.log(this.solutionGame)
    }
    rePlayGame(){
        director.loadScene("MainGame");
    }
    displayLevelPanel(){
        this.levelPanel.active = true;
    }
    
    //levelFunction
    easyLevelGame() {
        this.difficultyLevel = 0.1;
        this.createPuzzleBoard();
        this.levelPanel.active = false;
        this.bgNodeValue.node.active = true;
    }
    mediumLevelGame() {
        this.difficultyLevel = 0.2;
        this.createPuzzleBoard();
        this.levelPanel.active = false;
        this.bgNodeValue.node.active = true;

    }
    hardLevelGame() {
        this.difficultyLevel = 0.3;
        this.createPuzzleBoard();
        this.levelPanel.active = false;
        this.bgNodeValue.node.active = true;

    }
    beginGame(){
        director.loadScene("MainGame");
    }
    createPuzzleBoard(){
        //this.playerFault.color = Color.RED;

        let sudokuCreator = new SudokuCreator({childMatrixWidth: 3});
        let boardData = sudokuCreator.createSudoku(this.difficultyLevel);

        for (let i = 0; i < boardData.puzzle.length; i++) {
            this.puzzleGame.push(boardData.puzzle[i] + 1);
        }
        for (let i = 0; i < boardData.solution.length; i++) {
            this.solutionGame.push(boardData.solution[i] + 1);
        }

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const value = this.puzzleGame[i*9 + j];
                const nodeSudoku = new Node("ValueGame");

                nodeSudoku.setPosition(i * 55, j * 55);
                this.boardNode.addChild(nodeSudoku);
                
                const labelBlock = nodeSudoku.addComponent(Label);
                labelBlock.string = value === 0 ? "    " : value.toString();

                nodeSudoku.on(Node.EventType.TOUCH_END, () => {
                    this.selectedNode = nodeSudoku;
                    labelBlock.string = "-";
                });

            }
            const nodeNum = new Node("NumberValueLabel");
            const label = nodeNum.addComponent(Label);
            label.string = ` ${i + 1} `;
            label.verticalAlign = VerticalTextAlignment.CENTER;
            nodeNum.parent = this.node;
            nodeNum.position = new Vec3(i % 3 * 100 + 180, Math.floor(i / 3) * -60, 0);
            this.numberLabels.push(label);
            nodeNum.on(Node.EventType.TOUCH_END, () => {
                if (this.selectedNode) {
                    const selectedValue = parseInt(label.string);
                    if (!isNaN(selectedValue)) {
                        const i = Math.floor(this.selectedNode.position.x / 55);
                        const j = Math.floor(this.selectedNode.position.y / 55);
                        const position = i * 9 + j;
                        const solutionValue = this.solutionGame[position];
                        const isCorrect = selectedValue === solutionValue;
                        console.log(isCorrect);

                        const labelBlock = this.selectedNode.getComponent(Label);
                        if (!isCorrect) {
                            labelBlock.color = Color.RED;
                            this.redNumber++;
                            this.playerFault.string = `Lỗi: ${this.redNumber}/3`
                            this.playerFault.node.active = true;
                            if (this.redNumber === 4) {
                                console.log("thua rồi nhé !!!")
                                this.gameOver.active = true;
                                this.playerFault.string = `Lỗi 3/3`
                            }
                        } else {
                            labelBlock.color = Color.BLUE;
                        }
                        labelBlock.string = selectedValue.toString();
                    }
                }
            });
        }
        
    }   
}


export function runScene(arg0: string) {
    throw new Error('Function not implemented.');
}


export function loadScene(arg0: string) {
    throw new Error('Function not implemented.');
}

