import { Router } from 'express'
import * as projectsCtrl from '../controllers/projects.js'
import { decodeUserFromToken } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken)

/*---------- Public Routes ----------*/
router.post('/', projectsCtrl.create)
router.get('/', projectsCtrl.index)
router.get('/:id', projectsCtrl.show)
router.put('/:id', projectsCtrl.update)
router.delete('/:id', projectsCtrl.delete)
router.post('/:id/goals', projectsCtrl.addGoal)
router.patch('/:id/goals/:gid', projectsCtrl.updateGoal)
router.delete('/:id/goals/:gid', projectsCtrl.deleteGoal)

/*---------- Protected Routes ----------*/


export { router }