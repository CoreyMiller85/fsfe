const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
	res.send("Hello World 2: Electric Boogaloo");
});

app.get("/teapot", (req, res) => {
	res.set({ "x-coreyisAwesome": "shoIs" });
	res.status(418);
	res.send("I like green how about you?");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
