import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
// 在Module的配置文件里配置对应的  controller  和  service
@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}