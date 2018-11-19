module Jekyll
  module Algolia
    module Hooks
      def self.before_indexing_each(record, node, context)
        if !record[:event_start_date].nil? && !record[:event_end_date].nil?
          start_date = Date.parse(record[:event_start_date])
          end_date = Date.parse(record[:event_end_date])
          record[:dates] = []
          (start_date..end_date).each do |date|
            record[:dates] << date.to_time.to_i
          end
          record[:event_start_date] = start_date.to_time.to_i
          record[:event_end_date] = end_date.to_time.to_i
        elsif !record[:event_start_date].nil?
          start_date = Date.parse(record[:event_start_date]).to_time.to_i
          record[:event_start_date] = start_date
          record[:dates] = [start_date]
        end

        [:content, :"chapeau-text", :title].each do |field|
            record[field].gsub!('*', '') unless record[field].nil?
            record[field].gsub!('##', '') unless record[field].nil?
            record[field].gsub!('> ', '') unless record[field].nil?
            record[field].gsub!(/\]{(.*?)}\((.*?)\)/, '') unless record[field].nil?
            record[field].gsub!(/\]\((.*?)\)/, '') unless record[field].nil?
            record[field].gsub!(/{(.*?)}/, '') unless record[field].nil?
            record[field].gsub!(/\[/, '') unless record[field].nil?
          end

        record
      end
    end
  end
end
