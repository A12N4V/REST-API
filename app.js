const port = 8000; // port on which the site runs

// Imoorts 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// App configurations
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// Connecting the mongoose server
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {useNewUrlParser:true, useUnifiedTopology:true});

// Post model
const postSchema = {title:String, content:String};
const Post = mongoose.model("Post", postSchema);

// Setting up API 

// Route for all the posts
app.route("/posts")
  .get(function(req,res) {
    Post.find(function(err, foundPosts) {
      if(err) {
        console.log("[-]err--> " + err)
      } else {
        res.send(foundPosts)
      }
    })
  })
  .post(function(req, res) {
    const newPost = new Post({ title:req.body.title, content:req.body.content });
    newPost.save(function(err) {
      if(err) {
        console.log("[-]err--> " + err)
      } else {
        console.log("[+]success--> A new post was made")
      }
    })
  })
  .delete(function(req, res) {
    Post.deleteMany(function(err) {
      if(err) {
        console.log('[-]err--> ' + err)
      } else {
        console.log("[+]success--> deleted all posts")
      }
    })
  });


// Route for a specific post
app.route("/posts/:postTitle")
  .get(function(req, res) {
    Post.findOne(
      {title:req.params.postTitle},
      function(err, foundPost) {
        if(foundPost) {
          res.send(foundPost)
        } else {
          res.send("[-]err--> no posts with that title found")
        }
      })
  })
  
  .put(function(req, res) {
    Post.update(
      {title:req.params.postTitle},
      {title:req.body.title, content:req.body.content},
      {overwrite:true},
      function(err) {
        if(err) {
          console.log("[-]err--> " + err)
        } else {
          res.send("[+]success--> updated post")
        }
      }
    )
  })
  
  .patch(function(req,res) {
    Post.update(
      {title:req.params.postTitle},
      {$set:req.body},
      function(err) {
        if(err) {
          console.log("[-]err--> " + err);
          res.send("[-]err--> " + err)
        } else {
          res.send("[+]success--> updated post")
        }
      }
    )
  })
  
  .delete(function(req,res) {
    Post.deleteOne(
      {title:req.params.postTitle},
      function(err) {
        if(err){
          console.log("[-]err--> " + err);
          res.send("[-]err--> " + err)
        } else {
          res.send("[+]success--> deleted the corresponding article")
        }
      }
    )
  });


app.listen(port, function() {
  console.log('[+]success-->started||port-->'+port)
})
