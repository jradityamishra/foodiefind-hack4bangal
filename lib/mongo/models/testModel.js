import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
  name: String,
});

export const Test = models.Test || model("Test", testSchema);
