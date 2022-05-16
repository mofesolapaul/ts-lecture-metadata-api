import Controller from "./ControllerInterface";
import { Router } from "express";
import MediaService from "../Service/MediaService";

const MediaController = ((): Controller => ({
  configure(app) {
    const router = Router();

    router.post("/meta", (req, res) => {
      MediaService.validate(req.body)
      res.json('Meta validated!');
    });

    app.use("/media", router);
  },
}))();

export default MediaController;
