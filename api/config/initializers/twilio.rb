credentials = Rails.application.credentials.dig(Rails.env.to_sym)

Twilio.configure do |config|
  config.account_sid = credentials.dig(:twilio, :account_sid)
  config.auth_token = credentials.dig(:twilio, :auth_token)
end
