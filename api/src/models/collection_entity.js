"use strict";

export default function (sequelize, DataTypes) {
    var CollectionEntity = sequelize.define(
        "collection_entity",
        {},
        {
            timestamps: false,
        }
    );

    return CollectionEntity;
}
