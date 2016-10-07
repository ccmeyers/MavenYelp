# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
specialties = [
  'Acupuncturist',
  'Allergist (Immunologist)',
  'Cardiologist',
  'Cardiothoracic Surgeon',
  'Chiropractor',
  'Dentist',
  'Dermatologist',
  'Dietitian / Nutritionist',
  'Ear, Nose & Throat Doctor (ENT)',
  'Endocrinologist (incl Diabetes Specialists)',
  'Eye Doctor',
  'Gastroenterologist',
  'Hearing Specialist',
  'Hematologist (Blood Specialist)',
  'Infectious Disease Specialist',
  'Infertility Specialist',
  'Midwife',
  'Naturopathic Doctor',
  'Nephrologist (Kidney Specialist)',
  'Neurologist (incl Headache Specialists)',
  'Neurosurgeon',
  'OB-GYN (Obstetrician-Gynecologist)',
  'Oncologist',
  'Ophthalmologist',
  'Optometrist',
  'Orthodontist',
  'Orthopedic Surgeon (Orthopedist)',
  'Pain Management Specialist',
  'Pediatric Dentist',
  'Pediatrician',
  'Physiatrist (Physical Medicine)',
  'Physical Therapist',
  'Plastic Surgeon',
  'Podiatrist (Foot and Ankle Specialist)',
  'Primary Care Doctor',
  'Prosthodontist',
  'Psychiatrist',
  'Psychologist',
  'Pulmonologist (Lung Doctor)',
  'Radiologist',
  'Rheumatologist',
  'Sleep Medicine Specialist',
  'Sports Medicine Specialist',
  'Surgeon',
  'Therapist / Counselor',
  'Urgent Care Doctor',
  'Urological Surgeon',
  'Urologist',
  'Vascular Surgeon'
]

specialties.each do |specialty|
  DoctorCategory.create( name: specialty )
end
