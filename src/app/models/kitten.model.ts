export class Kittens {
    constructor(
        public name: string,
        public birthDay: Date,
        public breed: string,
        public pictureUrl?: string,
        public id?: number
    ) {}
}