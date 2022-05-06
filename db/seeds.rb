# create test user, first week of program
4.times do
    Week.create!()
end


user = User.create!(
    full_name: 'Mike Lobman', 
    username: 'mlobman',
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
        current_max: 310,

    },
    {
        main_ex_id: 2,
        user_id: 1,
        baseline_max: 220,
        current_max: 220
    },
    {
        main_ex_id: 3,
        user_id: 1,
        baseline_max: 320,
        current_max: 320
    },
    {
        main_ex_id: 4,
        user_id: 1,
        baseline_max: 130,
        current_max: 130
    }
])

AsstExes.create!([
    {
        main_ex_id: 1,
        title: "Good Mornings"
        sets: 5,
        reps: 10
    },
    {
        main_ex_id: 1,
        title: "Lunges",
        sets: 5,
        reps: 15,
    }
    {
        main_ex_id: 1,
        title: "Planks",
        sets: 5,
        reps: 60
    }
])

t.integer "main_ex_id"
t.string "title"
t.string "upper_lower"