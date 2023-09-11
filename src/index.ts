import { Elysia } from "elysia";

new Elysia()
  .get("/", () => "Wall of Love API")
  .get("/ping", () => ({
    Human: {
      name: "Ibrahim",
      email: "abrahimzaman3@gmail.com",
    },
  }))
  .listen(8080);

console.log("Running Server on http://localhost:8080...");
