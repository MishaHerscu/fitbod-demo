ActiveAdmin.register Workout do
  permit_params do
    permitted = :list, :of, :attributes, :on, :model
    if current_admin_user && ['create', 'update', 'destroy'].include?(params[:action])
      permitted << :id
      permitted << :user_id
      permitted << :date
      permitted << :duration
    end
    permitted
  end

  csv do
    column :id, humanize_name: false
    column :user_id, humanize_name: false
    column :date, humanize_name: false
    column :duration, humanize_name: false
    column :created_at, humanize_name: false
    column :updated_at, humanize_name: false
  end

  controller do
    def update
      if params[:user][:password_digest].blank?
        %w(password password_confirmation password_digest).each { |p| params[:user].delete(p) }
      end

      super
    end
  end

  action_item(:index) do
    link_to 'Upload CSV', :action => 'upload_csv'
  end

  collection_action :upload_csv do
    render "admin/csv/upload_csv.html.haml"
  end

  collection_action :import_csv, :method => :post do
    CsvDb.convert_save("workout", params[:dump][:file])
    redirect_to :action => :index, :notice => "CSV imported successfully!"
  end
end
