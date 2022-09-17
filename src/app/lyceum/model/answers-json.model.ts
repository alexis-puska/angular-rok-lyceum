export interface IAnswersJson {
    question: string;
    response: string;
}

export class AnswersJson implements IAnswersJson {
   
    constructor(
        public question: string,
        public response: string,
    ) {
        this.question = question;
        this.response = response;
    }
}