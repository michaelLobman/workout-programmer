class ProgressionsController < ApplicationController

    skip_before_action :authorize, only: :index_user_progressions

    def index_user_progressions
        user = find_user
        render json: user.progressions.order(main_ex_id: :asc)
    end

    def update_user_progressions
        progression = find_progression
        user = find_user
        progression.update!(sets_completed: true)
        new_max = max(params[:weight], params[:reps])
        greater = new_max > progression.current_max ? new_max : current_max
        progression.update!(current_max: greater)
        render json: user.progressions.order(main_ex_id: :asc)
    end

    def update
        # binding.break
        progression = Progression.find(params[:id])
        progression.update!(progression_params)
        render json: progression
    end

    private

    def progression_params
        params.permit(:sets_completed, :main_ex_id, :user_id, :current_max, :baseline_max)
    end

    def find_user
        User.find(params[:user_id])
    end

    def find_progression
        Progression.find(params[:id])
    end

end
