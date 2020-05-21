import test from './modules/test'

class Tester {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    greet() {
        console.log('hello ' + this.name)
    }
}

const t = new Tester('Nikola')

t.greet()