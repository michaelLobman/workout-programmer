class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def next_week
        user = find_user
        reset_progressions(user)
        user.update!(current_week: user.current_week + 1)
        render json: user
    end

    

    def show
        user = find_user
        render json: user
    end


    private

    # do i need current week here? Or can that be supplied by the backend?

    def user_params
        params.permit(:username, :password, :full_name, :current_week)
    end

    def find_user
        User.find(session[:user_id])
    end

    def reset_progressions(user)
        user.progressions.each{ |progression| progression.update!(sets_completed: false) }
    end
    

end
