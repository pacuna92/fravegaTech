import { generateUniqueEmail } from '../../utils/emailGenerator';

  export const userData = {
    name: 'Test',
    gender: 'male',
    email: generateUniqueEmail(),
    status: 'active',
    
  };