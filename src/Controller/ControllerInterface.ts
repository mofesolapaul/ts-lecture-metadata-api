import express from "express";

export default interface Controller {
  configure: (app: express.Application) => void;
}
