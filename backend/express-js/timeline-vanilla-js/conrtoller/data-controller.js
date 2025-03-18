const { sortByCreatedAtWithFor } = require('../utils/utils.js');
 let { posts } = require('../models/data.js');
 
  const dataReq = (req,res )=>{
    posts = sortByCreatedAtWithFor(posts, false);
    res.status(200).send(posts);
  
  }

module.exports = {
    dataReq
}