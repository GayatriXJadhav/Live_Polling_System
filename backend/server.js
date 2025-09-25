const express=require("express");
const cors=require("cors");
const {Server}=require("socket.io");
const http=require("http");


const app=express();
app.use(cors());
const server=http.createServer(app);
const io=new Server(server,{cors:{origin:"*"}});
io.on("Connection",(socket)=>{
  console.log("A user connected",socket.id);
});
const PORT=4000;
server.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`));