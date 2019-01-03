import { Entity, model, property } from '@loopback/repository';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  pass: string;

  @property({
    type: 'string',
    required: true,
  })
  rol: string;

  @property({
    type: 'number',
    required: true,
  })
  puntos: number;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}
