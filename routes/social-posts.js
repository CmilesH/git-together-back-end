import { Router } from "express";
import * as postsCtrl from '../controllers/social-posts.js'

const router = Router()
//Routes
//localhost:3000/socialFeed
router.get('/', postsCtrl.index)
//localhost:3000/socialFeed
router.post('/', postsCtrl.create)
//localhost:3000/socialFeed/:id
router.get('/:id', postsCtrl.show)


export {
  router
}