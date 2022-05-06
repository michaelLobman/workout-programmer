Rails.application.routes.draw do
  resources :ex_sets, only: [:show]
  resources :progressions, only: [:update]

  # route no longer used
  # get '/progressions/user/', to: 'progressions#index_user_progressions'
  
  patch '/progressions/user/:user_id/:id', to: 'progressions#update_user_progressions'

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
