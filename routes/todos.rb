# frozen_string_literal: true

require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/cross_origin'
require 'json'
require 'byebug'

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
  response.headers['Access-Control-Allow-Methods'] = 'HEAD,GET,POST,OPTIONS,PUT,PATCH,DELETE'
  response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
end

options '*' do
  200
end

# Route to display all todo items
get '/' do
  Todo.all.to_json
end

# Route to create a new todo item
post '/todos' do
  request.body.rewind
  data = JSON.parse(request.body.read)
  todo = Todo.new(title: data['title'])
  if todo.save
    status 201
    todo.to_json
  else
    status 404
    { error: 'Error creating todo item!' }.to_json
  end
end

# Route to update the status of a todo item
patch '/todos/:id' do
  todo = Todo.find(params[:id])
  status = todo.completed
  if todo&.update(completed: !status) # Toggle the completed status
    status 200
    todo.to_json
  else
    status 404
    { error: 'Todo not found' }.to_json
  end
end

# Route to delete a todo item
delete '/todos/:id' do
  todo = Todo.find(params[:id])
  if todo&.destroy
    status 200
    { message: 'Todo item deleted successfully!' }.to_json
  else
    status 404
    { error: 'Todo not found' }.to_json
  end
end

options '*' do
  response.headers['Allow'] = 'HEAD,GET,POST,OPTIONS'
  response.headers['Access-Control-Allow-Methods'] = 'HEAD,GET,POST,OPTIONS'
  response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
  200
end
