import { gql} from '@apollo/client';

const GET_HOTEL = gql`
query {
	hotelPage{
		rows {
            id
			name
			address
		}
	}
}
`;

export default GET_HOTEL;
