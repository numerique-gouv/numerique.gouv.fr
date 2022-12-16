source "https://rubygems.org"
ruby RUBY_VERSION

# Ruby Requirement
# ruby '2.7.2'

# Dependencies for Windows only
gem "tzinfo"
gem "tzinfo-data"

#dependencies for algolia
gem "pkg-config"

gem "jekyll", '3.9.1'
gem 'kramdown-parser-gfm'

# Gem Requirements
group :jekyll_plugins do
	gem 'sass'
	gem 'jekyll-sitemap'
	gem 'jekyll-algolia'
  gem 'jekyll-redirect-from'
end

gem 'wdm', '>= 0.1.0' if Gem.win_platform?
