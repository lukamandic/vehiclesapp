import mongoose from '../utils/connection'

export default interface Vehicle extends mongoose.Document {
    make: string;
    vehicleModel: string;
    year: string;
}
