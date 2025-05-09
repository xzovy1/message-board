const fs = require('node:fs');
const path = require("node:path");
const express = require('express');
const newMessageRouter = require('./routes/newMessageRouter');
const indexRouter = require('./routes/indexRouter');

const app = express();