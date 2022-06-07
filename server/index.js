
const express = require("express");
const connection = require("./db");
const createRoutes = require("./routes/createTodo")
const deleteRoutes = require("./routes/deleteTodo")

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
connection();

app.use('/api/todo', createRoutes)
app.use('/api/todo', deleteRoutes)

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
