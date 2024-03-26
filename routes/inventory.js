const express = require('express');

const SearchInventoryAccToItemNameAndInventoryStatusAndShadowQty = require('./../controllers/inventory/searchInventoryAccToItemNameAndInventoryStatusAndShadowQty')
const InventoryAccToInventoryBatchId = require('./../controllers/inventory/inventoryAccToInventoryBatchId')
const SearchInventoryAccToItemNameAndInventoryStatusAndShadowAndBranch = require('./../controllers/inventory/searchInventoryAccToItemNameAndInventoryStatusAndShadowAndBranch')
const SearchInventoryAccToItemAndShadowAndBranch = require('./../controllers/inventory/searchInventoryAccToItemAndShadowAndBranch')
const InventoryAccToShadowAndBranchAndStatusAndSellStatus = require('./../controllers/inventory/inventoryAccToShadowAndBranchAndStatusAndsellStatus')

const router = express.Router();

router.get('/searchInventory/ItemName/InventoryStatus/ShadowQty/:name/:status', SearchInventoryAccToItemNameAndInventoryStatusAndShadowQty);
router.get('/searchInventory/ItemName/InventoryStatus/ShadowQty/Branch/:name/:status/:branch', SearchInventoryAccToItemNameAndInventoryStatusAndShadowAndBranch);
router.get('/inventory/InventoryBatchId/:id', InventoryAccToInventoryBatchId);
router.get('/searchInventory/ItemName/ShadowQty/Branch/:name/:branch', SearchInventoryAccToItemAndShadowAndBranch);

router.get('/inventory/Shadow/Branch/Status/SellStatus/:branch/:status/:sellStatus', InventoryAccToShadowAndBranchAndStatusAndSellStatus);



module.exports = router;