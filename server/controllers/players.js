const mongoose = require('mongoose');
const Player = mongoose.model("Player");
const Review = mongoose.model("Review");

class PlayerController {
    getAll(req, res){
        Player.find({})
            .then(players => res.json(players))
            .catch(err => res.json(err));
    }
    getOne(req, res){
        Player.findOne({_id: req.params._id})
            .then(player => res.json(player))
            .catch(err => res.json(err));
    }
    create(req, res){
        let player = new Player(req.body);
        player.save()
            .then(() => res.json(player))
            .catch(err => res.json(err));
    }
    update(req, res){
        Player.findOneAndUpdate({_id: req.params._id}, req.body)
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    remove(req, res){
        Player.findOneAndRemove({_id: req.params._id})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    review(req, res) {
        let r = new Review(req.body);
        Player.findByIdAndUpdate({_id: req.params._id}, {$push: {reviews: r}})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
}

module.exports = new PlayerController();