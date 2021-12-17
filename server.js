import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import typeDefs from './graphql/schema/typeDefs.js'
import resolvers from './graphql/resolvers/resolvers.js'

async function startApolloServer() {
    const app = express()
    // server constructor
    const apolloServer = new ApolloServer({ 
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
    app.use(cors())
    dotenv.config()
    app.use((req, res) => { res.send("Express server is running")})
    const PORT = process.env.PORT || 4000

    try {
      await mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log(`Connected to MongoDB on port ${PORT}`)
      } catch (error) {
          console.log(error)
      }

    app.listen(PORT, () => console.log(`🚀 Apollo Server is running at http://localhost:4000${apolloServer.graphqlPath} on port ${PORT}`))
}
startApolloServer()
