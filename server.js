const express = require('express')
const http = require('http')
const  ws = require('ws')
const path = require('path')

const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname + '/views'))

app.get('/', (req, res) => {
    res.render('index.pug',  {title:'Battleship'})
})

app.get('/favicon.', (req, res) => {
    res.render('index.pug',  {title:'Battleship'})
})

const server = http.createServer( app ),
    socketServer = new ws.WebSocketServer({ server }),
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
