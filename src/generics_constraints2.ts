const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key];

let typescriptInfo = {
	name: 'TypeScript',
	skills: ['JS', 'TS'],
	level: 'hard',
};

getProperty(typescriptInfo, 'name');
