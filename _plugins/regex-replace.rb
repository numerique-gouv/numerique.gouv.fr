module Jekyll
  module TextFilter
    def regex_replace(input, regex, replacement = '')
      if input != nil
        input.to_s.gsub(Regexp.new(regex), replacement)
      end
    end

    def remove_p(input)
      if input != nil
        input.gsub!('<p>', '').gsub!('</p>', '')
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::TextFilter)
