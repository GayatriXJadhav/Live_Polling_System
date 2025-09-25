import { useState,useEffect } from "react";
import {io} from "socket.io-client";

const SOCKET_URL="http://localhost:4000";
export default function useSocket(){
    const [socket,setSocket]=useState(null);
    useEffect(()=>{
      const newSocket=io(SOCKET_URL);
      setSocket(newSocket);
      return ()=>newSocket.disconnect();
    },[])
    return socket;
}