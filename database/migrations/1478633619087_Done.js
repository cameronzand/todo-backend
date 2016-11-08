'use strict'

const Schema = use('Schema')

class DoneTableSchema extends Schema {

  up () {
    this.table('tasks', (table) => {
      table.boolean('Done')
    })
  }

  down () {
    this.table('tasks') 
    	table.dropColumn('Done')
  }

}

module.exports = DoneTableSchema
