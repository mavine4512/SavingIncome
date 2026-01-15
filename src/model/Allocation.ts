// model/Allocation.js
import { Model } from '@nozbe/watermelondb';

// define the Model's fields (properties). Those correspond to table columns
import { date, field, readonly, } from '@nozbe/watermelondb/decorators';

export default class Allocation extends Model {
    // should match the table name in the schema.
  static table = 'allocations'

  @field('income') income!:number;
  @readonly @date('created_at') createdAt!: Date;
}