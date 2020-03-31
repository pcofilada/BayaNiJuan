class Signin
  def initialize(attributes)
    @account = Account
               .where(mobile_number: attributes[:mobile_number])
               .first_or_create
  end

  def call
    return unless @account.valid?

    @account.update(auth_code: generate_auth_code)
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
              body: "Your authentication code is #{@account.auth_code}. For your protection, do not share this code with anyone.")
  end

  def generate_auth_code
    loop do
      code = SecureRandom.hex(3)
      break code unless Account.where(auth_code: code).first
    end
  end
end
