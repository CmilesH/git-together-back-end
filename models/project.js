import mongoose from 'mongoose'

const Schema = mongoose.Schema

const projectSchema = new Schema({
  repoId: String,
  repoName: String,
  repoCommits: [String],
  goals: [String],
  progress: Number,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true,
})

const Project = mongoose.model("Project", projectSchema)

export {
  Project
}