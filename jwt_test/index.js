import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import express from 'express'
import http from 'http'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const verifyJWT = (req, res, next) =>{
    const token = req.headers['x-access-token']
    if(!token) return res.status(401).json({ auth: false, message:'Token invalido' })
    jwt.verify(token, process.env.SECRET, function(err, decoded){
        if(err) return res.status(500).json({auth: false, message:'falha ao autenticar o token'})
        console.log('deu ruim')

        req.userId = decoded.id
        next()
    })
}
 
app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})
 
app.get('/clientes', verifyJWT,(req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.json([{id:1, nome:'Matheus'}]);
}) 

app.post('/login', (req, res, next) =>{
    if(req.body.user==='Matheus' && req.body.senha==='123'){
        //auth ok
        const id = 1
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300
        })
        return res.json({auth: true, token: token})
    }
    res.status(500).json({message: 'login invalido'})
})

app.post('/logout', (req, res)=>{
    res.json({ auth: false, token:null })
})


 
const server = http.createServer(app); 
server.listen(3000);
console.log("Servidor escutando na porta 3000...")