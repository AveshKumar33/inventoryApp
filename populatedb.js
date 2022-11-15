#! /usr/bin/env node
require('dotenv').config();

console.log(`This script populates some test categories and items to your database. Specified database as argument - e.g.: populatedb mongodb+srv://AveshKumar:${process.env.password}@cluster0.syb9smm.mongodb.net/inventory?retryWrites=true&w=majority`);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Category = require('./models/categoryServices')
var Item = require('./models/itemServices')



var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var categories = []
var items = []

function categoryCreate(Name,Description, cb) {
  categorydetail = {Name:Name , Description:Description }
  
  var category = new Category(categorydetail);
       
  category.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New category: ' + category);
    categories.push(category)
    cb(null, category)
  }  );
}
function itemCreate(Name,Description,Category,Price,Availablity,Image, cb) {
  itemdetail = {Name:Name , Description:Description,Category:Category,Price:Price,Availablity:Availablity,Image:Image}
  
  var item = new Item(itemdetail);
       
  item.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New item: ' + item);
    items.push(item)
    cb(null,item)
  }  );
}


function createCategory(cb) {
  async.series([
      function(callback) {
        categoryCreate('Stationary','uses for Students', callback);
      },
      function(callback) {
        categoryCreate('Fruits','To do helghy', callback);
      },
      function(callback) {
        categoryCreate('Toys','For Exercise', callback);
      },
      function(callback) {
        categoryCreate('Auto Parts', 'To Made car', callback);
      },
      function(callback) {
        categoryCreate(' Musical Instance', 'mind fresh', callback);
      },
      ],
      // optional callback
      cb);
}

function createItem(cb) {
    async.series([
        function(callback) {
          itemCreate('A4 page', 'photo state', categories[0], 2.00,400,'https://media.istockphoto.com/id/1288474318/photo/blank-books-for-mock-up.jpg?s=612x612&w=is&k=20&c=o7KOP9HbsAVUBOe3umTbFqSSOtAFhyYsPzJOMLM8jJg=' ,callback);
        },
        function(callback) {
          itemCreate('Marker', 'write on white board', categories[0],10.00 ,50,'https://www.pngmart.com/image/224241/png/224240' ,callback);
        },
        function(callback) {
          itemCreate('Pen', 'write Notes', categories[0] ,5.00,90, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fall-free-download.com%2Ffree-vector%2Fpen.html&psig=AOvVaw31wrpAt276Q_6QcXdJVjmw&ust=1668588804462000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLj3hernr_sCFQAAAAAdAAAAABAD',callback);
        },
        function(callback) {
          itemCreate('Apple', 'good for helth', categories[1],15.00,150, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F102104%2Fpexels-photo-102104.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-mali-maeder-102104.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fapple%2F&tbnid=W_SLH0aj3YhKwM&vet=12ahUKEwj7j5z956_7AhWg3XMBHVdmBUYQMygBegUIARDBAQ..i&docid=rtbzDfEwn2QyjM&w=2827&h=2827&q=apple%20image%20download&ved=2ahUKEwj7j5z956_7AhWg3XMBHVdmBUYQMygBegUIARDBAQ',callback);
        },
        function(callback) {
          itemCreate('Banana', 'good for helth', categories[1], 5.00,130, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbanana&psig=AOvVaw1eL6CwjWF3eYFfDhyyfuyc&ust=1668588878015000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjego3or_sCFQAAAAAdAAAAABAI',callback);
        },
        function(callback) {
          itemCreate('Bat', 'play cricket', categories[2], 800.00,100, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FJTmwmi_cricket-bat-pics-hd-download-hd-png-download%2F&psig=AOvVaw0-ppuLTq5o36uWEPvr-PIq&ust=1668588916889000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIDntJ_or_sCFQAAAAAdAAAAABAD',callback);
        },
        function(callback) {
          itemCreate('Magic cube', 'good for reasoning', categories[2], 50.00,130,'https://play.google.com/store/apps/details?id=org.distorted.magic&hl=en_US&gl=US',callback);
        },
        function(callback) {
          itemCreate('Head Light', 'To made repair car', categories[3], 5000.00,66, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fso%2Fheadlights%2F&psig=AOvVaw1khd_RvlwAA4PIauKlxbYg&ust=1668588992713000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCODb5cTor_sCFQAAAAAdAAAAABAD',callback);
        },
        function(callback) {
          itemCreate('Bumper', 'To made repair car', categories[3], 2000.00,80, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbumper&psig=AOvVaw1roYf5GdNWNkEafpbhPsUa&ust=1668589042464000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKi0z9vor_sCFQAAAAAdAAAAABAD',callback);
        },
        function(callback) {
          itemCreate('Piano', 'for intertenment',categories[4], 1500.00,50, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fpiano.html&psig=AOvVaw3ZnDS--Gfn0plMt9sRK3mh&ust=1668589075860000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCICysuvor_sCFQAAAAAdAAAAABAN',callback);
        },
        function(callback) {
          itemCreate('Guitar', 'for intertenment', categories[4], 2000.00,130, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fguitar&psig=AOvVaw0qUtkd0WT29euwxd8ldvIt&ust=1668589128965000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMCg1YTpr_sCFQAAAAAdAAAAABAD',callback);
        },
        ],
        // optional callback
        cb);
}



async.series([
    createCategory,
    createItem,
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('items: '+items);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



