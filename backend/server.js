const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");


const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});
const server = http.createServer(app);
const io = new Server(server, {
  cors:
  {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],

  }
});
console.log("BAckend started");
const polls = {};
const results={};
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("createPoll", (pollData) => {
    console.log("New Poll Created", pollData);
    polls.current = pollData;
    results.current={};
    pollData.options.forEach((opt)=>
    {
      results.current [opt]=0;
    }
    )
    io.emit("newPoll", pollData);
    
  })
   socket.on("submit-answers",({pollId,answers})=>{
    if(results.current && results.current[answers]!==undefined){
      results.current[answers]+=1;
    }
    //calculate Percentages
    const totalVotes=Object.values(results.current).reduce((a,b)=>a+b,0);
    const percent={};
    for(let opt in results.current){
      percent[opt]=totalVotes?Math.round((results.current[opt]/totalVotes)*100):0;
    }
    io.emit("pollResults",{pollId,percent});
   })

  

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});
const PORT = 4000;
server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));