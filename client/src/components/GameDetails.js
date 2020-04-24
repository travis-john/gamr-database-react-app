import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import Screenshots from './Screenshots';
import api from '../utils/api';

const GameDetails = (props) => {

  const [gameID, setGameID] = useState('');
  const [gameData, setGameData] = useState([]);
  const [followGame, setFollowGame] = useState([]);
  
  async function getID(){
    const url = window.location.pathname;
    const urlArray= url.split('/');

    let id = urlArray[2];
    setGameID(id);
  }

  async function getGame(){
    const res = await api.search(gameID)
    // .then((res) => {
    //   setGameData(res.data);
    // })
    console.log(res);
  }

  useEffect(() => {
    getID();
    getGame();
  })

    return (
      <div className='game-bg py-3'>
      <Container className='py-3 game-container'>
        <Row className='d-flex flex-row game-info'>
          <Col sm='4' md='4'>
            <img className='game-info--image' src='https://images.igdb.com/igdb/image/upload/t_cover_big/co1rbi.jpg' />
          </Col>
          <Col sm='8' md='8' className='game-info--data d-flex flex-column justify-content-between align-items-start'>
            <div className='game-info--description'>
              <h1 className='game-info--title'>Game Title Here</h1>
              <small className='text-muted'>Game studio here</small>
              <div className='my-3'>
                <Button className='' color='danger'>Follow</Button>
              </div>
              <div className='game-info--details'>
                <p><b>Genre: </b><span className='game-info--genre'>Genre here</span></p>
                <p><b>Platforms: </b><span className='game-info--genre'>Platforms here</span></p>
              </div>
              <p className='game-info--plot'>Plot Here</p>
            </div>
            <div className='game-info--stats d-flex justify-content-between align-items-center'>
              <div><p>Release Date: <span className='release-date'>date here</span></p></div>
              <div><p>Time to beat: <span className='beat-time'>normal time here</span></p></div>
              <div><p>Franchise: <span className='franchise'>franchise here</span></p></div>
            </div>
          </Col>
        </Row>
        <Screenshots />
      </Container>
      </div>
    )
}

export default GameDetails;
