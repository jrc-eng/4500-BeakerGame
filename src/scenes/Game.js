
import ChatBox from "../helpers/chatBox.js"

import BasicButton from "../helpers/BasicButton.js"

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

        this.load.spritesheet("arrows","src/assets/chat-sendarrow-sheet.png",{ frameWidth: 29, frameHeight: 28 });

    }

    create() {

        let self = this;

        this.self2 = this;

        let noteX = 180;
        let noteY = 180

        self.notepad = new ChatBox(self, "Player");
        self.notepad.render(noteX, noteY, 'notepage','arrow1','arrow2');


        self.notepad_submitButton = new BasicButton({
            'scene': this,
            'key':'arrows',
            'up': 0,
            'over':1,
            'down':1,
            'x': noteX + 77,
            'y': noteY + 98
        })

        this.input.keyboard.on('keydown', function (event) {

            //We are deleting a character.  keyCode 8 is the Delete Key.
            if (event.keyCode === 8)
            {
                self.notepad.deleteCharacter();
            }
            //We are adding a character.
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode <= 90))
            {

                self.notepad.updateCurrentString(event.key);
            }
            //This refers to the ENTER character.
            else if(event.keyCode === 13)
            {
                self.notepad.updateStrings();

            }

        });


    self.notepad_submitButton.on('pointerdown',this.onPressed,this);


    }

    onPressed()
    {
        this.self2.notepad.updateStrings();
    }

    update() {

    }
}


