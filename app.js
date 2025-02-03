const express = require('express');
const app = express();
app.use(express.json());

// CORS Handling
const cors = require("cors");
app.use(
    cors({
        origin: "*",
    })
)
const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    const number= request.query.number
    const email= request.query.email

    const status = {
        //email: "davidtopair@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Dah-vid/HNG-Backend", 
        num: number,
        email: email,
    };
    
    response.json(status);
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
