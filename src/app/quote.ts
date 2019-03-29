export class Quote {
  public upVotes: number;
  public downVotes: number;
  constructor(public id: number, public quote: string, public author: string, public publisher: string, public date: Date ) {
    this.upVotes = 0;
    this.downVotes = 0;
  }

}
