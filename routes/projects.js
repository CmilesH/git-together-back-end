import { Router } from 'express'
import * as projectsCtrl from '../controllers/projects.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', projectsCtrl.create)
router.get('/', projectsCtrl.index)
router.get('/:id', projectsCtrl.show)
router.put('/:id', projectsCtrl.update)
router.delete('/:id', projectsCtrl.delete)
router.post('/:id', projectsCtrl.addGoal)

/*---------- Protected Routes ----------*/


export { router }