# SQL Functions Kit

![npm](https://img.shields.io/npm/v/sql-functions-kit.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/sql-functions-kit.svg)
![npm](https://img.shields.io/npm/dt/sql-functions-kit.svg)
![GitHub](https://img.shields.io/github/license/your-username/sql-functions-kit.svg)

A versatile and lightweight npm package providing essential SQL functions for Node.js applications.

## Installation

```bash
npm install sql-functions-kit
```

### Usage

```javascript
// Your JavaScript code here

const sqlFunctionsKit = require('sql-functions-kit');

// Example: Connecting to the database
const dbConfig = {
  host: 'your-host',
  user: 'your-user',
  password: 'your-password',
  database: 'your-database',
};

const connection = sqlFunctionsKit.connect(dbConfig);

// Example: Inserting a row
const insertId = sqlFunctionsKit.insert('INSERT INTO your_table (column1, column2) VALUES (?, ?)', [value1, value2]);
console.log('Inserted row ID:', insertId);

// Example: Selecting one row
const singleRow = sqlFunctionsKit.selectOne('SELECT * FROM your_table WHERE id = ?', [someId]);
console.log('Selected Row:', singleRow);

// Example: Selecting all rows
const allRows = sqlFunctionsKit.selectAll('SELECT * FROM your_table');
console.log('All Rows:', allRows);

// Example: Updating a row
const affectedRows = sqlFunctionsKit.update('UPDATE your_table SET column1 = ? WHERE id = ?', [newValue, someId]);
console.log('Affected Rows:', affectedRows);

// Example: Removing a row
const deletedRows = sqlFunctionsKit.remove('DELETE FROM your_table WHERE id = ?', [someId]);
console.log('Deleted Rows:', deletedRows);

// Close the connection when done
sqlFunctionsKit.closeConnection(connection);
```

### API

`connect(config: object): Connection`
Connects to the MySQL database using the provided configuration.

`insert(statement: string, parameters: array): number`
Inserts a row into the database and returns the last insert ID.

`selectOne(statement: string, parameters: array): object`
Selects one row from the database based on the provided statement and parameters.

`selectAll(statement: string, parameters: array): array`
Selects all rows from the database based on the provided statement and parameters.

`update(statement: string, parameters: array): number`
Updates rows in the database based on the provided statement and parameters.

`remove(statement: string, parameters: array): number`
Removes rows from the database based on the provided statement and parameters.

`closeConnection(connection: Connection): void`
Closes the database connection.

Contributing
If you want to contribute to this project, please follow our contribution guidelines.

License
This project is licensed under the MIT License.