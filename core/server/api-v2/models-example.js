'use strict'

const models = require('../models')
const Promise = require('bluebird')
// const utils = require('./utils')
// const _ = require('lodash')
const errors = require('../errors')
const i18n = require('../utils/i18n')
const pipeline = require('../utils/pipeline')
// const books = require('./books')
// const humps = require('humps')
const Validation = require('../data/validation')

const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const config = require('../config')
mongoose.connect(config.dbUrl + config.dbName)

let Author = mongoose.model('Author', {
  name: String,
  description: String,
})

let Collection = mongoose.model('Collection', {
  name: String,
  description: String,
})


const collections = {
  browse(data) {
    // let hahaha = new Collection(data.object)

    return Collection.find((err, collections) => {
      
      if (err) return err
    })
  },
}


const authors = {
  add(data) {
    let author = new Author(data.object)

    let res = author.save((err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('meow')
      }
    })

    console.log(res)
    
    
    return res
  },
}


// test start
var Schema = mongoose.Schema
  
var personSchema = Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  _creator : { type: Number, ref: 'Person' },
  title    : String,
  fans     : [{ type: Number, ref: 'Person' }]
});

var Story  = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);


const person = {
  browse(data) {
    return Story
      .findOne({ title: 'Once upon a timex.' })
      .populate('_creator')
      .exec(function (err, story) {
        if (err) return handleError(err);
        console.log('The creator is %s', story._creator.name);
        // prints "The creator is Aaron"
      });
  },

  add(data) {
    var aaron = new Person({ _id: 0, name: 'Aaron', age: 100 });

    return aaron.save(function (err) {
      if (err) {
        console.log(err)
        // return handleError(err)
        return Promise.reject(err)
      }
      
      var story1 = new Story({
        title: "Once upon a timex.",
        _creator: aaron._id    // assign the _id from the person
      });
      
      story1.save(function (err) {
        if (err) return handleError(err);
        // thats it!
      });
    });
  }
}

module.exports = { authors, collections, person }
