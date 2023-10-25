import Banner from "../Banner/Banner";
import DestinationBanner from "../DestinationBanner/DestinationBanner";
import FilterDestinationCard from "../FilterDestinationCard/FilterDestinationCard";
import Flightoption from "../FlightOption/Flightoption";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DestinationBanner></DestinationBanner>
            <FilterDestinationCard></FilterDestinationCard>
            <Flightoption></Flightoption>
        </div>
    );
};

export default Home;