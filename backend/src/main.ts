import Server from './server'
import { getVehicleById, searchVehicles, vehiclePagination } from './controllers'

const serve = new Server(3900)
console.log(process.env.NODE_ENV)

serve.addNewType(`
type Query {
    createVehicle(vehicleInfo: VehicleInfo!): Vehicle
    getVehicleById(id: String!): Vehicle
    getVehiclesPagination(skip: Int!, limit: Int!): [Vehicle]
    searchVehicle(term: String!, limit: Int!, skip: Int!): [Vehicle]
}
type Mutation {
    editVehicle(vehicleInfo: VehicleInfo!, id: String!): Vehicle
    deleteVehicle(id: String!): Vehicle
}
input VehicleInfo {
    make: String
    vehicleModel: String
    year: String
}
type Vehicle {
    _id: String
    make: String
    vehicleModel: String
    year: String
}
`)

serve.addNewResolver({
  /*Subscription: {},*/
  Query: {
    searchVehicle: (_, args) => {
        const { term, skip, limit } = args

        return searchVehicles(term, limit, skip).then((data) => {
            return data
        })
    },
    createVehicle: (_, args) => {
        return { id: 1, name: args.movieInfo.name }
    },
    getVehicleById: (_, args) => {
        const id = args.id

        return getVehicleById(id)
    },
    getVehiclesPagination: (_, args) => {
        const { limit, skip } = args

        return vehiclePagination(limit, skip).then((data) => {
            return data
        })
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
