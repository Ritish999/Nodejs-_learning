// day 9 ko basics 

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const blogSchema = new Schema({
//   title: {
//     type: String,
//     unique: true,
//   },
//   subtitle: {
//     type: String,
//   },
//   description: {
//     type: String,
//     // type: Number
//   },
//   image: {
//     type: String,
//   },
// });

// const Blog = mongoose.model("Blog", blogSchema); //method
// // mongoose.mehod --- properties hunca bracket xaina vane

// module.exports = Blog;



// day 10 ko 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    // unique: true,
    // mathi ko unique le chai  primary key ko kaam garca
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
    // type: Number
  },
  image: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogSchema); //method
// mongoose.mehod --- properties hunca bracket xaina vane

module.exports = Blog;
