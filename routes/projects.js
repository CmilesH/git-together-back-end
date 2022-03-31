import { Router } from 'express'
import * as projectsCtrl from '../controllers/projects.js'
import { decodeUserFromToken } from '../middleware/auth.js'

const router = Router()

// ========= Protected Routes ========= // 
router.use(decodeUserFromToken)

//localhost:3001/projects
router.get('/', projectsCtrl.index)

//localhost:3001/projects
router.post('/', projectsCtrl.create)

//localhost:3001/projects/:id
router.get('/:id', projectsCtrl.show)

//localhost:3001/projects/:id
router.put('/:id', projectsCtrl.update)

//localhost:3001/projects/:id
router.delete('/:id', projectsCtrl.delete)

//localhost:3001/projects/:id/goals
router.post('/:id/goals', projectsCtrl.addGoal)

//localhost:3001/projects/:id/goals/:gid
router.delete('/:id/goals/:gid', projectsCtrl.deleteGoal)

export { 
  router
}