class Account < ApplicationRecord
  before_commit :generate_auth_code, on: :update

  private

  def generate_auth_code
    self.auth_code = SecureRandom.hex(3)
    generate_auth_code if Account.exists?(auth_code: auth_code)
  end
end
