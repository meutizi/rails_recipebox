source 'https://rubygems.org'


gem 'rails', '4.2.3'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'sass'
gem 'bower-rails'
gem 'foreman'

#bug with current angular-rails-templates and sprockets, so manually change sprockets to 2.12.3 via bundle update sprockets command.
gem 'angular-rails-templates'
gem 'sprockets', '2.12.3'

group :development, :test do
  gem 'sqlite3'
  gem 'byebug'
  gem 'web-console', '~> 2.0'
  gem 'spring'

  #gem "factory_girl_rails", "~> 4.0"
  #gem "capybara"
  #gem "database_cleaner"
  #gem "selenium-webdriver"
end

group :test do
  gem 'minitest-reporters', '1.0.5'
  gem 'mini_backtrace',     '0.1.3'
  gem 'guard-minitest',     '2.3.1'  
end

group :production, :staging do
  gem 'pg'
  gem "rails_12factor"
  gem "rails_stdout_logging"
  gem "rails_serve_static_assets"
end
