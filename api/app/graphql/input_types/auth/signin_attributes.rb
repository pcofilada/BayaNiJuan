module InputTypes
  module Auth
    class SigninAttributes < Types::BaseInputObject
      argument :mobile_number, String, required: true
    end
  end
end
