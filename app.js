const express = require("express")
const bodyParser = require("body-parser")
const request  = require("request")

const app = express()

// this code is for posting static files such as css,images etc
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res)=>{
    var firstName = req.body.fName;
    var lastName  = req.body.lName;
    var email = req.body.email;

    var data ={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:lastName
                }

            }
        ]
    }

    var jsonData = JSON.stringify(data)
    
    var options = {
        url:"https://us14.api.mailchimp.com/3.0/lists/b43ab8f0de",
        method:"POST",
        // Use header to authenticate
        headers:{
            // The basic format of authorization is "username API key"
            // The username can be any string
            "Authorization": "pksubudhi25 a3d1017ccafb0aafabc2d2e26900efe7-us14"
        },
        body:jsonData

    }

    request(options,(error,response,body)=>{
        if (error) {
            res.sendFile(__dirname+"/failure.html")
        }else{
            if (response.statusCode == 200) {
                res.sendFile(__dirname+"/success.html")
            }else{
                res.sendFile(__dirname+"/failure.html")
            }
        }
    })
})
app.post("/failure",(req,res)=>{
    res.redirect("/")
})
const port = process.env.PORT | 3000;
app.listen(port,()=>{
    console.log("app is listening at port "+port)
});

//API key
// a3d1017ccafb0aafabc2d2e26900efe7-us14

// List ID
// b43ab8f0de

// API url
// https://${dc}.api.mailchimp.com/3.0/lists/{list_id}