import { Post } from '../models/social-post.js'

function index (req, res) {
  Post.find({})
	.then(posts => {
    res.json(posts)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function create(req, res) {
  Post.create(req.body)
  .then(post => res.json(post))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  index,
  create,
}