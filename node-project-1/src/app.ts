import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import todoRoutes from "./routes/todos";

const app = express();

app.use(json());

//port
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, (): void => console.log(`running on port ${port}`));
