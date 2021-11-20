//local Storage : its used to store data in browser, and its data does not expire.

// add data
localStorage.setItem(key, value)

// read item
localStorage.getItem(key)

// delete item
localStorage.removeItem(key)

// to clear all values stored in local storage
localStorage.clear()





//Session storage: its also used to store data in browser, but its data expires when session expires

// add data
sessionStorage.setItem(key, value)

// read data
sessionStorage.getItem(key)

//delete data
sessionStorage.removeItem(key)

//to clear all values stored in session storage
sessionStorage.clear()

