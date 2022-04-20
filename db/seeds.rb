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
    },
    {
        week_id: 2,
        num: 1,
        reps: 3,
        percentage: 0.70
    },
    {
        week_id: 2,
        num: 2,
        reps: 3,
        percentage: 0.80
    },
    {
        week_id: 2,
        num: 3,
        reps: 3,
        percentage: 0.90
    },
    {
        week_id: 3,
        num: 1,
        reps: 5,
        percentage: 0.75
    },
    {
        week_id: 3,
        num: 2,
        reps: 3,
        percentage: 0.85
    },
    {
        week_id: 3,
        num: 3,
        reps: 1,
        percentage: 0.95
    },
    {
        week_id: 4,
        num: 1,
        reps: 5,
        percentage: 0.40
    },
    {
        week_id: 4,
        num: 2,
        reps: 5,
        percentage: 0.50
    },
    {
        week_id: 4,
        num: 3,
        reps: 5,
        percentage: 0.60
    }
    

])

MainEx.create!([
    {
        title: 'Squat',
        upper_lower: 'lower'
    },
    {
        title: 'Bench Press',
        upper_lower: 'upper'
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
        reps: 4,
        weight: 275,
    },
    {
        main_ex_id: 2,
        user_id: 1,
        reps: 6,
        weight: 185,
    },
    {
        main_ex_id: 3,
        user_id: 1,
        reps: 4,
        weight: 275,
    },
    {
        main_ex_id: 4,
        user_id: 1,
        reps: 4,
        weight: 115,
    }
])