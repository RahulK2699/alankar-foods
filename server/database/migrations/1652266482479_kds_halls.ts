import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Kds extends BaseSchema {
  protected tableName = 'kds'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('hall')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('hall')
    })
  }
}
