import { NestFactory } from '@nestjs/core';

const appModulePath = process.env.APP_PATH;

const { AppModule } = require(`./${appModulePath}/app.module`);

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
