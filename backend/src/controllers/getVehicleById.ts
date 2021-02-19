import Vehicle from '../interfaces/Vehicle'
import VehicleModel from '../models/Vehicle'

const getVehicleById = async (id: string): Promise<Vehicle>  => {
    try {
        const vehicle = await VehicleModel.findById(id)

        return vehicle
    } catch(e) {
        console.log(e)
        return e
    }
}

export default getVehicleById