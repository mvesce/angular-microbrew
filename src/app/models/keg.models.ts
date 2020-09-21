export class Keg {
    code:string;
    size:number;
    description:string;
    type:string;

    constructor (code:string, description:string, size:number, type:string) {
        this.code = code;
        this.description = description;
        this.size = size;
        this.type = type;
    }
}