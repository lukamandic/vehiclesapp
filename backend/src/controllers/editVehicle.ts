import Vehicle from '../interfaces/Vehicle'
import VehicleModel from '../models/Vehicle'

const editVehicle = async (id: string, vehicleObject: Vehicle): Promise<Vehicle>  => {
    try {
        const vehicle = await VehicleModel.updateOne({_id: id}, vehicleObject)

        return vehicle
    } catch(e) {
        console.log(e)
        return e
    }
}

export default editVehicle