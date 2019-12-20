import { Get, Controller, Post, HttpCode, Body } from '@nestjs/common';
import { TestService } from './test.service'; // 引用service文件
import { CreateCatDto } from 'test/create-cat-dto';

@Controller('test') //  /test/ 路径
export class TestController {
  constructor(private readonly testService: TestService) {} //

  @Get() //   /test/ 路径
  firstTest(): string {
    return this.testService.test();
  }

  @Get(':id') //   /test/1  等等路径
  findOneTest(): string {
    return this.testService.findOneTest();
  }
  @Post('/add')
  @HttpCode(200)
  findTowTest(@Body() createCatDto: CreateCatDto): string {
    return `接受到的createCatDto的数据name:${createCatDto.name}&age:${createCatDto.age}`;
  }
}
