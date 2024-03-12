import { User } from "./models/user";

export const USERS: User[] = [
  { 
    id: 1, 
    name: { 
      first_name: 'John', 
      second_name: 'Doe', 
      last_name: 'Smith' 
    }, 
    email: 'john.doe@example.com', 
    phone_number: 123456789, 
    gender: 'male' 
  },
  { 
    id: 2, 
    name: { 
      first_name: 'Jane', 
      second_name: 'Ann', 
      last_name: 'Johnson' 
    }, 
    email: 'jane.johnson@example.com', 
    phone_number: 987654321, 
    gender: 'female' 
  },
  { 
    id: 3, 
    name: { 
      first_name: 'Michael', 
      second_name: 'David', 
      last_name: 'Williams' 
    }, 
    email: 'michael.williams@example.com', 
    phone_number: 456789123, 
    gender: 'male' 
  },
  { 
    id: 4, 
    name: { 
      first_name: 'Emily', 
      second_name: 'Grace', 
      last_name: 'Brown' 
    }, 
    email: 'emily.brown@example.com', 
    phone_number: 654321987, 
    gender: 'female' 
  },
  { 
    id: 5, 
    name: { 
      first_name: 'Daniel', 
      second_name: 'Patrick', 
      last_name: 'Taylor' 
    }, 
    email: 'daniel.taylor@example.com', 
    phone_number: 789456123, 
    gender: 'male' 
  }
];