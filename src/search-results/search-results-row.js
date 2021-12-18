import { useHistory } from "react-router-dom";
const SearchResultsRow = ( {house}) => {
    const history = useHistory();
    const openHouse = () => {
        return history.push(`/house/${house.id}`);
    };
    return (
        <tr onClick={openHouse}>
            <td>{house.address}</td>
            <td>{house.price}</td>
            <td>{house.likes}</td>
        </tr>
    );
};
 
export default SearchResultsRow;