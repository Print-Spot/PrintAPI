// TODO:
// ? use prisma (https://docs.nestjs.com/recipes/prisma)
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

const helmetConfig = {
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: {
    directives: {
      imgSrc: [`'self'`, 'data:', 'apollo-server-landing-page.cdn.apollographql.com'],
      scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      manifestSrc: [`'self'`, 'apollo-server-landing-page.cdn.apollographql.com'],
      frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
    },
  },
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  // app.enableCors();
  await app.listen(3000);
}
bootstrap();
