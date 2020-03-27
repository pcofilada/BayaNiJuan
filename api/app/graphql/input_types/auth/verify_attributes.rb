module InputTypes
  module Auth
    class VerifyAttributes < Types::BaseInputObject
      argument :user_id, ID, required: true
      argument :auth_code, String, required: true
    end
  end
end
