class AdminController < ApplicationController
  def home
  end

  def close_form
  end

  def generate_matches
  end

  def results
  end
<<<<<<< HEAD
  def match_pair
    puts JSON.parse(request.body.read)
    render text: ""
  end

  def undo_pair
    puts JSON.parse(request.body.read)
    render text: ""
  end
=======
>>>>>>> 08f19b11807f5ef685ef031a745600479e0f2556
end
