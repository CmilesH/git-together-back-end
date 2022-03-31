import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalSchema = new Schema({
  goal: String,
  date: Date,
  complete: Boolean,
})

const projectSchema = new Schema({
  name: String,
  repo: String,
  goals: [goalSchema],
  image: String,
  completionDate: Date,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true,
})

const Project = mongoose.model("Project", projectSchema)
const Goal = mongoose.model("Goal", goalSchema)

export {
  Project,
  Goal,
}