const DB = require("../../config/Database");

const GetAllItemsAccToItemId = (req, res) => {
  const { id } = req.params;
  //   console.log(id);

  if (id) {
    let id_catergory = id.split("-");
    console.log(id_catergory[0]);
    if (id_catergory[0] === "RAW") {
      const sql = `SELECT 
            raw_item.raw_item_unit_price AS item_price,
            raw_item.raw_item_name AS item_name,
            inventory_store_raw_items.raw_item_shadow_qty AS available_qty,
            inventory_store_raw_items.raw_item_measure_unit AS measure_unit,
            inventory_store_raw_items.raw_item_store_id AS store_id,
            inventory_store_raw_items.raw_item_location_id AS store_location,
            inventory_store_raw_items.raw_item_released_date AS item_released_date,
            inventory_store_raw_items.raw_item_inventory_id AS item_id
        FROM inventory_store_raw_items
        INNER JOIN raw_item ON inventory_store_raw_items.raw_item_id = raw_item.raw_item_id
        WHERE inventory_store_raw_items.raw_item_id = '${id}' 
            AND inventory_store_raw_items.inventory_raw_item_status = 'RELEASED' 
            AND raw_item.raw_status = 'ACTIVE';
        `;
      DB.connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result) {
          res.status(200).send(result);
          console.log(result);
        } else {
          res.status(500);
        }
      });
    } else if (id_catergory[0] === "NRAW") {
      const sql = `SELECT 
            non_raw_item_unit_price AS item_price,
            non_raw_item_name AS item_name,
            non_raw_shadow_qty AS available_qty,
            non_raw_measure_unit AS measure_unit,
            non_raw_store_id AS store_id,
            non_raw_location_id AS store_location,
            non_raw_released_date AS item_released_date,
            non_raw_inventory_item_id AS item_id
            FROM inventory_store_non_raw
            WHERE non_raw_item_id = '${id}'
            AND non_raw_item_status = 'RELEASED'
            
            `;

      DB.connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result) {
          res.status(200).send(result);
          console.log(result);
        } else {
          res.status(500);
        }
      });
    } else if (id_catergory[0] === "PRODUCT") {
      const sql = `SELECT
      inventory_store_products.product_unit_price AS item_price,
            product.product_name AS item_name,
            inventory_store_products.product_shadow_qty AS available_qty,
            inventory_store_products.product_measure_unit AS measure_unit,
            inventory_store_products.product_store_id AS store_id,
            inventory_store_products.product_location_id AS store_location,
            inventory_store_products.product_released_date AS item_released_date,
            inventory_store_products.inventory_product_id AS item_id
            FROM inventory_store_products 
            INNER JOIN product ON inventory_store_products.product_id = product.product_id
            
            WHERE inventory_store_products.product_id = '${id}' 
            AND inventory_store_products.inventory_product_status = 'RELEASED'
            AND product.product_status ='ACTIVE'`;
      DB.connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result) {
          res.status(200).send(result);
          console.log(result);
        } else {
          res.status(500);
        }
      });
    }
  }
};

module.exports = GetAllItemsAccToItemId;
