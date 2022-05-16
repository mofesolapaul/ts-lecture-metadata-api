import Controller from "./ControllerInterface";

const HomeController = ((): Controller => ({
  configure(app) {
    app.get("/", (req, res) => {
      res.json("Server up and running");
    });
  },
}))();

export default HomeController;
