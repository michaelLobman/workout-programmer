# create test user, first week of program
4.times do
    Week.create!()
end


user = User.create!(
    full_name: 'Mike Lobman', 
    email: 'michael.lobman@gmail.com',
    password: 'admin'
)



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
        baseline_max: 310,
        current_max: 335,
    },
    {
        main_ex_id: 2,
        user_id: 1,
        baseline_max: 220,
        current_max: 240
    },
    {
        main_ex_id: 3,
        user_id: 1,
        baseline_max: 285,
        current_max: 285
    },
    {
        main_ex_id: 4,
        user_id: 1,
        baseline_max: 130,
        current_max: 140
    }
])

AccessoryEx.create!([
    {
        main_ex_id: 1,
        title: "Good Mornings",
        sets: 5,
        reps: 10
    },
    {
        main_ex_id: 1,
        title: "Lunges",
        sets: 5,
        reps: 15
    },
    {
        main_ex_id: 1,
        title: "Calf Raises",
        sets: 5,
        reps: 20
    },
    {
        main_ex_id: 2,
        title: "Pushups",
        sets: 5,
        reps: 20,
    },
    {
        main_ex_id: 2,
        title: "Seated Cable Row",
        sets: 5,
        reps: 10
    },
    {
        main_ex_id: 2,
        title: "Dips",
        sets: 5,
        reps: 15
    },
    {
        main_ex_id: 3,
        title: "Single Leg RDL",
        sets: 5,
        reps: 10
    },
    {
        main_ex_id: 3,
        title: "Leg Press",
        sets: 5,
        reps: 12
    },
    {
        main_ex_id: 3,
        title: "Box Jumps",
        sets: 5,
        reps: 10
    },
    {
        main_ex_id: 4,
        title: "DB Military Press",
        sets: 5,
        reps: 15
    },
    {
        main_ex_id: 4,
        title: "T-Bar Row",
        sets: 5,
        reps: 10
    },
    {
        main_ex_id: 4,
        title: "DB Curls",
        sets: 5,
        reps: 12
    }
])