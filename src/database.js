import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export  const  opendb= async function () {
   return await open({
      filename: './database.db',
      driver: sqlite3.Database
      
    })
};
