import React from 'react'
import useSocket from '../hooks/useSocket'
import { useEffect } from 'react';

const TeacherPage = () => {
    const socket=useSocket();
    useEffect(()=>{
        if(!socket) return;
        socket.on("connect",()=>{
            console.log("Connected to backend",socket.id);
        },[socket]);

})
  return (
    <h1>Socket Test Page</h1>
  )
}

export default TeacherPage