/* eslint-disable prettier/prettier */
import { Menu } from 'src/menu/menu.entity';
import { Type } from 'src/types/type.entity';
import { User } from 'src/users/user.entity';
import { config } from "dotenv";
import { DataSource, DataSourceOptions } from 'typeorm';

/* eslint-disable prettier/prettier */
config({ path: '.env' });

// data source options
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [User, Menu, Type],
     synchronize: true,
    migrations: ["dist/db/migrations/*.js"]
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;