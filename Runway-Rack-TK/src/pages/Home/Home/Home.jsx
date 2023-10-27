import Banner from "../Banner/Banner";
import DestinationBanner from "../DestinationBanner/DestinationBanner";
import FilterDestinationCard from "../FilterDestinationCard/FilterDestinationCard";
import Flightoption from "../FlightOption/Flightoption";
import LatestUpdate from "../LatestUpdate/LatestUpdate";
import Search from "../Search/Search";
import SearchTest from "../SearchTest/SearchTest";



const Home = () => {
    return (
        <div>

            <SearchTest></SearchTest>
            <Banner></Banner>
            <Search></Search>
            <DestinationBanner></DestinationBanner>
            <FilterDestinationCard></FilterDestinationCard>
            <Flightoption></Flightoption>
            <LatestUpdate></LatestUpdate>
        </div>
    );
};

export default Home;