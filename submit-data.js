function submit_data(){
    // console.log("Hello");

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        Issues: document.getElementById('comment').value
    }
    
     
    fetch('https://d2ymvbf8hsd4j5.cloudfront.net/v1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
        console.log('Success:', data);
        //window.location.href="file:///C:/Users/sjhan/Downloads/Twitter_Sentimental_Analysis/Backend/form_3.html";
        
    })
    //Then with the error genereted...
    .catch((error) => {
        console.error('Error:', error);
    });
 
}


// function submit_data(){
//     fetch('https://oupp565e9e.execute-api.us-east-1.amazonaws.com/v1/put-data', {
// 	method: 'POST',
// 	body: JSON.stringify({
//         email: document.getElementById('email').value,
// 		name: document.getElementById('name').value,
// 		age: document.getElementById('age').value 
// 	}),
// 	headers: {
// 		'Content-type': 'application/json; charset=UTF-8'
// 	}
// }).then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	}
// 	return Promise.reject(response);
// }).then(function (data) {
// 	console.log(data);
// }).catch(function (error) {
// 	console.warn('Something went wrong.', error);
// });
// }