import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

  test(): string {   // test   名字和 test.controller.ts 调用的地方要对应上
    return 'test test test!';   //具体的逻辑处理这里做
  }

  findOneTest(): string {
    return 'findOneTest!';
  }

  findTowTest():string{
    return 'post';
  }
}