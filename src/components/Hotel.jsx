import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import GET_HOTEL from "../graphql/getHotel.graphql";

const Hotel = ()=> {
  const { data, error, loading } = useQuery(GET_HOTEL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error...${error.message}`</p>;

  return (
    
    <Fragment>
      {data.hotelPage.rows.map((hotel) => (
        <div key={hotel.id}>
          {hotel.id} - {hotel.name} - {hotel.address}
          
        </div>
      ))}
    </Fragment>

 //console.log(data)
  );
}

export default Hotel;
