'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Assuntos',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      nome:{
        type:Sequelize.STRING,
        allowNull:false
      },
      votos1:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      voto2:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      idUserArray:{
        type:Sequelize.STRING,
        allowNull:false
      },
      userForeignKey:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Assuntos');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
