Rails.application.routes.draw do
  
  get 'static_pgaes/home'

  get 'static_pgaes/about'

  devise_for :users
  root 'welcome#index'
  
end
