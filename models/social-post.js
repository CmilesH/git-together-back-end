import mongoose from "mongoose"

const Schema = mongoose.Schema

const postSchema = new Schema ({
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  avatar: {type: Schema.Types.ObjectId, ref: "Profile"},
  content: {type: String, required: true},
  comments: [commentSchema]
}, {
  timestamps: true,
})

const commentSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  avatar: {type: Schema.Types.ObjectId, ref: "Profile"},
  content: {type: String, required: true}
}, {
  timestamps: true
})

const Post = mongoose.model("Post", postSchema)

export {
  Post
}