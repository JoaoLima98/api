import express from 'express';
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()
const app = express();
app.use(express.json())


app.post('/users', async (request, response)=>{

    await prisma.user.create({
        data: {
            email: request.body.email,
            name: request.body.nome, 
            age: request.body.idade
        }
    })
    response.status(201).json(request.body)
})
app.get('/users', async (request, response) => {
    let users = []
    if (request.query){
        users = await prisma.user.findMany({
            where: {
                name: {
                    contains: request.query.name
                },
                email: {
                    contains: request.query.email
                },
            }
        })
    }else{
        users = await prisma.user.findMany()
    }
    
   

    response.status(200).json(users)
})

app.put('/users/:id', async (request, response)=>{
    await prisma.user.update({
        where: {
            id: request.params.id
        },
        data: {
            email: request.body.email,
            name: request.body.nome, 
            age: request.body.idade
        }
    })
    response.status(201).json(request.body)
})

app.delete('/users/:id', async (request, response)=>{
    await prisma.user.delete({
        where: {
            id: request.params.id
        }
    })
    response.status(200).json({message: 'Usuário deletado com sucesso!'})
})


app.listen(3000)
