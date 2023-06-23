import { Injectable, OnModuleInit } from '@nestjs/common';
import {Page, content} from '../my-react/reactTest'
import { ReactElement } from 'react';
import createServer from 'next';
import { NextServer } from 'next/dist/server/next';
import { Request, Response } from 'express';

@Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello 오합지존!';
//   }
  // getPage(): ReactElement {
  //   return Page()
  // }
// Test: React.FC = () => {
//     return content
//     // return Page()
//   }
// }

// implements OnModuleInit
export class AppService {
  private server: NextServer;

  //constructor(private configService: ConfigService) {}

  async onModuleInit(): Promise<void> {
    try {
      this.server = createServer({
        //dev: this.configService.get<string>('NODE_ENV') !== 'production',
        dir: './my-react',
      });
      await this.server.prepare();
    } catch (error) {
      console.error(error);
    }
  }

  handler(req: Request, res: Response) {
    return this.server.getRequestHandler()(req, res);
  }
}