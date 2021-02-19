import Vehicle from '../interfaces/Vehicle'
import VehicleModel from '../models/Vehicle'

const vehiclePagination = async (limit: number, skip: number): Promise<any>  => {
    try {
        const vehicles = await VehicleModel.find({}).limit(limit).skip(skip)

        return vehicles
    } catch(e) {
        console.log(e)
        return e
    }
}

export default vehiclePagination