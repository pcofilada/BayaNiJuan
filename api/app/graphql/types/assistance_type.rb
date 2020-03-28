module Types
  class AssistanceType < BaseObject
    field :id, ID, null: false
    field :requester, String, null: false
    field :contact_number, String, null: false
    field :lat, Float, null: false
    field :lng, Float, null: false
    field :details, String, null: false
  end
end
