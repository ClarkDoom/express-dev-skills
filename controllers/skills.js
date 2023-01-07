import { Skill } from '../models/skills.js'

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req,res){
  res.render('skills/new')
}

function create(req, res) {
  req.body.done = false
  Skill.create(req.body)
  .then(skill => [
    res.redirect('/skills')
  ])
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res){
  Skill.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function edit(req, res) {
  // find the skill by it's id
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
}

function update(req, res) {
  Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(skill => {
    res.redirect(`/skills/${req.params.id}`)
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete, 
  edit, 
  update
}