# frozen_string_literal: true

require 'mongoid'

# Todo model represents a task in the todo list
class Todo
  include Mongoid::Document # Includes Mongoid's features for document mapping
  include Mongoid::Timestamps # Automatically manage created_at and updated_at fields

  # Fields representing the attributes of a todo item
  field :title, type: String
  field :description, type: String
  field :completed, type: Boolean, default: false

  # Validations to ensure data integrity
  validates :title, presence: true
end
