import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { join } from "path";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.HOSTPORT || 3000;
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle("Dev Finance API")
        .setDescription("Um site para gerenciar sua vida financeira")
        .setVersion("0.0.3")
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);
    app.setBaseViewsDir(join(__dirname, "..", "views"));
    app.setViewEngine("hbs");

    await app.listen(port);

    console.log(
        `Application is running on: ${await app.getUrl()} or http://localhost:${port}`,
    );
}
bootstrap();
