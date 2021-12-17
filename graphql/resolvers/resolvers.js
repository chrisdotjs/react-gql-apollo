import Todo from "../../models/Todo.js"

const resolvers = {
    Query: {
        welcome: () => {
            return "Hello World!"
        },

        getTodos: async() => {
            const todos = await Todo.find()
            return todos
        },

        getTodo: async(root, args) => {
          return await Todo.findById(args.id)
        }
    },

    Mutation: {
        addTodo: async(root, args) => {
            const newTodo = new Todo({title:args.title, detail:args.detail, date:args.date})
            await newTodo.save()
            return newTodo
        },

        updateTodo: async(root, args) => {
            const { id, title, detail, date} = args
            const updatedTodo = {}
            if (title !== undefined) {
              updatedTodo.title = title
            }
            if (detail !== undefined) {
              updatedTodo.detail = detail
            }
            if (date !== undefined) {
              updatedTodo.date = date
            }
            const todo = await Todo.findByIdAndUpdate(
              id,
              { title, detail, date },
              { new: true }
            )
            return todo
        },

        deleteTodo: async(root, args) => {
            await Todo.findByIdAndDelete(args.id)
            return "The todo is deleted"
        }
    }
}

export default resolvers
