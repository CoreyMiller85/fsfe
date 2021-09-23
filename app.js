const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
	res.send("Hello World 2: Electric Boogaloo");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
