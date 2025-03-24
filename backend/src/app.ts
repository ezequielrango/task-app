import express from 'express';
import taskRoutes from './routes/taskRoutes';
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());
app.use(taskRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/ping', (req, res) => {
  console.log('pong');
  res.send('Hello World');
} );