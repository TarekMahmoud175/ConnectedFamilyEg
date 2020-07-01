export class user{
    constructor(private name:string, 
                private account:string,
                private university:string,
                private faculty:string,
                private major:string,
                private year:number, 
                private mobile:number,
                private birth_date:Date,
                private membership:[],
                private events:[] ){}
}