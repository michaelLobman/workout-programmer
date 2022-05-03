class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        params[:exercises].each do |exercise|
            binding.break
            ex_id = MainEx.find(exercise[:id]).id
            max = max(exercise[:weight], exercise[:reps])
            user.progressions.create!(main_ex_id: ex_id, baseline_max: max)
        end
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def next_week
        user = find_user
        reset_progressions(user)

        new_week = user.week_id == 4 ? 1 : user.week_id + 1
        user.update!(week_id: new_week)
        user.update!(current_week: user.current_week + 1)
        user.update!(phase: user.phase + 1) unless user.current_week % 4 != 1

        render json: user
    end

    

    def show
        user = find_user
        render json: user
    end


    private

    # do i need week_id here? I don't think so...

    def user_params
        params.permit(:username, :password, :full_name)
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
