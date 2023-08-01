class Storage{
    static getSearchedUsersFromStorage(){
        // Take Users
        let users;

        if (localStorage.getItem("searched")===null){
            users = [];
        }
        else{
            users = JSON.parse(localStorage.getItem("searched"));

        }
        return users;
    }

    static addSearchedUsersToStorage(username){
        // Add Users
        let users = this.getSearchedUsersFromStorage();

        // indexOf ; if the result is -1, its not found.
        if(users.indexOf(username)=== -1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));
    }

    static clearAllSearchedUsersFromStorage(){
        // Clear data from storage.
        localStorage.removeItem("searched");
    }


}


