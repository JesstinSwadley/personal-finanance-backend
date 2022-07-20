import express from 'express';

const app = express();

app.get('/test', (req, res) => {
	res.send("Test Route");
});

export default app;