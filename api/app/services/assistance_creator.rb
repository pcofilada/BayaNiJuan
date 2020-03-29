class AssistanceCreator
  def initialize(user, attributes)
    @assistance = user.assistances.new(attributes)
  end

  def create
    return nil unless @assistance.valid?

    @assistance.save
    @assistance
  end
end
