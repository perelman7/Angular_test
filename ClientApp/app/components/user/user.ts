export class User {
    constructor(
        public id?: number,
        public name?: string,
        public age?: number,
        public checked: boolean = false
    ) { }
}