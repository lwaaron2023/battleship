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
        client.id = clients.length;
        // console.log(`Client ID: ${client.id} connected`);
        /*
        Idea: second person in the pair should always get the first move
         */
        if(client.id & 1){
            const msg = {
                "user":"server",
                "row": -1,
                "col": -1,
                "message":"clientToMove",
            }
            client.send(JSON.stringify(msg));
        }
        // console.log( 'connection',client)
        client.on( 'message', msg => {
            // console.log("source",client.id,"message",msg,"target",client.id^1);
            try{
                const toSend = JSON.parse(msg.toString());
                console.log(toSend);
                clients[client.id^1].send(JSON.stringify(toSend));
            }
            catch(err){
                console.log(err)
            }

        })
        // add client to client list
        clients.push(client)
    })

server.listen( 3000 || process.env.PORT)

ViteExpress.bind( app, server )