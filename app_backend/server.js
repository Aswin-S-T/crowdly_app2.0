import express from "express";
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Node application started");
});

app.listen(port, () => {
	console.log(`Server is running at the port ${port}`);
});
