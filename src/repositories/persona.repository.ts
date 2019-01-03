import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Persona } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.nombre
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Persona, dataSource);
  }
}
