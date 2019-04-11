class SessionsController < ApplicationController
  def new
  end

  def create
    if (params[:session][:username].nil? or params[:session][:username].empty?)
      flash[:warning] = "No username given"
      render 'new'
    elsif (params[:session][:password].nil? or params[:session][:password].empty?)
      flash[:warning] = "No password given"
      render 'new'
    end
  end

  #   user = User.find_by(username: params[:session][:username])
  #
  #   if (user.nil?)
  #     flash.now[:danger] = "Username and password does not match"
  #     render 'new'
  #   end
  #
  #   if user.authenticate(params[:session][:password])
  #     flash[:success] = "Login succeeded"
  #     session[:username] = params[:session][:username]
  #     redirect_to admin_page
  #   else
  #     flash.now[:danger] = "Login failed"
  #     render 'new'
  #   end
  # end

  def destroy
  end
end
