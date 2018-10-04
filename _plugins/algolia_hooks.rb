module Jekyll
  module Algolia
    module Hooks
      def self.before_indexing_each(record, node, context)
        if record[:event_date] != nil
          record[:event_date] = Date.parse(record[:event_date]).to_time.to_i
        end
        record
      end
    end
  end
end
