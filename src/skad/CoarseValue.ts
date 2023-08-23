export class CoarseValue {

    private readonly _value: string;

    constructor(value: string) {
        this._value = value;
    }

    get value() {
        return this._value;
    }
}
