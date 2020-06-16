# Example data
User.create({email_address: 'user1@fitbod.me'})
User.create({email_address: 'user2@fitbod.me'})
User.create({email_address: 'user3@fitbod.me'})
User.create({email_address: 'user4@fitbod.me'})
User.create({email_address: 'user5@fitbod.me'})
User.create({email_address: 'user6@fitbod.me'})

Workout.create({user_id: 1, duration: 10,  date: Time.now})
Workout.create({user_id: 1, duration: 20,  date: Time.now})
Workout.create({user_id: 2, duration: 30,  date: Time.now})
