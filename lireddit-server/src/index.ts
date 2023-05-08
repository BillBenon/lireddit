import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
    const orm = MikroORM.init({
        entities: [Post],
        dbName: 'lireddit',
        user: 'postgres',
        password: 'password@2001',
        type: 'postgresql',
        debug: !__prod__,
    });

    const post = (await orm).em.create(Post, {
        title: 'My first psot',
        createdAt: "",
        updatedAt: ""
    });
    (await orm).em.persistAndFlush(post);
    console.log(post);
};

main().catch(err => {
    console.error(err);
})


console.log("hello there");