import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  avatar: {type: Schema.Types.ObjectId, ref: "Profile"},
  content: {type: String, required: true}
}, {
  timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)

export {
  Comment
}