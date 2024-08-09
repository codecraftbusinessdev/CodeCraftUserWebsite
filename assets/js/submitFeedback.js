
//    let res = await fetch("http://localhost:8080/getAllFeedback");
//    res = await res.json();
//    console.warn(res);

fetch("http://localhost:8080/getAllFeedback")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


//    var url = new URL('')
//    var params = [['name', '35.696233'], ['email', '139.570431'],['subject', '35.696233'], ['message', '139.570431']]
//
//    url.search = new URLSearchParams(params).toString();
//
//    await fetch(url)

//    const data = {
//      name: 'John Doe',
//      email: 'johndoe@example.com',
//      subject: 'issue',
//      message : 'not able submit'
//    };

//    const options = {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(data)
//    };

//   fetch('http://localhost:8080/addFeedback',{
//        method="POST",
//        body: JSON.stringify(data),
//        headers: {
//                'Content-Type': 'application/json'
//              },
//   }).then((res)=>res.json())
//     .then((data)=>console.log(data));
