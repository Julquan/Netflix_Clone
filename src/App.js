import Row from './component/Row';
import './App.css';
import requests from './requests';
import Banner from './component/Banner';
import Nav from './component/Nav';

function App() {
  return (
    <div className="app">
     <Banner/>

     <Nav/> 
   
      <Row title="NETFLIX ORIGINALS" fetchUrl= {requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl= {requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl= {requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl= {requests.fetchActionMovies} />
      <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies"fetchUrl= {requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl= {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
