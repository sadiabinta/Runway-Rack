import Banner from "../Banner/Banner";
import DestinationBanner from "../DestinationBanner/DestinationBanner";
import FilterDestinationCard from "../FilterDestinationCard/FilterDestinationCard";
import Flightoption from "../FlightOption/Flightoption";
import LatestUpdate from "../LatestUpdate/LatestUpdate";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <ContactCard></ContactCard> */}
            <DestinationBanner></DestinationBanner>
            <FilterDestinationCard></FilterDestinationCard>
            <Flightoption></Flightoption>
            <LatestUpdate></LatestUpdate>
        </div>
    );
};

export default Home;