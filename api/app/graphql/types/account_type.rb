module Types
  class AccountType < BaseObject
    field :id, ID, null: false
    field :mobile_number, String, null: false
    field :auth_code, String, null: false
  end
end
