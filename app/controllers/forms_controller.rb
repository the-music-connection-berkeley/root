class FormsController < ApplicationController

  def teacher
      session[:question_number] = params[:inputs]
      puts(params)
      if (question_number == 1)
          if params[:answers][question_numbewr] == "In-class"
            cur_question_number = 3
            redirect_to forms/teachers
          else

          end
      end
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
