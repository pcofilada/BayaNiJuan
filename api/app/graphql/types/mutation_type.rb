module Types
  class MutationType < Types::BaseObject
    field :signin, mutation: Mutations::Auth::Signin
  end
end
