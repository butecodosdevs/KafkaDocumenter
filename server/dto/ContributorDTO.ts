

export default class ContributorDTO {
    public id:number;
    public login: string;
    public avatar_url:string;
    constructor(
         id:number,
         login: string,
         avatar_url:string,
    ) {
        this.id = id,
        this.login = login,
        this.avatar_url= avatar_url
        


    }
}