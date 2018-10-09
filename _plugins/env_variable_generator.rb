module Jekyll
  class EnvironmentVariablesGenerator < Generator
    def generate(site)
      variables = ['GITHUB_ACCESS_TOKEN']
      site.config['env'] = {}
      ENV.each do |key, value|
        if variables.include? key
          site.config['env'][key] = value
        end
      end
      site
    end
  end
end
