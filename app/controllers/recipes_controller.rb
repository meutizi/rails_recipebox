class RecipesController < ApplicationController
  def index
    @recipes = if params[:keywords]
        Recipe.where('name like ?',"%#{params[:keywords]}%").take(5)
    else
        Recipe.all.take(5)
    end
  end
end
