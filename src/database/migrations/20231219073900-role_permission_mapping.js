'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('role_permission_mapping', {
			role_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			permission_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			module: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			actions: {
				allowNull: false,
				type: Sequelize.ARRAY(Sequelize.STRING),
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('role_permission_mapping')
	},
}
