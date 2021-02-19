import { ApolloServer, PubSub} from 'apollo-server'

class Server {
    private port
    public server
    public app
    private typeDefs
    private resolvers
    public pubsub
    constructor(port: number) {
        this.port = port
        this.server
        this.typeDefs = ``
        this.resolvers = {}
        this.pubsub = new PubSub()
    }
  
    addNewType(newType: string) {
        this.typeDefs += newType
    }
  
    addNewResolver(newResolver: object) {
        var keys: string[] = Object.keys(newResolver)
        for (var x = 0; x < keys.length; x++) {
            this.resolvers[keys[x]] = newResolver[keys[x]]
        }
        return this.resolvers
    }
  
    initializeServer() {
        var whitelist = ['https://vehicles.structika.com', 'https://vehiclesbackend.structika.com']
        var corsOptions = {
          origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
              callback(null, true)
            } else {
              callback(new Error('Not allowed by CORS'))
            }
          }
        }

        this.server = new ApolloServer({
          cors: process.env.NODE_ENV === 'production' ? corsOptions : null,
          typeDefs: this.typeDefs,
          resolvers: this.resolvers,
          playground: true,
          context: ({ req, res }) => ({ req, res, pubsub: this.pubsub })
        });
        
        this.server.listen(this.port).then(({ url }) => console.log(`server started at ${this.port}`));
    }
  }

export default Server
