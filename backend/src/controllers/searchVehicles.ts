import Vehicle from '../interfaces/Vehicle'
import VehicleModel from '../models/Vehicle'

const deleteVehicle = async (term: string, limit: number, skip: number): Promise<any>  => {
    try {
        const vehicles = await VehicleModel.find({$text: {$search: term}}, {score: {$meta: "textScore"}}).sort({score:{$meta:"textScore"}}).limit(limit).skip(skip)

        return vehicles
    } catch(e) {
        console.log(e)
        return e
    }
}

export default deleteVehicle