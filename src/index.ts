import { ConfigService } from "@nestjs/config"
import { NestFactory }   from "@nestjs/core"
import { AppModule }     from "./AppModule"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = app.get(ConfigService)

    await app.listen(config.get("app.port"))
    console.log(`Application is running on: ${await app.getUrl()}`)
}

bootstrap().then()
