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

function show(req, res) {
  Post.findById(req.params.id)
  .then(post => res.json(post))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function update(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(post => res.json(post))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.id)
  .then(post => res.json(post))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  index,
  create,
  show,
  update,
  deletePost as delete,
}