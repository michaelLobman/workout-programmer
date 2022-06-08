class ProgressionsController < ApplicationController
    skip_before_action :authorize, only: :index_user_progressions

    def index_user_progressions
        user = find_user
        render json: user.progressions.order(main_ex_id: :asc)
    end

    def edit_baseline
        progression = find_progression
        max = max(params[:weight], params[:reps])
        progression.update!(baseline_max: max, current_max: max)
        user = find_user
        render json: user.progressions.order(main_ex_id: :asc)
    end

    def update_user_progressions
        progression = find_progression
        user = find_user
        progression.update!(sets_completed: true)
        new_max = max(params[:weight], params[:reps])
        progression.update!(current_max: new_max) unless new_max < progression.current_max
        render json: user.progressions.order(main_ex_id: :asc)
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
