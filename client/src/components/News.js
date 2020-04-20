import React from 'react';
import {Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap';
import api from '../utils/api';

const News = (props) => {

  const [ news, setNews ] = useState([]);

  async function fetchNews(){
    const res = await api.recentNews();

    setNews(res.data);
  }

  return(
    <div className='news-bg py-3'>
      <Container>
      <Row>
      <h2 className='border-bottom-white text-white mb-3'>News</h2>
      </Row>
        <Row>
          <Col className='mb-2' sm='12' md='4'>
            <Card inverse>
              <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
              </Card>
          </Col>
          <Col className='mb-2' sm='12' md='4'>
          <Card inverse>
            <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>Card Title</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardImgOverlay>
          </Card>
          </Col>
          <Col className='mb-2' sm='12' md='4'>
            <Card inverse>
              <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className='mb-2' sm='12' md='8'>
            <Card inverse>
              <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col className='mb-2' sm='12' md='4'>
            <Row>
              <Col className='mb-2' sm='12'>
                <Card inverse>
                  <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
                  <CardImgOverlay>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
              <Col className='mb-2' sm='12'>
                <Card inverse>
                <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className='mb-2' sm='12' md='6'>
        <Card inverse>
          <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
          <CardImgOverlay>
            <CardTitle>Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </Col>
      <Col className='mb-2' sm='12' md='6'>
        <Card inverse>
          <CardImg width="100%" src="https://via.placeholder.com/555x312.jpg" alt="Card image cap" />
          <CardImgOverlay>
            <CardTitle>Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </Col>
    </Row>
  </Container>
  </div>
  )

}

export default News;