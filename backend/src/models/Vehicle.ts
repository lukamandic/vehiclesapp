import mongoose from '../utils/connection'
import Vehicle from '../interfaces/Vehicle'

const VehicleSchema: mongoose.Schema = new mongoose.Schema({
    make: {type: String, required: true},
    vehicleModel: {type: String, required: true},
    year: {type: String, required: true}
})

const VehicleModel: mongoose.Model<Vehicle> = mongoose.model('Vehicle', VehicleSchema);

export default VehicleModel