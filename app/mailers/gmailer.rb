class Gmailer < ActionMailer::Base
    #Eventually this will have a "user" parameter that will be the receiver. We will get this from the loop.
    def sample_email()
      #insert receiver
      mail :from => ENV['gmail_username'], :to => 'sample@gmail.com', :subject => 'Sample Email'
    end
end
