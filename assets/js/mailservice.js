
function sendEmail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let body = document.getElementById("body").value;

    // Email.send({
    //     Host: "smtp.elasticemail.com",
    //     Username: "araf.hasan15@gmail.com",
    //     Password: "2E94C86F30ECA5604458E6340B1BB5FDA0DA",
    //     To: "mhasan152042@bscse.uiu.ac.bd",
    //     From: "araf.hasan15@gmail.com",
        
    //     Subject: `Message from My Portfolio: `+ subject,
    //     Body: `<b>Name: </b>`+name+`<br /><b>Email: </b>`+email+`<br />`+body
    // })
    // .then(function(message){
    //     if(message == "Ok"){
    //         alert("Message Sent successfully");
    //     }else{
    //         alert("Something wento wrong");
    //     }
    // });

    Email.send({
        SecureToken : "ca683a12-87ba-445d-9895-42b78fcb6526",
        To: "mhasan152042@bscse.uiu.ac.bd",
        From: "araf.hasan15@gmail.com",

        Subject: `Message from My Portfolio: `+ subject,
        Body: `<b>Name: </b>`+name+`<br /><b>Email: </b>`+email+`<br />`+body
    })
    .then(function(message){
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("body").value = "";
        alert(message);

    })


}