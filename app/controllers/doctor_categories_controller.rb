class DoctorCategoriesController < ApplicationController

  def create
    @doctor_category = DoctorCategory.new(doctor_category_params)
  end

  private

  def doctor_category_params
    params.require(:doctor_category).permit(:name)
  end
end
