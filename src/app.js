import express from 'express';

const app = express();

app.get('/test', async (req, res) => {
	res.sendStatus(200)
});

export default app;