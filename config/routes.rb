Rails.application.routes.draw do
  patch '/progressions/user/:user_id/:id', to: 'progressions#update_user_progressions'
  patch '/progressions/user/:user_id/edit_baseline/:id', to: 'progressions#edit_baseline'

  get '/users/:user_id/next_week', to: 'users#next_week'
  get '/users/:user_id/previous_week', to: 'users#previous_week'

  get '/users/:user_id/restart', to: 'users#restart'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
