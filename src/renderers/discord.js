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
		requiresValue: false,
		process: (_input, _value, data) => data.guild.id
	},
	atuser: {
		requiresValue: false,
		process: (_input, _value, data) => `<@${data.user.id}>`
	},
	username: {
		requiresValue: false,
		process: (_input, _value, data) => data.user.username
	},
	usertag: {
		requiresValue: false,
		process: (_input, _value, data) => data.user.tag
	}
};
