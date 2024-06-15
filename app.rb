# frozen_string_literal: true

require 'sinatra'
require 'mongoid'

# DB Setup
Mongoid.load! 'mongoid.yml'

# Require all models
Dir[File.join(File.dirname(__FILE__), 'models', '*.rb')].each { |file| require file }

# Require all route files
Dir[File.join(File.dirname(__FILE__), 'routes', '*.rb')].each { |file| require file }
