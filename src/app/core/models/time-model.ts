export class TimeModel {
    public Hours: number;
    public Mins: number;
    public Sec: number;

    constructor() {
        const t = new Date();
        this.Hours = t.getHours() % 12;
        this.Mins = t.getMinutes();
        this.Sec = t.getSeconds();
    }
}
