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
    const status = {
        email_address: "davidtopair@gmail.com",
        current_datetime: new Date().toISOString(),
        github: "https://github.com/Dah-vid/HNG-Backend"
    };
    
    response.send(status);
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});