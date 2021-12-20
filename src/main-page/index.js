import './main-page.css';
import Header from './header';
import {useEffect, useState, useMemo} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseFromQuery from '../search-results/house-from-query';


function App() {
  const [allHouses, setHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setHouses(houses);
    };
    fetchHouses(); 
  }, []);

  const featuredHouse = useMemo(() => {
    if(allHouses && allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);
  
  return (
    <Router>
      <div className="container">
        <Header subTitle="Providing houses all over the world" 
        title="some title" />
        <HouseFilter allHouses={allHouses}/>
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses} />
          </Route>
          <Route exact path="/">
            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
