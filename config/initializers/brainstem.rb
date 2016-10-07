# In order to support live code reload in the development environment, we register a `to_prepare` callback.  This
# runs once in production (before the first request) and whenever a file has changed in development.
Rails.application.config.to_prepare do
  # Forget all Brainstem configuration.
  Brainstem.reset!

  # Set the current default API namespace.
  Brainstem.default_namespace = :v1

  # (Optional) Load a default base helper into all presenters. You could use this to bring in a concept like `current_user`.
  # While not necessarily the best approach, something like http://stackoverflow.com/a/11670283 can currently be used to
  # access the requesting user inside of a Brainstem presenter. We hope to clean this up by allowing a user to be passed in
  # when presenting in the future.
  # module ApiHelper
  #   def current_user
  #     Thread.current[:current_user]
  #   end
  # end
  # Brainstem::Presenter.helper(ApiHelper)

  # Load the presenters themselves.
  Dir[Rails.root.join("lib/api/v1/*_presenter.rb").to_s].each { |presenter_path| require_dependency(presenter_path) }
end
