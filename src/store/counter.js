import { makeAutoObservable } from "mobx";

class Counter {
	count = 0;
    sum = 400;
	constructor() {
		makeAutoObservable(this);
	}

	increment() {
		this.count = this.count + 1;
		console.log("incriment", this.count);
	}
	decrement() {
		this.count = this.count - 1;
        console.log('decrement', this.count)
	}

    get total () {
        return 'total + count = ' + (+ this.count + this.sum)
    }
}
export default new Counter();
