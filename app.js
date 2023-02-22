import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors(), express.json());

app.get('/', (req, res) => {
	res.json('Hello World');
});

app.listen(8080, () => console.log('Server Running'))