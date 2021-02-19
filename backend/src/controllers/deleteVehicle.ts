import Vehicle from '../interfaces/Vehicle'
import VehicleModel from '../models/Vehicle'

const deleteVehicle = async (id: string): Promise<Vehicle>  => {
    try {
        const vehicle = await VehicleModel.deleteOne({ _id: id })

        return vehicle
    } catch(e) {
        console.log(e)
        return e
    }
}

export default deleteVehicle