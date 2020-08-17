const fs = require("fs");
const uuid = require("uuid");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Item = require("../models/item");

const getItems = async (req, res, next) => {
  let items;
  try {
    items = await Item.find({});
  } catch (e) {
    const err = new HttpError("Fetching items failed, try again later.", 500);
    return next(err);
  }
  res.json({ items: items.map((item) => item.toObject({ getters: true })) });
};

const createItem = async (req, res, next) => {
  // const errs = validationResult(req)

  // if (!errs.isEmpty()) {
  // console.log(errs);
  // return next(new HttpError("Invalid inputs!"));
  // }
  const { title, description, price } = req.body;

  const newItem = new Item({
    title,
    description,
    price,
    // image: req.file.path,
  });
  console.log(newItem);

  try {
    await newItem.save();
  } catch (e) {
    console.log(e);
    const err = new HttpError("Creating item failed, try again.", 500);
    return next(err);
  }
  res.status(201).json({ item: newItem, message: "Item created!" });
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
