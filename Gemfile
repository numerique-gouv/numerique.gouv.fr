source "https://rubygems.org"
ruby RUBY_VERSION

# Ruby Requirement
# ruby '2.2.3'

# Dependencies for Windows only
gem "tzinfo"
gem "tzinfo-data"

#dependencies for algolia
gem "pkg-config", "~> 1.1"

gem "jekyll", "~> 3.8"

# Gem Requirements
group :jekyll_plugins do
	gem 'sass'
	gem 'jekyll-sitemap'
	gem 'jekyll-algolia'
	gem 'jekyll-feed'
end

gem 'wdm', '>= 0.1.0' if Gem.win_platform?
