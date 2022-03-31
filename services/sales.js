const SaleModel = require('../models/sales');

const getById = async (id) => {
  try {
    const sale = await SaleModel.getById(id);
    return sale;
  } catch (error) {
  return { error: 404, message: 'Sale not found' };
  }
};

const create = async (sale) => {
  try {
    const created = await SaleModel.create(sale);
    return created;
  } catch (error) {
    return { error: 500, message: 'Server error' };
  }
};

module.exports = { getById, create };