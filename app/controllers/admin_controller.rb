class AdminController < ApplicationController
    def email
        Gmailer.sample_email().deliver_now()
    end
end