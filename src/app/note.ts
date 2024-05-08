export class Note {

  constructor(
    public title: string,
    public category: string,
    public content: string,
    public date: Date,
    public time?: string,
    public status?: boolean) {
  }
  get Date(): string {
    let returnDate = '';
    let day = this.date.getDate().toString();
    if (parseInt(day) <= 9) {
      day = '0' + day;
    }
    let month = this.date.getMonth().toString();
    if (parseInt(month) <= 9) {
      month = '0' + month;
    }
    let year = this.date.getFullYear().toString()
    return returnDate = day + '-' + month + '-' + year;;
  }

  getShortContent(shortContent: number): string {
    return this.content.substring(0, shortContent) + '...';
  }
}

