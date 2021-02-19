import Server from './server'
console.log(process.env.NODE_ENV)
const serve = new Server(3900)

serve.addNewType(`
type Query {
    createVehicle(vehicleInfo: VehicleInfo!): Vehicle
    getVehicleById(id: String!): Vehicle
    getVehiclesPagination(offset: Int!, limit: Int!): [Vehicle]
    searchVehicle(term: String!): [Vehicle]
}
type Mutation {
    editVehicle(vehicleInfo: VehicleInfo!, id: String!): Vehicle
    deleteVehicle(id: String!): Vehicle
}
input VehicleInfo {
    make: String
    model: String
    year: String
}
type Vehicle {
    _id: String
    make: String
    model: String
    year: String
}
`)

serve.addNewResolver({
  /*Subscription: {},*/
  Query: {
    createVehicle: (_, args) => {
        return { id: 1, name: args.movieInfo.name }
    },
    getVehicleById: (_, args) => {
        return { id: args.id, name: 'Terminator' }
    },
    getVehiclesPagination: (_, args) => {
        console.log(args)
        return [
            {
                id: 1,
                name: 'Terminator'
            },
            {
                id: 2,
                name: 'Terminator 2'
            },
            {
                id: 3,
                name: 'Terminator 3'
            }
        ]
    }
  },
  Mutation: {
      editVehicle: (_, args) => {

      },
      deleteVehicle: (_, args) => {

      }
  }
})

console.log('Initializedddddd')

serve.initializeServer()
// Hot Module Replacement   
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}
