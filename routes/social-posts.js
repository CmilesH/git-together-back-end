import { Router } from "express";
import * as postsCtrl from '../controllers/social-posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

//localhost:3001/socialFeed
router.get('/', checkAuth, postsCtrl.index)

//localhost:3001/socialFeed
router.post('/', checkAuth, postsCtrl.create)

//localhost:3001/socialFeed/:id
router.get('/:id', postsCtrl.show)

//localhost:3001/socialFeed/:id
router.put('/:id', checkAuth, postsCtrl.update)

//localhost:3001/socialFeed/:id
router.delete('/:id', checkAuth, postsCtrl.delete)

//localhost:3001/socialFeed/:id/comments
router.post('/:id/comments', checkAuth, postsCtrl.createComment)

//localhost:3001/socialFeed/:id/comments/:cid
router.delete('/:id/comments/:cid', checkAuth, postsCtrl.deleteComment)

export {
  router
}