export default class Lesson {
    private _title: string;
    private _order: number;
    constructor(
        private c_title: string,
        private c_order:number
    ) {
        this._title = this.c_title;
        this._order = c_order;
    }

    get title(): string {
        return this._title;
    }
    get order(): number {
        return this._order;
    }
    toJSON() {
        return {
            title: this._title,
        };
    }

}