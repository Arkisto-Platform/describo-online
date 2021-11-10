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
            token: {
                type: DataTypes.TEXT,
            },
            expiry: {
                type: DataTypes.DATE,
            },
            data: {
                type: DataTypes.JSON,
            },
            creator: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: true,
            indexes: [
                {
                    fields: ["token"],
                },
            ],
        }
    );
    Session.associate = function (models) {
        Session.belongsTo(models.user);
    };

    return Session;
};
