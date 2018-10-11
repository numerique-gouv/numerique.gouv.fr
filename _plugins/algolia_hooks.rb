module Jekyll
  module Algolia
    module Hooks
      def self.before_indexing_each(record, node, context)
        unless record[:event_start_date] == nil
          record[:event_start_date] = Date.parse(record[:event_start_date]).to_time.to_i
        end
        unless record[:event_end_date] == nil
          record[:event_end_date] = Date.parse(record[:event_end_date]).to_time.to_i
        end
        record
      end
    end
  end
end
