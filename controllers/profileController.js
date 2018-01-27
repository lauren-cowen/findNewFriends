const db = require("../models");

//Define methods for the profile controller
module.exports = {
	findAll: function(req, res) {
    console.log("hi")
		db.Profile
			.find(req.query)
			.sort({id: -1})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
    	db.Profile
      		.findById(req.params.id)
      		.then(dbModel => res.json(dbModel))
      		.catch(err => res.status(422).json(err));
  	},
  findByEmail: function(req, res){
    console.log(req.query);
    db.Profile
      .findOne({'email': req.query.email})
      .then(dbModel => {
        res.json(dbModel._id)
      })
      .catch(err => res.status(422).json(err));
  },
  	create: function(req, res) {
    	db.Profile
      		.create(req.body)
      		.then(dbModel => res.json(dbModel))
      		.catch(err => res.status(422).json(err));
  	},
  	update: function(req, res) {
    	db.Profile
      		.findOneAndUpdate({ _id: req.params.id }, req.body)
      		.then(dbModel => res.json(dbModel))
      		.catch(err => res.status(422).json(err));
  },
  	remove: function(req, res) {
    	db.Profile
      		.findById({ _id: req.params.id })
      		.then(dbModel => dbModel.remove())
      		.then(dbModel => res.json(dbModel))
      		.catch(err => res.status(422).json(err));
  }
};