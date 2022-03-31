import mongoose from 'mongoose'

const Schema = mongoose.Schema

const repoSchema = new mongoose.Schema({
  repoId: String,
  repoName: String,
  repoCommits: [String],
  project: {type: Schema.Types.ObjectId, ref: "Project"}
})

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  avatar: String,
  gitUser: String,
  repos: [repoSchema],
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
