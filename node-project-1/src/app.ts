import express from "express";

const app = express();

//port
const port = 3000;

app.listen(port, (): void => console.log(`running on port ${port}`));
