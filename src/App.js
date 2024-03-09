import './App.css';
import { useState } from 'react';
import SearchIcon from "./search.svg";
import { Container, Col, Row, Image } from 'react-bootstrap'
import { Users } from './user';

function ColorfulText({children}) {
  return <span style={{color: 'gold'}}>{children}</span>;
}

function App() {
  const handleClick = () => { }
  const [query,setQuery]=useState("");
  console.log(Users.filter(users => users.title.toLowerCase().includes("cr")))
return (
  <div className="app">
    <h1>SportLand</h1>
    <div className="search">
      <input
        placeholder="Search for sports"
        onChange={e=>setQuery(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="search"
      />
    </div>
    <Container>
      <Row>
        {Users.filter((user)=>user.title.toLowerCase().includes(query)).map((data, index) => (
          <Col md={4} key={index} >
            <div className="img-card" onClick={() => handleClick(data.src)}>
              <li key={data.id} className='listItem'>
                <h3 style={{fontSize: '4rem'}} ><ColorfulText>{data.title}</ColorfulText></h3>
                <Image style={{ width: '500px', height: "400px" }} thumbnail src={data.src}  />
              </li>
            </div>
          </Col>
        )
      )}
      </Row>
    </Container>
  </div>
);
}
export default App;