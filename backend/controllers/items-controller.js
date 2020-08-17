const fs = require("fs");
const uuid = require("uuid");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Item = require("../models/item");

const getItems = async (req, res, next) => {
  res.json({ message: "get items" });
};

const createItem = async (req, res, next) => {
  res.json({ message: "create item" });
};

const updateItem = async (req, res, next) => {
  res.json({ message: "update item" });
};

const deleteItem = async (req, res, next) => {
  res.json({ message: "delete item" });
};

exports.getItems = getItems;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;
