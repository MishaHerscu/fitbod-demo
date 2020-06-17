# Example data
User.create({first_name: 'Alex', last_name: 'Jones', email: 'alex@fitbod.me'})
User.create({first_name: 'Beth', last_name: 'Jones', email: 'beth@fitbod.me'})
User.create({first_name: 'Charlie', last_name: 'Jones', email: 'charlie@fitbod.me'})
User.create({first_name: 'Desmond', last_name: 'Jones', email: 'desmond@fitbod.me'})
User.create({first_name: 'Eve', last_name: 'Jones', email: 'eve@fitbod.me'})
User.create({first_name: 'Fred', last_name: 'Jones', email: 'fred@fitbod.me'})

Workout.create({user_id: 1, duration: 10,  date: Time.now})
Workout.create({user_id: 1, duration: 20,  date: Time.now})
Workout.create({user_id: 2, duration: 30,  date: Time.now})
