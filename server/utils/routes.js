const Players = require('../controllers/players');

module.exports = app => {
    app.get("/players", Players.getAll);
    app.get("/players/:_id", Players.getOne);
    app.post("/players", Players.create);
    app.put("/players/:_id", Players.update);
    app.delete("/players/:_id", Players.remove);
    // app.post("/review/:_id", Players.review);
}