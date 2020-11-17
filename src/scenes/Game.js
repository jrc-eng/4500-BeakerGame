
import ChatBox from "./helpers/chatBox"



export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });


    }

    preload() {

        this.camera = this.cameras.add(0, 0, 800, 600);
        this.camera.setBackgroundColor('rgba(200, 200, 200, 1)');

        this.load.image('notepage', 'src/assets/chat-notepage.png');
        this.load.image('arrow1', 'src/assets/chat-sendarrow1.png');
        this.load.image('arrow2', 'src/assets/chat-sendarrow2.png');



    }

    create() {

        this.notepad = new ChatBox();
        this.notepad.render(5, 5, 'notepage','arrow1','arrow2');


        this.input.keyboard.on('keydown', function (event) {

            //We are deleting a character.
            if (event.keyCode === 8)
            {

            }
            //We are adding a character.
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90))
            {

            }

        });



    }

    update() {

    }
}


