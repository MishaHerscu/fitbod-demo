require 'csv'
class CsvDb
  class << self
    def convert_save(model_name, csv_data)
      csv_file = csv_data.read
      csv_file.to_s.force_encoding("UTF-8")
      csv_file.sub!("\xEF\xBB\xBF", '')
      target_model = model_name.classify.constantize
      headers = csv_file.split("\n")[0].split(",")
      CSV.parse(csv_file, headers: true) do |row|
        new_object = target_model.new
        column_iterator = -1
        headers.each do |key|
          column_iterator += 1
          value = row[column_iterator]
          new_object.send "#{key.to_s.chomp}=", value
        end
        new_object.save
      end
      ActiveRecord::Base.connection.reset_pk_sequence!(model_name.pluralize)
    end
  end
end
