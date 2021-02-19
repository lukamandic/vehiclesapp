import React from 'react';
import { useQuery , gql } from '@apollo/client';

const GET_VEHICLE = gql`
	query GetVehicleById($id: String!) {
	  getVehicleById(id: $id) {
      _id
      vehicleModel
      year
      make
	}
	}
`;

interface Vehicle {
  id: string;
  vehicleModel: string;
  year: string;
  make: string;
}

interface VehicleData {
	vehicles: Vehicle[]
}

interface VehicleVars {
  id: string;
}
 
console.log(process.env.NODE_ENV)

export default function App()
{
    const { loading, data } = useQuery<VehicleData, VehicleVars>(GET_VEHICLE, { variables: {id: '5ef8e95b14ec08001db69f60'} });

console.log(data); 
    return <h1>Hello, world!</h1>
}

