class PasswordResetsController < ApplicationController

    skip_before_action :authorize

    # i think i can delete the "new" method and its corresponding route
    def new
    
    end

    def create
        user = User.find_by(email: params[:email])

        if user
            #send email
        end
        render json: { response: "If an account with that email found, an email to reset the password has been sent." }

    end
end
