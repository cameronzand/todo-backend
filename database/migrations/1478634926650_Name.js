'use strict'

const Schema = use('Schema')

class NameTableSchema extends Schema {

  up () {
    this.table('ToDo', (table) => {
      table.integer('User_Id')
      table.string("Name")
      table.dropColumn('updated_at')
    })
  }

  down () {
     this.table('ToDo', (table) => {
      table.dropColumn('Name')
      table.dropColumn('User_Id')
      table.date('updated_at')
    })

  }

}

module.exports = NameTableSchema
