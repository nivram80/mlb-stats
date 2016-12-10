export class Player {
    constructor(
        public playerID: string,
        public birthYear: number,
        public birthMonth: number,
        public birthDay: number,
        public birthCountry: string,
        public birthState: string,
        public birthCity: string,
        public deathYear: number,
        public deathMonth: number,
        public deathDay: number,
        public deathCountry: string,
        public deathState: string,
        public deathCity: string,
        public nameFirst: string,
        public nameLast: string,
        public nameGiven: string,
        public weight: number,
        public height: number,
        public bats: string,
        public throws: string,
        public debut: string,
        public finalGame: string,
        public retroID: string,
        public bbrefID: string
    ) { }
}