"use strict";

module.exports = function (sequelize, DataTypes) {
    let Session = sequelize.define(
        "session",
        {
            id: {
                primaryKey: true,
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            data: {
                type: DataTypes.JSON,
            },
        },
        {
            timestamps: true,
        }
    );
    Session.associate = function (models) {
        Session.belongsTo(models.user);
    };

    return Session;
};
