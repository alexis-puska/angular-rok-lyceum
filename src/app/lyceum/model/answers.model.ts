export interface IAnswers {
    question: string;
    response: string;
    questionNormalized?: string;
}

export class Answers implements IAnswers {
   
    constructor(
        public question: string,
        public response: string,
        public questionNormalized?: string
    ) {
        this.question = question;
        this.questionNormalized = question.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        this.response = response;
    }
}
