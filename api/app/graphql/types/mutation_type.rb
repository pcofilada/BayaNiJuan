module Types
  class MutationType < Types::BaseObject
    field :signin, mutation: Mutations::Auth::Signin
    field :verify, mutation: Mutations::Auth::Verify
  end
end
