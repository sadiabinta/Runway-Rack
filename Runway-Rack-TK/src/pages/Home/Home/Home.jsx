import ContactCard from "../ContactCard/ContactCard";
import DestinationBanner from "../DestinationBanner/DestinationBanner";
import FilterDestinationCard from "../FilterDestinationCard/FilterDestinationCard";
import Flightoption from "../FlightOption/Flightoption";



const Home = () => {
    return (
        <div>
            <ContactCard></ContactCard>
            <DestinationBanner></DestinationBanner>
            <FilterDestinationCard></FilterDestinationCard>
            <Flightoption></Flightoption>
        </div>
    );
};

export default Home;