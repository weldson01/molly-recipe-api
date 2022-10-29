import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    recipes: [
      {
        recipeId: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
