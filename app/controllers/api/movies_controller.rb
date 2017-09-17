class Api::MoviesController < ApplicationController
  def index
    render json: Movie.all.to_json
  end

  def create
    attrs = params.permit(:title, :summary, :date, :img)
    movie = Movie.new(attrs)

    if movie.save
      render json: movie

    else 
      render json: { errors: movie.errors.full_messages }, status: 422
    end
  end

  def destroy
    Movie.find(params[:id]).destroy
  end
end
