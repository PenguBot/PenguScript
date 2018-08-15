module.exports = {
	server: {
		requiresValue: false,
		process: (_input, _value, data) => data.guild.name
	},
	servercount: {
		requiresValue: false,
		process: (_input, _value, data) => data.guild.memberCount
	},
	serverid: {
		requiresValue: true,
		process: (_input, _value, data) => data.guild.id
	}
};
