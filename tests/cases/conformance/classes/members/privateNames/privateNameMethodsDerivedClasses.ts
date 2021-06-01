// @target: es2015

class Base {
    #prop(): number{ return  123; }
    static method(x: Derived) {
        console.log(x.#prop());
    }
}
class Derived extends Base {
    static method(x: Derived) {
        console.log(x.#prop());
    }
}
