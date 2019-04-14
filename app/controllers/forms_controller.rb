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

  def teacher_submit
      puts "SUBMIT!"
      redirect_to '/'
  end

  def student_submit
      puts "SUBMIT!"
      redirect_to '/'
  end

  def tutor_submit
    puts "SUBMIT!"
    redirect_to '/'
  end
  
end
