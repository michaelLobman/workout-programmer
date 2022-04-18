class ExSetsController < ApplicationController

    def show
        render json: ExSet.where(week_id: params[:id]).order(num: :asc)
    end

end