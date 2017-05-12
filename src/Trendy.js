import React from 'react';
import { gql, graphql } from 'react-apollo';

const Trendy = (props) => {

  console.log(props.data)

  return (
    <div>Trendy</div>
  )

};

const Query = gql`
  query SomeQuery {
    viewer {
      login
    }
  }
`;

export default graphql(Query)(Trendy);
