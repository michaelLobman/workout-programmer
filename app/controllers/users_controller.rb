class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
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

end
