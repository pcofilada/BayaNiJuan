module Queries
  class Assistances < BaseQuery
    type [Types::AssistanceType], null: true

    def resolve
      ::Assistance.all
    end
  end
end
