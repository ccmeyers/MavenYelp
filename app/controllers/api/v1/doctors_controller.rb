module Api
  module V1
    class DoctorsController < ApiController

      def index
        render json: brainstem_present('doctors'){ Doctor.all }
      end

    end
  end
end
