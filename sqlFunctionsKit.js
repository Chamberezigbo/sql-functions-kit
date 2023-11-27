const mysql = require("mysql2/promise");

let connection;

async function connect(dbConfig) {
	connection = await mysql.createConnection(dbConfig);
}

async function executeStatement(statement, parameters) {
	try {
		const [rows] = await connection.execute(statement, parameters);
		return rows;
	} catch (error) {
		throw new Error(error.message);
	}
}

async function insert(statement, parameters) {
	try {
		await executeStatement(statement, parameters);
		const [result] = await connection.query(
			"SELECT LAST_INSERT_ID() as insertId"
		);
		return result[0].insertId;
	} catch (error) {
		throw new Error(error.message);
	}
}

async function selectOne(statement, parameters) {
	try {
		const [row] = await executeStatement(statement, parameters);
		return row;
	} catch (error) {
		throw new Error(error.message);
	}
}

async function selectAll(statement, parameters) {
	try {
		const rows = await executeStatement(statement, parameters);
		return rows;
	} catch (error) {
		throw new Error(error.message);
	}
}

async function update(statement, parameters) {
	try {
		const result = await executeStatement(statement, parameters);
		return result.affectedRows;
	} catch (error) {
		throw new Error(error.message);
	}
}

async function remove(statement, parameters) {
	try {
		const result = await executeStatement(statement, parameters);
		return result.affectedRows;
	} catch (error) {
		throw new Error(error.message);
	}
}

module.exports = {
	connect,
	insert,
	selectOne,
	selectAll,
	update,
	remove,
};
