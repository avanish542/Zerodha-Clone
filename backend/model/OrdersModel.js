// const { model } = require("mongoose");

// const { OrdersModel, OrdersSchema } = require("../schemas/OrdersSchema");

// // const OrdersModel = new model("order", OrdersSchema);

// module.exports = { OrdersModel };

const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

// ✅ IMPORTANT: export DEFAULT (not object)
module.exports = mongoose.model("order", OrdersSchema);
