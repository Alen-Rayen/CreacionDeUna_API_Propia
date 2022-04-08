module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor_movie';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        actor_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        movie_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
    };
    let config = {
        tableName: 'actor_movie',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const ActorMovie = sequelize.define(alias, cols, config); 

    return ActorMovie
};