export class Stories {
    by: string | undefined;
    descendants: string | undefined;
    id: number | undefined;
    kids: number[] = [];
    score: number | undefined;
    text: string | undefined;
    time: string | undefined;
    title: string;
    type: string | undefined;

    constructor() {
        this.text = '';
        this.title = '';
    }
}