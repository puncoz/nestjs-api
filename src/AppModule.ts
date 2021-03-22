import { Module }        from "@nestjs/common"
import {
    ConfigModule,
    ConfigService,
}                        from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AppController } from "./AppController"
import { AppService }    from "./AppService"
import configs           from "./Config"
import { PostsModule }   from "./Domain/Posts/PostsModule"

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

        PostsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
