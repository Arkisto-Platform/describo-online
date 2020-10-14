"use strict";

module.exports = function (sequelize, DataTypes) {
    let Entity = sequelize.define(
        "entity",
        {
            id: {
                primaryKey: true,
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            eid: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            etype: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "",
            },
            locked: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            timestamps: true,
            indexes: [
                {
                    fields: ["collectionId", "etype"],
                },
                {
                    unique: true,
                    fields: ["collectionId", "eid"],
                },
                {
                    fields: ["collectionId", "name"],
                },
            ],
        }
    );
    Entity.associate = function (models) {
        Entity.hasMany(models.property, {
            onDelete: "CASCADE",
            foreignKey: { allowNull: false },
        });
        Entity.belongsTo(models.collection);
    };

    return Entity;
};
