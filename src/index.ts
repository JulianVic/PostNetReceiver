import express from "express";
import { postRouter } from "./Post/infraestructure/routes/postRouter";
import { userRouter } from "./User/infraestructure/routes/userRouter";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/post", postRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

