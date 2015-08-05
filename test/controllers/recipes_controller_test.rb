require 'test_helper'

class RecipesControllerTest < ActionController::TestCase

    test "should get index" do
        get :index, format: 'json'
        assert_response :success
        body = JSON.parse(response.body)
        assert body.length == Recipe.all.take(5).length
    end
    
    test "should return expected results" do
        get :index, format: 'json', :keywords => 'baked'
        assert_response :success
        body = JSON.parse(response.body)
        assert body.length == Recipe.where('name like ?',"%baked%").take(5).length
    end
end