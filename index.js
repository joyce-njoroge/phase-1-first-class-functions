const spy = chai.spy();
function receivesAFunction(callback){
    callback(spy);
}
function returnsANamedFunction(){

    return function namedFunction(){}
}
function returnAnAnonymousFunction(){
    return function () {}
}