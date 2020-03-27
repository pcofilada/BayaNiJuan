module Mutations
  module Auth
    class Signin < BaseMutation
      argument :attributes, InputTypes::Auth::SigninAttributes, required: true

      type Types::AccountType

      def resolve(attributes:)
        ::Signin.new(attributes.to_h).call
      end
    end
  end
end
