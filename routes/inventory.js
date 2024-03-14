const express = require('express');

const SearchInventoryAccToItemNameAndInventoryStatusAndShadowQty = require('./../controllers/inventory/searchInventoryAccToItemNameAndInventoryStatusAndShadowQty')
const InventoryAccToInventoryBatchId = require('./../controllers/inventory/inventoryAccToInventoryBatchId')

const router = express.Router();

router.get('/searchInventory/ItemName/InventoryStatus/ShadowQty/:name/:status', SearchInventoryAccToItemNameAndInventoryStatusAndShadowQty);
router.get('/inventory/InventoryBatchId/:id', InventoryAccToInventoryBatchId);

module.exports = router;