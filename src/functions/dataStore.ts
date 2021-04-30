import { action, makeObservable, observable } from "mobx";



class dataStoreClass {

    likesCount = 5;

    constructor(){
        makeObservable(this,{
            likesCount: observable,
            addOne:action
        })
    }

    addOne(){
        this.likesCount += 1
        console.log(this.likesCount)
    }


}

export const dataStore = new dataStoreClass();