export class Post {
    title: string;
    content: string;
    loveIts: number;
    hateIts: number = 0;
    contact: string;
    email: string;
    created_at: Date;

    constructor(title: string, content: string, loveIts: number,contact: string) {
        this.title = title; 
        this.content = content;
        this.loveIts = loveIts;
        this.contact = contact;
        this.created_at = new Date();
    }

    like() {
        this.loveIts++;
    }

    dislike() {
        this.hateIts++;
    }
}