import express from "express"; 

/* Express Js is framwrok, designed for create webserver & api creation. handle client request and fetch data from db*/

const app = express(); // storing exprss in a variable "app"

app.get("/", (req, res) => {   // sending get request to server in "/" (home directory).  callback includes two parameters "request" and "response" & eventally server respose hello world .
  res.send("Hello World");
});

app.get("/profile", (req, res) => {
  res.send("this is profile");
});
app.get("/loginpage", (req, resp) => {
  resp.send("<h1>THIS IS LOGIN PAGE </h1>");
});

app.listen(3000, () => { // once server starts, it continuously listen in given port  
  console.log("Server is running on http://localhost:3000");
});
