const STORAGE_KEY ="pokemon-game";
export default class LocalStorage {
    saveObject(value){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    }
    getObject() {
        let storageObject = localStorage.getItem(STORAGE_KEY)
        if(storageObject) {
            return JSON.parse(storageObject);
        } else {
            return {};
        }        
    }

    saveName(newName) {
        const storageObject = this.getObject();
        storageObject.name = newName;
        this.saveObject(storageObject)
    }

    getName() {
        const storageObject = this.getObject();
        return storageObject.name
    }

    saveMyCharacter(myCharacter) {
        localStorage.setItem("myCharacter", JSON.stringify(myCharacter));

    }

    getMyCharacter() {
        return JSON.parse(localStorage.getItem("myCharacter"));       
    }

    saveLeftoverMyHealth(value) {
         localStorage.setItem("leftoverMyHealth", value);
    }

    getLeftoverMyHealthy() {
        return localStorage.getItem("leftoverMyHealth")
    }
    
    saveLeftoverEnemy(value) {
         localStorage.setItem("leftoverEnemy", value);
    }

    getLeftoverEnemy() {
        return localStorage.getItem("leftoverEnemy");
    }

    saveWins(value) {
        localStorage.setItem("wins", value);
    }

    getWins() {
        return localStorage.getItem("wins")
    }

    saveLoses(value) {
        localStorage.setItem("loses", value);
    }

    getLoses() {
        return localStorage.getItem("loses")
    }
}