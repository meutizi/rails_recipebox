require 'test_helper'

class RecipesControllerTest < ActionController::TestCase

    test "should get index" do
        get :index, format: 'json'
        assert_response :success
        body = JSON.parse(response.body)
    end
end