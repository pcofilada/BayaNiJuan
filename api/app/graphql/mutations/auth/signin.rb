module Mutations
  module Auth
    class Signin < BaseMutation
      argument :attributes, InputTypes::Auth::SigninAttributes, required: true

      type Types::AccountType

      def resolve(attributes:)
        ::Auth.new(attributes.to_h).signin
      end
    end
  end
end
