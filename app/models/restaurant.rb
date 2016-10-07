class Restaurant < ActiveRecord::Base
  has_many :cuisines, through :restaurant_cuisines
end
