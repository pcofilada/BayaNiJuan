module Mutations
  module Auth
    class Verify < BaseMutation
      argument :attributes, InputTypes::Auth::VerifyAttributes, required: true

      field :token, String, null: true

      def resolve(attributes:)
        ::Verify.new(attributes.to_h).call
      end
    end
  end
end
