import House from "../house";

const FeaturedHouse = ({house}) => {
    if(house) {
        return (
            <div>
                <div className="row featuredHouse">
                    <h3 className="col-md-12 text-center">Featured house</h3>
                </div>
                <House house={house} />
            </div>
        );
    } else {
        return <div>No featured house available to show at this time</div>;
    }
};
 
export default FeaturedHouse;