import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

<<<<<<< HEAD
user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});
user.on('save', () => {
  console.log('Save was triggered');
});
=======
user.set({ name: 'bee' });
>>>>>>> develop

user.trigger('save');
