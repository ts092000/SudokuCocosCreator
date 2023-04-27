import { _decorator, Component, Node , AudioSource, Button} from 'cc';
const { ccclass, property } = _decorator;
import GameClient from '@dattenlagiday/oc_gamecenter_sdk_pkg';

@ccclass('StoredPersistNode')
export class StoredPersistNode extends Component {

    public gameClient;
    public volumeAudio;

    public async start() : Promise<void> {
        console.log(this.gameClient);
        if (this.gameClient === undefined) {
            this.gameClient = new GameClient("643fce940a3bf613239132bc", "057e6bb4-e80d-40f2-ae0a-2940ac94ee15");
            await this.gameClient.initAsync()
            .then(() => {})
            .catch((err) => console.log(err));
        }
        console.log(this.volumeAudio);
        // this.gameClient = new GameClient("643fc5fe0a3bf6132391328d", "568a590d-f9d1-4a10-b59d-ea6e0d9e9786");
    }

    update(deltaTime: number) {
        
    }
}

