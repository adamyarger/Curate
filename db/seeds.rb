User.create!(name:  "Example User",
             email: "example@example.org",
             password:              "gangstar1",
             password_confirmation: "gangstar1",
             admin: true)

99.times do |n|
  name  = Faker::Name.name
  email = "example-#{n+1}@example.org"
  password = "password"
  User.create!(name:  name,
               email: email,
               password:              password,
               password_confirmation: password)
end

# Microposts
users = User.order(:created_at).take(6)
50.times do
  body = Faker::Lorem.sentence(5)
  users.each { |user| user.posts.create!(body: body) }
end

# Messages
users = User.order(:created_at).take(6)
50.times do
  content = Faker::Lorem.sentence(5)
  users.each { |user| user.messages.create!(content: content) }
end

# Following relationships
users = User.all
user  = users.first
following = users[2..50]
followers = users[3..40]
following.each { |followed| user.follow(followed) }
followers.each { |follower| follower.follow(user) }