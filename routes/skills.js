import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"

const router = Router()

/* GET skills listing. */
router.get('/', skillsCtrl.index)

// GET /skills/new
router.get('/new', skillsCtrl.new)

// GET /todos/:id
router.get('/:id', skillsCtrl.show)

// POST /skills 
router.post('/', skillsCtrl.create) 

// DELETE /skills:id
router.delete('/:id', skillsCtrl.delete)

// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit)

// PUT /skills/:id
router.put('/:id', skillsCtrl.update)

export {
  router
}
