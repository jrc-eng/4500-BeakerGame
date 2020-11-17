const CHAR_LIMIT = 15;

export const MESSAGE_COUNT = 4;

export default class ChatContents
{
    constructor(user)
    {
       this.stringArray = ["","","","",""];

       this.currentString = "";

       this.user = user;


    }


    submitNewString()
    {
        let submitString = this.user + ": " + this.currentString;

        this.stringArray.push(submitString);

        this.stringArray.slice(1,6);

    }

    addCharacter(c)
    {
        let length = this.currentString.length;

        if(this.currentString.length >= CHAR_LIMIT)
        {
            return;
        }

        this.currentString = this.currentString + c;

    }

    deleteCharacter()
    {
        let length = this.currentString.length;


        if(length === 0)
        {
            return;
        }

        this.currentString = this.currentString.text.substr(0, this.currentString.text.length - 1);

    }





}