module Types
  class MutationType < Types::BaseObject
    field :signin, mutation: Mutations::Auth::Signin
    field :verify, mutation: Mutations::Auth::Verify
    field :create_assistance, mutation: Mutations::Assistance::CreateAssistance
  end
end
