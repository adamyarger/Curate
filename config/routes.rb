Rails.application.routes.draw do
  
  get 'static_pages/home'

  get 'static_pages/about'

  devise_for :users
  root 'welcome#index'
  
end
