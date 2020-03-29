module Mutations
  module Assistance
    class CreateAssistance < BaseMutation
      argument :attributes, InputTypes::Assistance::AssistanceAttributes, required: true

      type Types::AssistanceType

      def resolve(attributes:)
        AssistanceCreator.new(context[:current_user], attributes.to_h).create
      end
    end
  end
end
