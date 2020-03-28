class JsonWebToken
  SECRET_KEY_BASE = Rails.application.credentials.dig(:secret_key_base)

  def self.encode(id)
    payload = { id: id }

    JWT.encode(payload, SECRET_KEY_BASE)
  end

  def self.decode(token)
    token = JWT.decode(token, SECRET_KEY_BASE)[0]

    HashWithIndifferentAccess.new(token)
  rescue StandardError
    { status: 403, message: 'Token mismatch' }
  end
end
