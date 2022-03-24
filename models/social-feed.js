import mongoose from "mongoose"

const Schema = mongoose.Schema

const socialFeedSchema = new Schema ({
  posts: [{type: Schema.Types.ObjectId, ref: "Post"}]
})

const socialFeed = mongoose.model("Social Feed", socialFeedSchema)

export {
  socialFeed
}