Rails.application.routes.draw do

  get 'static_pages/about'
  root 'static_pages#home'
  
  devise_for :users

  
  
end
