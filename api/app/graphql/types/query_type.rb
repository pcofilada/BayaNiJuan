module Types
  class QueryType < Types::BaseObject
    field :assistances, resolver: Queries::Assistances, null: true
  end
end
