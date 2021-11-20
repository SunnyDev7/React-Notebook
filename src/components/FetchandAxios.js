//fetch is an inbult javascript method for handling APIs, it is promise based

//promise is try catch block for api handling
fetch('https://www.google.com')
.then((response) => {

	// Code for handling the response
})
.catch((error) => {

	// Code for handling the error
});




//Axios is a third party package, but considered better than fetch for api handling
//its also promise based

import axios from "axios"

axios.get('https://www.google.com')
.then((response) => {

	// Code for handling the response
})
.catch((error) => {

	// Code for handling the error
})

