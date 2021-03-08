const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const TEST_DB_NAME = 'test_db'
const SQL_BEGIN_TRANSACTION = 'BEGIN'
const SQL_COMMIT_TRANSACTION = 'COMMIT'
const SQL_ROLLBACK_TRANSACTION = 'ROLLBACK'
const SQL_CREATE_TEST_TABLE = "CREATE TABLE Testi (x INTEGER UNIQUE)"
const SQL_QUERY_MAX_VALUE_X = 'SELECT MAX(x) AS max FROM Testi'
const SQL_INSERT_NEW_MAX = "INSERT INTO Testi VALUES (?)"

const addNumbersToTableAsync = async (testUsername) => {
  const db = await open({ filename: TEST_DB_NAME, driver: sqlite3.Database })
  let wasSuccess = false;
  let tries = 0;

  while (!wasSuccess && tries < 100) {
    try {
      await db.run(SQL_BEGIN_TRANSACTION)
    
      for (let i = 0; i < 5000; i++) {
        const result = await db.get(SQL_QUERY_MAX_VALUE_X)
        const newMax = result.max + 1
    
        await db.run(SQL_INSERT_NEW_MAX, result.max + 1)
        console.log(`New max value ${newMax} added by ${testUsername}.`)
      }

      await db.run(SQL_COMMIT_TRANSACTION)

      wasSuccess = true
    } catch (error) {
      tries++
      await db.run(SQL_ROLLBACK_TRANSACTION)
      console.log(`Transaction from ${testUsername} failed. Trying again...`)
    }
  }
  
  await db.close()
}

const runTestAsync = async () => {
  const db = await open({ filename: TEST_DB_NAME, driver: sqlite3.Database })
  
  await db.run(SQL_CREATE_TEST_TABLE)
  await db.close()
  
  const sqlMaija = addNumbersToTableAsync('Maija')
  const sqlPekka = addNumbersToTableAsync('Pekka')
  
  await Promise.all(sqlMaija, sqlPekka);
}

const runTestsAsync = async () => {
  try {
    await runTestAsync()
  } catch (error) {
    console.trace(error)
  }
}

runTestsAsync()