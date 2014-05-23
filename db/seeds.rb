# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Pin.destroy_all
Pin.create([{ lat: '34.36', lng: '58.22' }])
Pin.create([{ lat: '37.46', lng: '122.25' }])
Pin.create([{ lat: '37.59', lng: '23.43' }])

