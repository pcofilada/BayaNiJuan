module InputTypes
  module Assistance
    class AssistanceAttributes < Types::BaseInputObject
      argument :contact_number, String, required: true
      argument :requester, String, required: true
      argument :details, String, required: true
      argument :lat, Float, required: true
      argument :lng, Float, required: true
    end
  end
end
