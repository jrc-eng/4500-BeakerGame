import ChatContents, {MESSAGE_COUNT} from "./chatContents"


export default class ChatBox
{
    constructor(scene, submitterName) {

        this.userName = submitterName;

        this.chatSystem = new ChatContents(this.userName)

        this.submitButton = null;

        this.currentMessage = "";

        this.chatText = [];

        this.render = (x, y, sprite, arrowSprite1, arrowSprite2) => {

            let chatPage = scene.add.image(x, y, sprite).setScale(1, 1).setInteractive();

            this.submitButton = scene.add.image(x+90, y+300, arrowSprite1).setInteractive();

            for (let i = 0 ; i < MESSAGE_COUNT ; i++)
            {
                this.chatText.push(scene.add.text(x+5, y+i, '', { font: '18px Courier', fill: '#2c1e31' }));

            }

            return chatPage;
        }



    }


    updateStrings()
    {

        this.chatSystem.submitNewString();

        for (let x = 0 ; x < MESSAGE_COUNT ; x++)
        {

            this.chatText[x].text = this.chatSystem.stringArray[x];
        }

        this.currentMessage = this.chatSystem.currentString;




    }

    updateCurrentString(c)
    {
        this.chatSystem.addCharacter(c);

        this.currentMessage.text = this.chatSystem.currentString;


    }

    deleteCharacter()
    {
        this.chatSystem.deleteCharacter();

        this.currentMessage.text = this.chatSystem.currentString;



    }

    getSubmitButton()
    {

        return this.submitButton;
    }


}