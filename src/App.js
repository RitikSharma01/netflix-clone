// import logo from './logo.svg';
import './App.css';
import Row from './Row'
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav';

function App() {
  return (
    <div className="App">
    {/* {navbar} */}
      <Nav />
      <Banner />
      <Row  
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title="Treanding Now" fetchUrl={requests.fetchTreanding}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title=" Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;

// 77df85a8c27f42a2ef9a08e10ac1ba36