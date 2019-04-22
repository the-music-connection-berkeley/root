# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)
desc "Run unit tests and ensure 100% code coverage"
task :ci do
  Rake::Task['spec'].invoke
  enforce_coverage(100.0)
end

def enforce_coverage(threshold)
  result = File.read("coverage/.last_run.json")
  obj = JSON.parse(result)
  covered = obj["result"]["covered_percent"]
  msg = "Coverage rate #{covered}% is below the threshold of #{threshold}%"
  raise msg if covered < threshold
end
Rails.application.load_tasks
