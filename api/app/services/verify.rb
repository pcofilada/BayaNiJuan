class Verify
  def initialize(attributes)
    @attributes = attributes
    @account = Account.find_by(id: @attributes[:user_id])
  end

  def call
    raise_error unless @account && verify_code

    { token: JsonWebToken.encode(@account.id) }
  end

  private

  def raise_error
    raise GraphQL::ExecutionError, 'Authentication error!'
  end

  def verify_code
    @account.auth_code == @attributes[:auth_code]
  end
end
