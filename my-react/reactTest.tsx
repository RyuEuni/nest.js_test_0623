import React from 'react';
import { NextPage } from 'next';

const content =
    `<div style={display: 'flex', justifyContent: 'center'}>
      <h1>Project B</h1>
      <div>Hello World~!~!~!</div>
    </div>`

const Page: React.FC = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <h1>Project B</h1>
      <div>Hi, 오합지존</div>
    </div>
  )
}

const Home: NextPage = () => {
  return <h1>Hello from NextJS! - Home</h1>;
};

export {Page, content, Home}