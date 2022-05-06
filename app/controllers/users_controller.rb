class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        params[:exercises].each do |exercise|
            # binding.break
            ex_id = MainEx.find(exercise[:id]).id
            max = max(exercise[:weight], exercise[:reps])
            # add in current max as max - have to make sure this doesn't mess the stats...
            user.progressions.create!(main_ex_id: ex_id, baseline_max: max, current_max: max)
        end
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def next_week
        user = find_user
        reset_progressions(user)

        new_week = user.week_id == 4 ? 1 : user.week_id + 1
        # combined two updates into one line of code
        user.update!(week_id: new_week, current_week: user.current_week + 1)
        user.update!(phase: user.phase + 1) unless user.current_week % 4 != 1

        render json: user
    end

    def previous_week
        user = find_user
        reset_progressions(user)
        new_week = user.week_id == 1 ? 4 : user.week_id - 1
        new_phase = new_week == 4 ? user.phase - 1 : user.phase
        user.update!(week_id: new_week, current_week: user.current_week - 1, phase: new_phase)

        render json: user
    end

    def restart
        user = find_user
        reset_progressions(user)
        user.update!(week_id: 1, current_week: 1)
        user.progressions.each do |progression|
            progression.update!(baseline_max: progression.current_max)
        end

        render json: user

    end

    

    def show
        user = find_user
        render json: user
    end


    private

    # do i need week_id here? I don't think so...

    def user_params
        params.permit(:email, :password, :full_name)
    end

    def find_user
        User.find(session[:user_id])
    end

    def reset_progressions(user)
        user.progressions.each{ |progression| progression.update!(sets_completed: false) }
    end

    # def max (weight, reps)
    #     nearest_five(weight * reps * 0.0333 + weight)
    # end

    # def nearest_five (float)
    #     (float/5.0).round * 5
    # end
    

end
