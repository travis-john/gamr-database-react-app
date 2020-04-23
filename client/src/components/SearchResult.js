import React from 'react';
import {Col, Card, Media } from 'reactstrap';

const SearchResult = (props) => {

  return props.results.map(
    (result) => (
      <Col className='mb-3' sm='12'>
        <Media className='border-bottom py-2'>
          <Media left className='mr-3' href={`/games/${result.id}`}>
            <Media object src={result.cover.url} />
          </Media>
          <Media body>
            <Media heading>
              {result.name}
            </Media>
          {result.summary}
          </Media>
        </Media>
    </Col>
    )
  )
}

export default SearchResult;
