import { Controller, Get, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  public async showHome(@Req() req: Request, @Res() res: Response) {
    await this.appService.handler(req, res);
  }
  
}
