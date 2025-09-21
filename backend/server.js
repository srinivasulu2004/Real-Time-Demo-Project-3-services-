const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

app.use(express.json());

mongoose.connect("mongodb://mongo:27017/devopsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error(err));

const UserSchema = new mongoose.Schema({ name: String, role: String });
const User = mongoose.model("User", UserSchema);

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.post("/user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.listen(port, () => console.log(`Backend running on port ${port}`));

