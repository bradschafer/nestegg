import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { WinstonLoggerService } from 'common/services/winstonlogger.service';
import { WebAppModule } from 'webapp.module';
import { ConfigService } from 'common/services/config.service';
import * as cors from 'cors';

async function bootstrap() {

  const fs = require('fs');

  const app = await NestFactory.create(WebAppModule, {
    logger: new WinstonLoggerService(new ConfigService()),
  });

  /*
  * This adds the capability to have swagger api added to the application for openAPI documentation
  * https://docs.nestjs.com/recipes/swagger
  */
  const options = new DocumentBuilder()
    .setTitle('App example')
    .setDescription('The API description.')
    .setVersion('1.0')
    .addTag('app')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // uncomment to write out swagger, might cause a loop w/ nodemon.
  // fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));

  SwaggerModule.setup('/api/docs/', app, document);

  /*
  *  This allows for CORS requests - If you don't plan to allows CORS then likely comment this out.
  */
  app.use(cors());

  /*
  *  This starts to listen for HTTP requests
  */
  await app.listen(3000);
}
bootstrap();
