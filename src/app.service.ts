import { Injectable } from '@nestjs/common';
import React from 'react';
import Content from '../reactTest'

@Injectable()
export class AppService {
//   getHello(): string {
//     return 'Hello 오합지존!';
//   }
Page: React.FC = () => {
    // return Content
    return (
      `<div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>Project B</h1>
        <div>Hi, 오합지존</div>
      </div>`
    )
  }
}