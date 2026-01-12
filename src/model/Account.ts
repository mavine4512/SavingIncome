// model/Account.js
import { Model } from '@nozbe/watermelondb';

// define the Model's fields (properties). Those correspond to table columns
import { field, text } from '@nozbe/watermelondb/decorators';

export default class Account extends Model {
    // should match the table name in the schema.
  static table = 'accounts'

  @text('name') name:string;
  @field('cap') cap:number;
  @field('tap') tap:number;
}