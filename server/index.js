const express = require ("express");
const app = express();

app.use("/", (req, res) => {
    res.send("server is running bruv, oi, is that right bruv fr?");
});

app.listen(5000, console.log("server started on port 5000"));