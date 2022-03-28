import { Project } from '../models/project.js'

function create(req, res) {
  req.body.owner = req.user.profile
  Project.create(req.body)
  .then(project => res.json(project))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function index(req, res) {
  Project.find({})
  .then(projects => res.json(projects))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function show(req, res) {
  Project.findById(req.params.id)
  .then(project => res.json(project))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function update (req, res) {
  Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(project => res.json(project))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteProject(req, res) {
  Project.findByIdAndDelete(req.params.id)
  .then(project => res,json(project))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}


export {
  create,
  index,
  show,
  update,
  deleteProject as delete,
}