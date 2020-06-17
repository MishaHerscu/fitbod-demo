# Example data
User.create({email: 'user1@fitbod.me'})
User.create({email: 'user2@fitbod.me'})
User.create({email: 'user3@fitbod.me'})
User.create({email: 'user4@fitbod.me'})
User.create({email: 'user5@fitbod.me'})
User.create({email: 'user6@fitbod.me'})

Workout.create({user_id: 1, duration: 10,  date: Time.now})
Workout.create({user_id: 1, duration: 20,  date: Time.now})
Workout.create({user_id: 2, duration: 30,  date: Time.now})
