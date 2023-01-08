import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  mastered: Boolean,
  useCase: String,
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}