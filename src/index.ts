import { User } from './models/User';

const user = new User({ name: 'John', age: 30 });

user.save();
