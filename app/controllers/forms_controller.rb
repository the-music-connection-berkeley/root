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
      name = params[:question][:teacher_name]
      phone = params[:question][:phone]
      email = params[:question][:email]
      teacher = Teacher.new
      teacher.attributes = {name: name, phone: phone, email: email}
      teacher.save!
      render 'thank_you'
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
