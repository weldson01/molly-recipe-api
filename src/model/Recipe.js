import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [
    {
      igredientId: String,
    },
  ],
});

export default mongoose.model("Recipe", RecipeSchema);
