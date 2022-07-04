"use strict";

import Sequelize from "sequelize";
import collection from "./collection.js";
import collectionEntity from "./collection_entity.js";
import collectionUser from "./collection_user.js";
import entity from "./entity.js";
import entityProperties from "./entity_properties.js";
import property from "./property.js";
import user from "./user.js";
import template from "./template.js";
import session from "./session.js";
import userEntity from "./user_entity.js";
import profile from "./profile.js";
const modules = [
    collection,
    collectionEntity,
    collectionUser,
    entity,
    entityProperties,
    property,
    user,
    template,
    session,
    userEntity,
    profile,
];

const models = {};

let config = {
    db: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
        database: process.env.DB_DATABASE,
        logging: false,
    },
    pool: {
        max: 20,
        min: 10,
        acquire: 30000,
        idle: 10000,
    },
};

let sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db
);

// Initialize models
modules.forEach((module) => {
    const model = module(sequelize, Sequelize, config);
    models[model.name] = model;
});

// Apply associations
Object.keys(models).forEach((key) => {
    if ("associate" in models[key]) {
        models[key].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
