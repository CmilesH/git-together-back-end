import { Router } from "express";
import * as postsCtrl from '../controllers/social-posts.js'

const router = Router()
//Routes
//localhost:3000/socialFeed
router.get('/', postsCtrl.index)


export {
  router
}