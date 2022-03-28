import { Project } from '../models/project.js'

function create(req, res) {
  Project.create(req.body)
  .then(project => res.json(project))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  create,
}