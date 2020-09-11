import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'
import db from './firebase'
import { Link } from 'react-router-dom'


function SidebarChat({ id, name, addNewChat }) {

    const [seed, setSeed] = useState("")
    const [messages, setMessages] = useState("")

    useEffect(() => {
        if (id) {
            db.collection('rooms')
            .doc(id).collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => 
                doc.data()))
            )
        }
    }, [])

    useEffect(() => {

        var timestamp = (new Date()).getTime()
        setSeed(timestamp)
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for the chat")

        if (roomName) {
            // database cleaver stuff
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://thispersondoesnotexist.com/image?_=${seed}`}/>
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat