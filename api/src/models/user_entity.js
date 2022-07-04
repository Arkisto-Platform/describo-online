"use strict";

export default function (sequelize, DataTypes) {
    var UserEntity = sequelize.define(
        "user_entity",
        {},
        {
            timestamps: false,
        }
    );

    return UserEntity;
}
