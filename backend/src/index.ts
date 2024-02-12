import express from 'express';
import mongoose from 'mongoose';
import router from './routes/route';
import dotenv from 'dotenv';
import { PORT, MONGO_URI} from './config';
import cors from 'cors';


dotenv.config({ path: `../../.env` })

const app = express();
app.use(express.json());
app.use(cors())
mongoose
.connect(MONGO_URI || '', {
    dbName: 'message-app',
})
.then(() => {
    console.log('Database connected...');
})
.catch((error) => {
    console.log('error : ', error);
});

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on http:://localhost:${PORT}`);
});