class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize


private

def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { error: ['Not authorized'] }, status: :unauthorized unless @current_user
end

def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
end

def max (weight, reps)
    nearest_five(weight * reps * 0.0333 + weight)
end

def nearest_five (float)
    (float/5.0).round * 5
end

end
