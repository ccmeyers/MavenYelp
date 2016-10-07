module Api
  module V1
    class DoctorPresenter < Brainstem::Presenter
      presents Doctor

      default_sort_order "updated_at:desc"

      sort_order :updated_at, "doctors.updated_at"

      fields do
        field :first_name, :string
        field :last_name, :string
        field :practice_name, optional: true
        field :address, :string
        field :phone, :string
        field :website, :string
        field :rating, :string, optional: true
        field :review, :string, optional: true
        field :doctor_category_id, :integer
        field :updated_at, :datetime
        field :created_at, :datetime
      end

      associations do
        association :doctor_category, DoctorCategory
      end

    end
  end
end
