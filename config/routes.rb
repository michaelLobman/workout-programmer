Rails.application.routes.draw do
  resources :ex_sets, only: [:show]
  resources :progressions, only: [:update]

  get '/progressions/user/:user_id', to: 'progressions#index_user_progressions'
  get '/progressions/user/:user_id/:id', to: 'progressions#update_user_progressions'

  get '/users/:user_id/next_week', to: 'users#next_week'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


end
