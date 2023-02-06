import { connect, connection } from 'mongoose'
const {
  // Attempts to connect to MongoDB and then tries to connect locally:)
  MONGO_URI = 'mongodb://localhost:27017/next_test'
} = process.env

const options: any = {
  useUnifiedTopology: true,

  useNewUrlParser: true
}

const invalidStates = [0, 3]

export const connectToDatabase = async () => {
  if (invalidStates.indexOf(connection.readyState)) {
    console.log('Connecting to ', MONGO_URI)
    connect(MONGO_URI, options)
  }
}
