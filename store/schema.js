import { schema } from 'normalizr';

export const circleSchema = new schema.Entity('circles', {}, { idAttribute: 'circleId' });
export const circleListSchema = new schema.Array(circleSchema);