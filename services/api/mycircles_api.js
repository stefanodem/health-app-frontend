import { healthCardSections } from '../../testData/testUser2';

//TODO: Hook up to backend
export const fetchHealthCards = (uid) => {
  return new Promise(resolve => setTimeout(() => resolve(healthCardSections), 1000));
}