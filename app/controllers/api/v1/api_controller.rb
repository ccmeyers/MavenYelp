module Api
  module V1
    class ApiController < ApplicationController
      include Brainstem::ControllerMethods

      rescue_from StandardError, with: :server_error
      rescue_from Brainstem::SearchUnavailableError, with: :search_unavailable
      rescue_from ActiveRecord::RecordNotDestroyed, with: :record_not_destroyed
      rescue_from ActiveRecord::RecordNotFound,
                  ActionController::RoutingError, with: :page_not_found

      private

      # def api_authenticate
      #   # Implement your authentication here.  We recommend Doorkeeper.
      # end

      def server_error(exception)
        render json: brainstem_system_error("A server error has occurred."), status: 500
      end

      def search_unavailable
        render json: brainstem_system_error('Search is currently unavailable'), status: 503
      end

      def page_not_found
        render json: brainstem_system_error('Record not found'), status: 404
      end

      def record_not_destroyed
        render json: brainstem_model_error("Could not delete the #{brainstem_model_name.humanize.downcase.singularize}"), status: :unprocessable_entity
      end
    end
  end
end
