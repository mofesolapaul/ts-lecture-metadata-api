import express from "express";
import HomeController from "./HomeController";
import MediaController from "./MediaController";

const buildRoutes = (app: express.Application): void => {
    HomeController.configure(app);
    MediaController.configure(app);
};

export default buildRoutes;