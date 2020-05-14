export class Post{
    
    constructor(
        public name:string,
        public title:string,
        public subtitle:string,
        public email:string,
        public message:string,
        public archive?:string,
        public id?:number,
        public likes?:number
    ){}
}