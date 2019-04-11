class FormsController < ApplicationController

  def teacher
  end

  def parent_student
  end

  def tutor
      session[:q_page] = 0
      @q_page = 0
      render 'tutor'
  end

  def tutor_next_q
      @q_page = session[:q_page] + 1
      render 'tutor'
  end
end
