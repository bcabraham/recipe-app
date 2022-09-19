'use strict';

const express = require('express');
const { Sequelize } = require('sequelize');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';


async function main() {
  const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@db:5432/${process.env.POSTGRES_NAME}`)

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  // App
  const app = express();
  app.get('/', (req, res) => {
    res.send('<h2>Hello World</h2>');
  });

  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
}

main()
