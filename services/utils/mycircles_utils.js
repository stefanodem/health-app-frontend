// import { setting1, setting2, setting3 } from 'config/constants'

export const isInCircle = (entity, circle) => {
  for (let i = 0; i < circle.length; i++) {
    if (entity.entityId === circle[i].entityId) {
      return true;
    }
  }
  return false;
}