exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
      tbl.string('torque', 64);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
      tbl.dropColumn('torque');
    });
  };
