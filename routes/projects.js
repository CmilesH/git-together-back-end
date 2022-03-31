import { Router } from 'express'
import * as projectsCtrl from '../controllers/projects.js'
import { decodeUserFromToken } from '../middleware/auth.js'

const router = Router()

// ========= Protected Routes ========= // 
router.use(decodeUserFromToken)

//localhost:3001/projects
router.get('/', checkAuth, projectsCtrl.index)

//localhost:3001/projects
router.post('/', checkAuth, projectsCtrl.create)

//localhost:3001/projects/:id
router.get('/:id', checkAuth, projectsCtrl.show)

//localhost:3001/projects/:id
router.put('/:id', checkAuth, projectsCtrl.update)

//localhost:3001/projects/:id
router.delete('/:id', checkAuth, projectsCtrl.delete)

//localhost:3001/projects/:id/goals
router.post('/:id/goals', checkAuth, projectsCtrl.addGoal)

//localhost:3001/projects/:id/goals/:gid
router.delete('/:id/goals/:gid', checkAuth, projectsCtrl.deleteGoal)

export { router }