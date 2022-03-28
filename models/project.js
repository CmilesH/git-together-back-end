import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalSchema = new Schema({
  goal: String,
  complete: Boolean,
})

const projectSchema = new Schema({
  repoId: String,
  repoName: String,
  repoCommits: [String],
  goals: [goalSchema],
  progress: Number,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true,
})

const Project = mongoose.model("Project", projectSchema)
const Goal = mongoose.model("Goal", goalSchema)

export {
  Project,
  Goal
}