class Doctor < ActiveRecord::Base
  belongs_to :doctor_category

  validates :first_name, :last_name, :address, :phone, :website, :doctor_category_id, presence: true

  def full_name
    "#{first_name} #{last_name}"
  end

  def websiteURL
    if website.include?('http://') || website.include?('https://')
      "#{website}"
    else
      "http://#{website}"
    end
  end
end
