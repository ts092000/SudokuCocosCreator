import { _decorator, Component, Node, find, director } from 'cc';
const { ccclass, property } = _decorator;
import GameClient from '@dattenlagiday/oc_gamecenter_sdk_pkg';
import { StoredPersistNode } from './StoredPersistNode';

@ccclass('EntryController')
export class EntryController extends Component {
    public gameClient;

    public async start() : Promise<void>{
        let parameters = find("GameClient");
        
        if (parameters === null) {
            let parameters = new Node("GameClient");
            if (this.gameClient === undefined) {
                this.gameClient = new GameClient("643fce940a3bf613239132bc", "057e6bb4-e80d-40f2-ae0a-2940ac94ee15");
                await this.gameClient.initAsync()
                .then(() => {})
                .catch((err) => console.log(err));
            }
            let gameClientParams = parameters.addComponent(StoredPersistNode);
            gameClientParams.gameClient = this.gameClient;
            director.addPersistRootNode(parameters);
        }
        director.loadScene("Menu");
    }

    update(deltaTime: number) {
        
    }
}

