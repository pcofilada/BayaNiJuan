class Signin
  def initialize(attributes)
    @account = Account
               .where(mobile_number: attributes[:mobile_number])
               .first_or_create
  end

  def call
    return unless @account.valid? && @account.touch

    send_code

    @account
  end

  private

  def send_code
    credentials = Rails.application.credentials.dig(Rails.env.to_sym)
    client = Twilio::REST::Client.new

    client
      .messages
      .create(from: credentials.dig(:twilio, :phone_number),
              to: @account.mobile_number,
              body: "Your authentication code is #{@account.auth_code}.")
  end
end
