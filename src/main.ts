import express from "express";
import buildRoutes from "./Controller";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

buildRoutes(app);

app.use(function (err: Error, req: any, res: any, next: any) {
  console.error(err.stack);
  res.status(500).json(`Error occurred: ${err.message}`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
