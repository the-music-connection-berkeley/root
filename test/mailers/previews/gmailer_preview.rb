# Preview all emails at http://localhost:3000/rails/mailers/gmailer
class GmailerPreview < ActionMailer::Preview
    def sample_mail_preview
      Gmailer.sample_email()
    end
  end