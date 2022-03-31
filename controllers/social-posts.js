import { Post } from '../models/social-post.js'

function index (req, res) {
  Post.find({})
  .populate(['author', 'comments.author'])
	.then(posts => {
    res.json(posts)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function create(req, res) {
  req.body.author = req.user.profile
  Post.create(req.body)
  .then(post => {
    post.populate('author')
    .then(populatedPost => {
      res.json(populatedPost)
      console.log(populatedPost)
    })
  })
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

function createComment (req, res) {
  req.body.author = req.user.profile
  Post.findById(req.params.id)
  .then(post => {
    post.comments.push(req.body)
    post.save()
    .then(savedPost =>
      savedPost.populate(['author', 'comments.author'])
      .then(populatedPost =>
        res.json(populatedPost))
      )
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteComment (req, res) {
  Post.findById(req.params.id)
  .then(post => {
    post.comments.id(req.params.cid).remove()
    post.save()
    .then(savedPost =>
      savedPost.populate(['author', 'comments.author'])
      .then(populatedPost => 
        res.json(populatedPost))
      )
  })
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
  createComment,
  deleteComment
}