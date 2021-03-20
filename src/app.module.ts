import { Module }        from "@nestjs/common"
import {
    ConfigModule,
    ConfigService,
}                        from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AppController } from "./app.controller"
import { AppService }    from "./app.service"
import configs           from "./config"

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: configs,
            cache: true,
        }),

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => config.get("database"),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
