const config = {
	lowerCase: "qwertyuiopasdfghjklzxcvbnm",
	upperCase: "QWERTYUIOPASDFGHJKLZXCVBNM",
	numbers: "0123456789",
	symbols: "~!@#$%^&*()_-+|/;:",
};

export const getRandomPassword = ({length, settings}) => {
	let passwordData = "";
	Object.entries(settings).forEach(([setting, isInclude]) => {
		if (isInclude) {
			passwordData += config[setting];
		}
	});
	
	let password = "";
	for (let i = 0; i < length; i++) {
		const randomChar = passwordData[Math.floor(Math.random() * passwordData.length)];
		password += randomChar;
	}
	
	return password;
};