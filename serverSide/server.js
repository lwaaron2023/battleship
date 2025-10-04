import express from 'express'
import http from 'http'
import ViteExpress from 'vite-express'
import { WebSocketServer } from 'ws'

const app = express()
app.use(express.static('public'))


const server = http.createServer( app ),
    socketServer = new WebSocketServer({ server }),
    clients = []

    socketServer.on( 'connection', client => {
        client.groupNum = clients.length>>>1;
        client.id = clients.length;
        /*
        Idea: second person in the pair should always get the first move
         */
        if(client.id & 1){
            client.send(`server:clientToMove`);
        }
        // console.log( 'connection',client)
        client.on( 'message', msg => {
            console.log(client.id,client.groupNum,msg)
        })
        // add client to client list
        clients.push(client)
    })

server.listen( 3000 || process.env.PORT)

ViteExpress.bind( app, server )