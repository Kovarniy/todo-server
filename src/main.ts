import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug'],
  });
  enableSwagger(app);
  enableCors(app);
  await app.listen(3000);
}

function enableSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle('todo server')
    .setDescription('example server')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
}

function enableCors(app) {
  app.enableCors({
    origin: function (origin, callback) {
      console.log('Origin:', origin);
      if (!origin || (origin && origin.includes('localhost'))) {
        console.log('allowed cors for:', origin);
        callback(null, true);
      } else {
        console.log('blocked cors for:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,PATCH,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });
}

bootstrap();
