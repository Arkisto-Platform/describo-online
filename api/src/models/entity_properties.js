"use strict";

export default function (sequelize, DataTypes) {
    var EntityProperties = sequelize.define(
        "entity_properties",
        {},
        {
            timestamps: false,
        }
    );

    return EntityProperties;
}
