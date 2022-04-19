# create test user, first week of program
user = User.create!(
    full_name: 'Mike Lobman', 
    username: 'mlobman',
    password: 'admin',
    current_week: 1)

num = 1
phase = 1 
20.times do
    Week.create!(num: num, phase: phase)
    num = num + 1
    if num%4 == 1
        phase = phase + 1
    end
end

ExSet.create!([
    {
        week_id: 1,
        num: 1,
        reps: 5,
        percentage: 0.65
    },
    {
        week_id: 1,
        num: 2,
        reps: 5,
        percentage: 0.75
    },
    {
        week_id: 1,
        num: 3,
        reps: 5,
        percentage: 0.85
    }

])

MainEx.create!([
    {
        title: 'Bench Press',
        upper_lower: 'upper'
    },
    {
        title: 'Squat',
        upper_lower: 'lower'
    },
    {
        title: 'Deadlift',
        upper_lower: 'lower'
    },
    {
        title: 'Military Press',
        upper_lower: 'upper'
    }
])

Progression.create!([
    {
        main_ex_id: 1,
        user_id: 1,
        reps: 6,
        weight: 185,
        sets_completed: 0
    },
    {
        main_ex_id: 2,
        user_id: 1,
        reps: 4,
        weight: 275,
        sets_completed: 0
    },
    {
        main_ex_id: 3,
        user_id: 1,
        reps: 4,
        weight: 275,
        sets_completed: 0
    },
    {
        main_ex_id: 4,
        user_id: 1,
        reps: 4,
        weight: 115,
        sets_completed: 0
    }
])