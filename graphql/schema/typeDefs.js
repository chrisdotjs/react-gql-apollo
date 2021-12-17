const typeDefs = `
    scalar Date

    type Todo {
        id: ID
        title: String
        detail: String
        date: Date
    }

    type Query {
        welcome: String
        getTodos: [Todo]
        getTodo(id: ID): Todo
    }

    type Mutation {
        addTodo(title: String, detail: String, date: Date): Todo
        updateTodo(id: String, title: String, detail: String, date: Date): Todo
        deleteTodo(id: ID): String
    }
`

export default typeDefs
