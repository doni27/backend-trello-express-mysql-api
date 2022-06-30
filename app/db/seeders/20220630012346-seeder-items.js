"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Items",
			[
				{
					name: "membuat migration",
					TodoId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "membuta sedder",
					TodoId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Items", null, {});
	},
};
